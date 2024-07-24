const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

document.getElementById("hamburger").addEventListener("click", function() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
    this.textContent = this.textContent === "☰" ? "✖" : "☰";
});

