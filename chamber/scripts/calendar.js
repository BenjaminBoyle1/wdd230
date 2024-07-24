// calendar.js

document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById("calendar");
    const today = new Date();
    let calendarHTML = "<table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>";

    // Get the first day of the month
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

    // Get the number of days in the month
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    // Fill in the days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        calendarHTML += "<td></td>";
    }

    // Fill in the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        if ((day + firstDay - 1) % 7 === 0) {
            calendarHTML += "</tr><tr>";
        }
        calendarHTML += `<td>${day}</td>`;
    }

    // Fill in the remaining cells of the last week
    const remainingCells = (7 - (daysInMonth + firstDay) % 7) % 7;
    for (let i = 0; i < remainingCells; i++) {
        calendarHTML += "<td></td>";
    }

    calendarHTML += "</tr></table>";
    calendar.innerHTML = calendarHTML;
});
