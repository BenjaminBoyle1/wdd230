const baseURL = 'https://benjaminboyle1.github.io/wdd230'; // Replace with your actual GitHub Pages URL
const linksURL = `${baseURL}/data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching links data:', error);
    }
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById('links-container');
    linksContainer.innerHTML = ''; // Clear existing content

    weeks.forEach(week => {
        // Create a section for each week
        const weekSection = document.createElement('div');
        weekSection.classList.add('week-section');

        // Create a title for the week
        const weekTitle = document.createElement('span');
        weekTitle.textContent = `${week.week}: `;
        weekSection.appendChild(weekTitle);

        // Add links to the week section
        week.links.forEach((link, index) => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title;
            weekSection.appendChild(linkElement);

            // Add a separator except after the last link
            if (index < week.links.length - 1) {
                const separator = document.createElement('span');
                separator.classList.add('separator');
                separator.textContent = '|';
                weekSection.appendChild(separator);
            }
        });

        linksContainer.appendChild(weekSection);
    });
}

getLinks();
