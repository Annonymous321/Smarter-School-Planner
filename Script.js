// Initialize classes array to store class information
let classes = [];

// Function to display the popup after 1 second
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("popup").style.display = "block";
    }, 1000);
});

// Function to organize classes by semester
function organizeBySemester() {
    classes = getCustomClasses(); // Fetch existing custom classes
    // Additional logic for organizing by semester
    // For demonstration purposes, adding sample classes
    classes.push({ name: "Math", semester: 1, block: 1 });
    classes.push({ name: "English", semester: 1, block: 2 });
    classes.push({ name: "Science", semester: 2, block: 1 });
    organizeClasses();
}

// Function to organize classes by block
function organizeByBlock() {
    classes = getCustomClasses(); // Fetch existing custom classes
    // Additional logic for organizing by block
    // For demonstration purposes, adding sample classes
    classes.push({ name: "Math", block: 1 });
    classes.push({ name: "English", block: 2 });
    classes.push({ name: "Science", block: 1 });
    organizeClasses();
}

// Function to organize classes and update time periods
function organizeClasses() {
    // Sort classes by semester and block
    classes.sort((a, b) => a.semester - b.semester || a.block - b.block);

    // Update time periods based on school start time
    const schoolStartTime = new Date("2024-01-01T08:00:00"); // Replace with actual start time

    classes.forEach((cls, index) => {
        const classStartTime = new Date(schoolStartTime);
        classStartTime.setMinutes(schoolStartTime.getMinutes() + index * 90); // Assuming 90 minutes per class

        cls.startTime = formatTime(classStartTime);
        cls.endTime = formatTime(new Date(classStartTime.getTime() + 90 * 60 * 1000));

        // Additional logic to update other class properties as needed
    });

    // Display or use the organized class data
    updateClassTable();
}

// Function to add a custom class
function addCustomClass() {
    const className = document.getElementById("className").value;
    const semester = parseInt(document.getElementById("semester").value);
    const block = parseInt(document.getElementById("block").value);

    if (className && !isNaN(semester) && !isNaN(block)) {
        classes.push({ name: className, semester: semester, block: block });
        organizeClasses();
    }

    // Clear the form fields
    document.getElementById("className").value = "";
    document.getElementById("semester").value = "";
    document.getElementById("block").value = "";
}

// Function to fetch existing custom classes
function getCustomClasses() {
    // Replace this with logic to fetch classes from a database or storage
    // For simplicity, return an empty array for now
    return [];
}

// Function to display or use the organized class data
function updateClassTable() {
    // Display or update the user interface with the organized class data
    // For simplicity, log the classes to the console
    console.log(classes);
}

// Utility function to format time
function formatTime(date) {
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return new Intl.DateTimeFormat("en-US", options).format(date);
}
