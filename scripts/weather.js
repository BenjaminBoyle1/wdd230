const apiKey = '23da78cc5a29fc1267bc86b249b3bd82';
const city = 'Provo'; // You can change this to your desired city
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

async function getWeather() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const condition = data.weather[0].description;
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById('temperature').textContent = `Temperature: ${temperature}°F`;
    document.getElementById('condition').textContent = `Condition: ${condition}`;
    document.getElementById('weather-icon').src = icon;
    document.getElementById('weather-icon').alt = condition;
}

getWeather();
