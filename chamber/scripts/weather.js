// URL clima actual
const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=25.68&lon=-100.33&appid=93ad6ff91162822dfb00dcdea498e2c2&units=metric`
// URL pronóstico del tiempo
const weatherForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=25.68&lon=-100.33&appid=93ad6ff91162822dfb00dcdea498e2c2&units=metric`;

// Se referencian los elementos de la sección 'weather' con su respectivo 'id'.
const weatherIcon = document.querySelector("#weather-icon");
const temperature = document.querySelector("#temperature");
const weatherDescription = document.querySelector("#weather-description");
const windSpeed = document.querySelector("#windspeed");
const humidity = document.querySelector("#humidity");

async function getCurrentWeather() {
  const response = await fetch(currentWeatherURL);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    displayResults(data);
  }
}

function displayResults(data) {
  
  const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

  const img = document.createElement("img");
  img.setAttribute("src", icon);
  img.setAttribute("alt", data.weather[0].description); // dar estilo de color azul al atributo alt en CSS <---

  const t = Math.round(data.main.temp);
  const v = data.wind.speed;
  const windChill = 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + ((0.3965 * t) * Math.pow(v, 0.16));

  weatherIcon.appendChild(img);  
  temperature.innerHTML = `${Math.round(data.main.temp)}&degC`;
  getFirstWordWithCapitalLetters(data.weather[0].description, weatherDescription);  

  if (t <= 10 && v > 4.8) {
    windSpeed.textContent = windChill;
  } else {
    windSpeed.textContent = "N/A";
  }

  humidity.textContent = `${data.main.humidity}%`;

}

function getFirstWordWithCapitalLetters(data, weatherDescription) {
  
  // console.log(data);
  // output: 'few clouds' <- la descripción varía según el pronóstico del tiempo

  // Declaración de variables

  // 'split' se convierte en un arreglo
  let split = data.split(" ");
  // console.log(split); // output: ['few', 'clouds']    
  let getFirstLetter = "";
  let subString = "";
  let words = []

  // Se itera sobre cada palabra del arreglo 'split'
  split.forEach(word => {
    // console.log(word)
    // output: ['few', 'clouds']

    getFirstLetter = word[0].toUpperCase();
    // console.log(getFirstLetter);
    // output: 
    // F
    // C

    subString = word.slice(1);
    // console.log(subString);
    // output: 
    // ew
    // clouds       

    words.push(getFirstLetter + subString);
    // console.log(words);
    // output: ['Few', 'Clouds']
    
  });

  
  // Agregue estos elementos al arreglo words para depurar y observar su comportamiento.
  // Comentar despues de la depuración.
  // words.push("Arroz");
  // words.push("Frijol");
  // words.push("Calabaza");

  // console.log(words);
  // output: ['Few', 'Clouds', 'Arroz', 'Frijol', 'Calabaza'];

  words.forEach(word => {
    // console.log(word);
    // output: 
    // Few
    // Clouds   

    // Si la longitud del arreglo 'words' es mayor a 1
    // o en otras palabras, si el arreglo 'words' contiene mas de 1 palabra
    if (words.length > 1 ) {   
      // Entonces, creamos un nodo de tipo texto que almacene cada palabra 
      // del arreglo 'words' y agregamos 'un espacio en blanco'
      // para evitar la colisión de las palabras, es decir,
      // que una palabra este a lado de la otra sin espacios en blanco.
      const textNode = document.createTextNode(word + " "); 
      // console.log(textNode);
      // output: 
      // "Few "
      // "Clouds " 

      weatherDescription.appendChild(textNode);      
    }
   
  });

}


getCurrentWeather();
getFirstWordWithCapitalLetters();

// async function getThreeDaysWeatherForecast() {
//   const response = await fetch(weatherForecastURL)
//   if (response.ok) {
//     const data = await response.json();
//     console.log(data.list[2].dt_txt); // 1st day
//     console.log(data.list[10].dt_txt); // 2nd day
//     console.log(data.list[18].dt_txt); // 3rd day
//   }
// }

// getThreeDaysWeatherForecast();
