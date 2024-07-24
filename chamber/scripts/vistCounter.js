// visitCounter.js

document.addEventListener("DOMContentLoaded", function() {
    const visitMessage = document.querySelector(".visit-message");
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = Date.now();
    let message = "Welcome! Let us know if you have any questions.";

    if (lastVisit) {
        const diffTime = currentVisit - lastVisit;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 1) {
            message = "Back so soon! Awesome!";
        } else if (diffDays === 1) {
            message = `You last visited 1 day ago.`;
        } else {
            message = `You last visited ${diffDays} days ago.`;
        }
    }

    visitMessage.textContent = message;
    localStorage.setItem('lastVisit', currentVisit);
});
