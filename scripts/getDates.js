// Dynamically populate current year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Dynamically populate last modified date in the footer
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;
