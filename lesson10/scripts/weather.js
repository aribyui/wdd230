// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const lat = 49.75;
const lon = 6.64;
const apiID = "93ad6ff91162822dfb00dcdea498e2c2";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiID}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.table(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {

  currentTemp.innerHTML = `${Math.round(data.main.temp)}&degF`;

  //const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`

  let desc = data.weather[0].description;
  // console.log(desc); // output: overcast clouds

  let main = data.weather[0].main;
  
  // 'wordList' funge como un 'arreglo' que almacena palabras
  // y pueden variar desde 1-6 palabras, de acuerdo a
  // la descripción del pronostico del tiempo obtenida por la API
  // en este caso, las palabras que se obtuvieron son: 'moderate' y 'rain'    
  let wordsList = desc.split(" ");
  // console.log(wordsList); // output: ['moderate', 'rain']
  // console.log(wordsList.length); // output: 2

  let getFirstWord = "";
  let getSecondWord = "";
  let getThirdWord = "";
  let getFourthWord = "";
  let getFifthWord = "";
  let getSixthWord = "";

  let substring1 = "";
  let substring2 = "";
  let substring3 = "";
  let substring4 = "";
  let substring5 = "";
  let substring6 = "";

  let capitalizedFirstLetterWord = "";
  let capitalizeSecondLetterWord = "";
  let capitalizeThirdLetterWord = "";
  let capitalizeFourthLetterWord = "";
  let capitalizeFifthLetterWord = "";
  let capitalizeSixthLetterWord = "";

  // en lo siguientes bloques if
  // la palabras pueden variar según el pronóstico del tiempo
  // las palabras que describen el clima en este momento son:
  // 'moderate rain' (sin las comillas)

  // si el arreglo 'wordList' contiene '2 palabras', entonces:
  if (wordsList.length === 2) {
    // divide la primer palabra letra por letra y se almacena en una variable
    // getFirstWord funge como un nuevo arreglo que contiene 
    // cada una de las letras de la palabra correspondiente
    // en este caso la palabra es: 'moderate', y el arreglo es así:
    // getFirstWord = ['m', 'o', 'd', 'e', 'r', 'a', 't', 'e']
    getFirstWord = wordsList[0].split(""); 
    // getFirstWord[0] almacena el arreglo, 
    // donde [0], corresponde al índice de dicho arreglo, en este caso sería la letra 'm'
    // el método 'toUpperCase' convierte dicha letra en mayúscula 'M'
    capitalizedFirstLetterWord = getFirstWord[0].toUpperCase(); 
    // usamos 'wordList[0]' dando por entendido que queremos la primer palabra de dicho arreglo 'wordList = []'
    // usamos el método slice para cortar el contenido de la palabra apartir del índice 1
    // que correponde a la segunda letra de la palabra 'moderate'
    // en este caso obtendremos: 'oderate'
    substring1 = wordsList[0].slice(1);       
 
    // hacemos el mismo procedimiento que el anterior para convertir en mayúscula
    // la primer letra de la segunda palabra
    // en este caso la palabra es: 'rain', y el arreglo es así:
    // getFirstWord = ['r', 'a', 'i', 'n']
    getSecondWord = wordsList[1].split("");
    // getSecondWord[0] almacena el arreglo,
    // donde [0], corresponde al índice de dicho arreglo, en este caso sería la letra 'r'
    // el método 'toUpperCase' convierte dicha letra en mayúscula 'R'
    capitalizeSecondLetterWord = getSecondWord[0].toUpperCase(); 
    // usamos 'wordList[1]' dando por entendido que queremos la segunda palabra de dicho arreglo 'wordList = []'
    // usamos el método slice para cortar el contenido de la palabra apartir del índice 1
    // que correponde a la segunda letra de la palabra 'rain'
    // en este caso obtendremos: 'ain'
    substring2 = wordsList[1].slice(1);
    
    // imprimimos en consola para depurar
    console.log(capitalizedFirstLetterWord + substring1 + " " + capitalizeSecondLetterWord + substring2); // output: Moderate Rain

    // usamos las variables:
    // capitalizedFirstLetterWord
    // substring1
    // capitalizeSecondLetterWord
    // substring2
    // y usamos literal strings, concatenamos y mostramos las palabras formadas en el elemento HTML, y listo
    captionDesc.textContent = `${main} | ${capitalizedFirstLetterWord}${substring1} ${capitalizeSecondLetterWord}${substring2}`; // output: Moderate Rain

    // en los posteriores bloques if se implemento la misma lógica

     // si el arreglo 'wordList' contiene '3 palabras'
  }  else if (wordsList.length === 3) {

    getFirstWord = wordsList[0].split(""); 
    capitalizedFirstLetterWord = getFirstWord[0].toUpperCase(); 
    substring1 = wordsList[0].slice(1);    
 
    getSecondWord = wordsList[1].split("");
    capitalizeSecondLetterWord = getSecondWord[0].toUpperCase(); 
    substring2 = wordsList[1].slice(1);

    getThirdWord = wordsList[2].split("");
    capitalizeThirdLetterWord = getThirdWord[0].toUpperCase(); 
    substring3 = wordsList[2].slice(1);    
    
    captionDesc.textContent = `${main} | ${capitalizedFirstLetterWord}${substring1} ${capitalizeSecondLetterWord}${substring2} ${capitalizeThirdLetterWord}${substring3}`; 
    
    // si el arreglo 'wordList' contiene '4 palabras'
  } else if (wordsList.length === 4) {

    getFirstWord = wordsList[0].split(""); 
    capitalizedFirstLetterWord = getFirstWord[0].toUpperCase(); 
    substring1 = wordsList[0].slice(1);    
 
    getSecondWord = wordsList[1].split("");
    capitalizeSecondLetterWord = getSecondWord[0].toUpperCase(); 
    substring2 = wordsList[1].slice(1);

    getThirdWord = wordsList[2].split("");
    capitalizeThirdLetterWord = getThirdWord[0].toUpperCase(); 
    substring3 = wordsList[2].slice(1);   
    
    getFourthWord = wordsList[3].split("");
    capitalizeFourthLetterWord = getFourthWord[0].toUpperCase(); 
    substring4 = wordsList[3].slice(1); 
    
    captionDesc.textContent = `${main} | ${capitalizedFirstLetterWord}${substring1} ${capitalizeSecondLetterWord}${substring2} ${capitalizeThirdLetterWord}${substring3} ${capitalizeFourthLetterWord}${substring4}`; 

    // si el arreglo 'wordList' contiene '5 palabras'
  } else if (wordsList.length === 5) {

    getFirstWord = wordsList[0].split(""); 
    capitalizedFirstLetterWord = getFirstWord[0].toUpperCase(); 
    substring1 = wordsList[0].slice(1);    
 
    getSecondWord = wordsList[1].split("");
    capitalizeSecondLetterWord = getSecondWord[0].toUpperCase(); 
    substring2 = wordsList[1].slice(1);

    getThirdWord = wordsList[2].split("");
    capitalizeThirdLetterWord = getThirdWord[0].toUpperCase(); 
    substring3 = wordsList[2].slice(1);   
    
    getFourthWord = wordsList[3].split("");
    capitalizeFourthLetterWord = getFourthWord[0].toUpperCase(); 
    substring4 = wordsList[3].slice(1); 

    getFifthWord = wordsList[4].split("");
    capitalizeFifthLetterWord = getFifthWord[0].toUpperCase(); 
    substring5 = wordsList[4].slice(1); 
    
    captionDesc.textContent = `${main} | ${capitalizedFirstLetterWord}${substring1} ${capitalizeSecondLetterWord}${substring2} ${capitalizeThirdLetterWord}${substring3} ${capitalizeFourthLetterWord}${substring4} ${capitalizeFifthLetterWord}${substring5}`; 

    // si no se cumple ninguna de las condiciones anterioes, 
    // entonces el arreglo 'wordList' contiene '6 palabras'
  } else {

    getFirstWord = wordsList[0].split(""); 
    capitalizedFirstLetterWord = getFirstWord[0].toUpperCase(); 
    substring1 = wordsList[0].slice(1);    
 
    getSecondWord = wordsList[1].split("");
    capitalizeSecondLetterWord = getSecondWord[0].toUpperCase(); 
    substring2 = wordsList[1].slice(1);

    getThirdWord = wordsList[2].split("");
    capitalizeThirdLetterWord = getThirdWord[0].toUpperCase(); 
    substring3 = wordsList[2].slice(1);   
    
    getFourthWord = wordsList[3].split("");
    capitalizeFourthLetterWord = getFourthWord[0].toUpperCase(); 
    substring4 = wordsList[3].slice(1); 

    getFifthWord = wordsList[4].split("");
    capitalizeFifthLetterWord = getFifthWord[0].toUpperCase(); 
    substring5 = wordsList[4].slice(1); 

    getSixthWord = wordsList[5].split("");
    capitalizeSixthLetterWord = getSixthWord[0].toUpperCase(); 
    substring6 = wordsList[5].slice(1); 
    
    captionDesc.textContent = `${main} | ${capitalizedFirstLetterWord}${substring1} ${capitalizeSecondLetterWord}${substring2} ${capitalizeThirdLetterWord}${substring3} ${capitalizeFourthLetterWord}${substring4} ${capitalizeFifthLetterWord}${substring5} ${capitalizeSixthLetterWord}${substring6}`; 

  }

  weatherIcon.setAttribute("src", icon);
  weatherIcon.setAttribute("alt", desc);

}

apiFetch();

