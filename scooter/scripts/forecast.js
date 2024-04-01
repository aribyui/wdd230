const key = "93ad6ff91162822dfb00dcdea498e2c2";
const lat = (Math.round(20.4239112071267 * 100) / 100).toString();
const lon = (Math.round(-86.91923927089651 * 100) / 100).toString();
const currentForecastURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
const nextDayForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
const tempMax = document.querySelector("#temp-max");
const todayWeatherIcon = document.querySelector("#today-weather-icon");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const nextDayTemperature = document.querySelector("#next-day-temperature");
const nextDayWeatherIcon = document.querySelector("#next-day-weather-icon");
const nextDayWeatherDesciption = document.querySelector("#next-day-description");
const nextDayHumidity = document.querySelector("#next-day-humidity");

async function getCurrentForecast() {
  try {
    const response = await fetch(currentForecastURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);  
      displayCurrentForecast(data);
    } else {
      throw Error (await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayCurrentForecast(data) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  const img = document.createElement("img");
  const arrayDescription = data.weather[0].description.split(" "); 
 
  tempMax.innerHTML = `${(data.main.temp_max).toFixed()}&deg;C`;

  img.setAttribute("src", iconUrl)
  img.setAttribute("alt", getCapitalLetters(arrayDescription));
  img.setAttribute("width", "200");
  img.setAttribute("height", "200");
  img.setAttribute("loading", "lazy");   
  
  todayWeatherIcon.appendChild(img);
  temperature.innerHTML = `${(data.main.temp).toFixed()}&deg;C`;
  description.textContent = getCapitalLetters(arrayDescription);
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
}

async function getNextDayForecast() {
  try {
    const response = await fetch(nextDayForecastURL);
    if (response.ok) {
      const data = await response.json();
      // console.log(data.list);
      displayNextDayForecast(data.list);
    } else {
      throw Error (await response.json());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayNextDayForecast(data) {

  const img = document.createElement("img");

  // Obtener la fecha del primer elemento de los datos del pronóstico del tiempo
  const nextDay = new Date(data[0].dt_txt);
  // Agregar 1 día para obtener la fecha del día siguiente
  nextDay.setDate(nextDay.getDate() + 1);
  // Iterar sobre los datos del pronóstico del tiempo
  for (let i = 0; i < data.length; i++) {
    // Obtener la fecha y hora del pronóstico del tiempo actual
    const date = new Date(data[i].dt_txt);
    // Obtener el día del mes
    const day = date.getDate();
    // Obtener la hora del día
    const hours = date.getHours();
    // Obtener la temperatura del pronóstico del tiempo actual
    const temperature = Math.round(data[i].main.temp);
    // Obtener descripción del pronóstico del tiempo y convertirla en un array de palabras
    const arrayDescription = data[i].weather[0].description.split(" ");
    // Obtener la humedad del pronóstico del tiempo actual
    const hum = data[i].main.humidity;
    // Obtener los iconos que representan las condiciones meteorológicas del pronóstico del tiempo
    const iconUrl = `https://openweathermap.org/img/wn/${data[i].weather[0].icon}@4x.png`;

    // Verificar si el día del pronóstico del tiempo es igual al día siguiente calculado
    // y si la hora del pronóstico del tiempo es 12:00 PM
    if (day === nextDay.getDate() && hours === 15) {
      // Establecer el atributo 'src' de la etiqueta de imagen con la URL del icono del clima
      img.setAttribute("src", iconUrl);
      img.setAttribute("alt", getCapitalLetters(arrayDescription));
      img.setAttribute("loading", "lazy");
      // Adjuntar la imagen del icono del clima al contenedor 'nextDayWeatherIcon' en el DOM
      nextDayWeatherIcon.appendChild(img)
      // Mostrar el día y la temperatura del pronóstico del tiempo en la consola
      // console.log("Day: " + day + " Temperature: " + temperature + " Hour: " + hours);
      nextDayTemperature.innerHTML = `${temperature}&degC`;
      // Mostramos la descripción del pronóstico del tiempo en formato de palabras capitalizadas
      // utilizando la función 'getCapitalLetters', a la cual le pasamos el parámetro 'description'.
      nextDayWeatherDesciption.textContent = getCapitalLetters(arrayDescription);
      nextDayHumidity.textContent = `Humidity: ${hum}%`
    }
  }
}

function getCapitalLetters (array) {
  const capitalLetters = [];

  array.forEach(word => {
    const firstLetter = word[0].toUpperCase();
    const subString = word.slice(1);
    const newWord = firstLetter + subString;
    capitalLetters.push(newWord)
  });

  // Devuelve una cadena creada a partir de las palabras capitalizadas en el array 'capitalLetters'
  // La salida puede variar según el pronóstico del tiempo y puede contener más de dos palabras.
  // Se convierte el array 'capitalLetters' en una cadena utilizando el método 'toString()',
  // que convierte cada elemento del array en una cadena y los une con comas.
  // Después, se utiliza el método 'replaceAll()' para reemplazar todas las comas (',') por espacios en blanco.
  // Para obtener más información sobre el método 'replaceAll()', consultar la documentación de JavaScript: https://tinycurrentForecastURL.com/3z52hz6k
  //  description.textContent = capitalLetters.toString().replaceAll(",", " ");
  return capitalLetters.toString().replaceAll(",", " ")
}

getCurrentForecast();

getNextDayForecast();



