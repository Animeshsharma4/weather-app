function getWeather() {
  const apiKey = "c08c21f7fa18e3800f7cb133b017a938";
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      const weatherIcon = data.weather[0].icon;
      const weatherDescription = data.weather[0].description;
      const temperature = Math.round(data.main.temp - 273.15);
      const feelsLike = Math.round(data.main.feels_like - 273.15);
      const humidity = data.main.humidity;

      weatherInfo.innerHTML = `
                        <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherDescription}" class="weather-icon">
                        <div class="weather-info">
                            <p>Temperature: ${temperature}°C</p>
                            <p>Feels like: ${feelsLike}°C</p>
                            <p>Humidity: ${humidity}%</p>
                        </div>
                    `;
    })
    .catch((error) => {
      const weatherInfo = document.getElementById("weatherInfo");
      // weatherInfo.innerHTML = `<p>${error.message}</p>`;
      weatherInfo.innerHTML = `please enter correct information`;
    });
}
