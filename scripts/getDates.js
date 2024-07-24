document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent += document.lastModified;

document.getElementById("hamburger").addEventListener("click", function() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
    this.textContent = this.textContent === "☰" ? "✖" : "☰";
});

document.getElementById("darkModeToggle").addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
document.addEventListener("DOMContentLoaded", function() {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visitCount').textContent = visitCount;
});
