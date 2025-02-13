// 272b7450b5bff14549f0adf3cda773e2

const apiKey = '272b7450b5bff14549f0adf3cda773e2';
const searchBtn = document.getElementById('search-btn');
const weatherResult = document.getElementById('weather-result');

searchBtn.addEventListener('click', () => {
  const city = document.getElementById('city-input').value;
  if (city) {
    getWeather(city);
  } else {
    weatherResult.innerHTML = '<p>Please enter a city name.</p>';
  }
});

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherResult.innerHTML = `<p>${error.message}</p>`;
  }
}

function displayWeather(data) {
  const { name, main, weather, wind } = data;
  weatherResult.innerHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${main.temp}°C</p>
    <p>Humidity: ${main.humidity}%</p>
    <p>Weather: ${weather[0].description}</p>
    <p>Wind Speed: ${wind.speed} m/s</p>
    <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}">
  `;
}

// Theme Mode Switch
const defaultMode = document.getElementById('default-mode');
const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');

defaultMode.addEventListener('click', () => {
  document.body.className = '';
});
lightMode.addEventListener('click', () => {
  document.body.className = 'light-mode';
});
darkMode.addEventListener('click', () => {
  document.body.className = 'dark-mode';
});
