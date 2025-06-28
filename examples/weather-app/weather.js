import { reactive, createEffect, render } from "stitch-js";

const state = reactive({
  selectedCity: "Sohag",
  weather: {
    temperature: "N/A",
    humidity: "N/A",
    description: "",
  },
});

const mockWeatherData = {
  Sohag: { temperature: "39°C", humidity: "55%", description: "Sunny" },
  Luxor: { temperature: "20°C", humidity: "35%", description: "Cloudy" },
  Aswan: { temperature: "2°C", humidity: "15%", description: "Cold" },
};

function fetchWeather(city) {
  setTimeout(() => {
    const weather = mockWeatherData[city];
    state.weather.temperature = weather.temperature;
    state.weather.humidity = weather.humidity;
    state.weather.description = weather.description;
  });
}

function updateSelectedCity(city) {
  state.selectedCity = city;
}

createEffect(() => {
  fetchWeather(state.selectedCity);
});

createEffect(() => {
  render(
    "#container",
    `
    <div class="card">
      <h2>Weather in ${state.selectedCity}</h2>
      <select id="citySelect">
        <option value="Sohag">Sohag</option>
        <option value="Luxor">Luxor</option>
        <option value="Aswan">Aswan</option>
      </select>
      <div>
        <p>🌡 Temperature: ${state.weather.temperature}</p>
        <p>💧 Humidity: ${state.weather.humidity}</p>
        <p>🌤 Description: ${state.weather.description}</p>
      </div>
    </div>
  `
  );

  const select = document.querySelector("#citySelect");
  if (select) {
    select.value = state.selectedCity;
    select.onchange = (e) => updateSelectedCity(e.target.value);
  }
});

// Theme toggle
document.getElementById("toggleTheme").onclick = () => {
  const html = document.documentElement;
  const theme = html.getAttribute("data-theme");
  html.setAttribute("data-theme", theme === "dark" ? "light" : "dark");
};
