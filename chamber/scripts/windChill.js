const temperature = document.querySelector("#temperature");
const windSpeed = document.querySelector("#windspeed");
const t = 16; // temperature
const v = 4; // wind speed
const temperatureAparente = 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + ((0.3965 * t) * Math.pow(v, 0.16));

temperature.textContent = `${t} °C`;

if (t <= 10 && v > 4.8) {
  windSpeed.textContent = `${Math.round(temperatureAparente)} °C`;
} else {
  windSpeed.textContent = "N/A";
}