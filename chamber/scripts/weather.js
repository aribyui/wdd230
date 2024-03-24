// URL clima actual
const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=25.68&lon=-100.33&appid=93ad6ff91162822dfb00dcdea498e2c2&units=metric`;
// URL pronóstico del tiempo
const forecastWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=25.68&lon=-100.33&appid=93ad6ff91162822dfb00dcdea498e2c2&units=metric`;

// Se referencian los elementos de la sección 'weather' con su respectivo 'id'.
const weatherIcon = document.querySelector("#weather-icon");
const temperature = document.querySelector("#temperature");
const weatherDescription = document.querySelector("#weather-description");
const windSpeed = document.querySelector("#windspeed");
const humidity = document.querySelector("#humidity");
const forecast1 = document.querySelector("#forecast1");

async function getCurrentWeather() {
  try {
    const response = await fetch(currentWeatherURL);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      displayCurrentWeatherResults(data);
    } else {
      throw Error(await response.text());
    }  
  } catch (error) {
    console.log(error);
  }
}

function displayCurrentWeatherResults(data) {
  
  const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  const icon = document.createElement("img");
  let temp = `${Math.round(data.main.temp)}&degC`;
  let description = data.weather[0].description.split(" "); 
  const t = Math.round(data.main.temp);
  const v = data.wind.speed;
  const windChill = 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + ((0.3965 * t) * Math.pow(v, 0.16));
  
  icon.setAttribute("src", iconURL);
  icon.setAttribute("alt", data.weather[0].description); // dar estilo de color azul al atributo alt en CSS <---
  
  let getFirstLetter = "";
  let subString = "";
  let words = []; 

  description.forEach(word => {
    getFirstLetter = word[0].toUpperCase();
    subString = word.slice(1);   
    words.push(getFirstLetter + subString);
  });

  weatherIcon.appendChild(icon); 
  temperature.innerHTML = temp; 

  words.forEach(word => {
    const textNode = document.createTextNode(word + " ");
    weatherDescription.appendChild(textNode); 
  });

  if (t <= 10 && v > 4.8) {
    windSpeed.textContent = `${Math.round(windChill)}mph`;
  } else {
    windSpeed.textContent = "N/A";
  }

  humidity.textContent = `${data.main.humidity}%`;
}

getCurrentWeather();

// async function getWeatherForecast() {
  
//   const response = await fetch(forecastWeatherURL);
//   if (response.ok) {
//     const data = await response.json();
//     // console.log(data.list)
//     displayWeatherForcast(data.list);
//   }
// }

// function displayWeatherForcast(data) {

 
// }

// getWeatherForecast();