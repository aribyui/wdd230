const url = "https://api.openweathermap.org/data/2.5/weather?lat=25.69&lon=-100.32&units=metric&appid=93ad6ff91162822dfb00dcdea498e2c2";
const country = document.querySelector("#country");
const weather = document.querySelector("#weather");

async function getWeather() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    console.log(data)
    displayResults(data);
  }
}

function displayResults(data) {

  const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  const words = data.weather[0].description.split(" ");

  let getWords = getCapitalLetters(words);
  // console.log(getWords); // output: ['Overcast', 'Clouds']

  // Se crean un elemento 'p' y un elemento 'img'
  let p = document.createElement("p");
  let img = document.createElement("img");

  // Al elemento 'img' se le agregan atributos y se les asigna un valor.
  img.setAttribute("src", icon);  
  img.setAttribute("alt", data.weather[0].main)

  // Al elemento country se le asigna el nombre de la ciudad, usando la propiedad textContent
  // Esta variable fue declarada y referenciada al principio del código.
  country.textContent = data.name; 
  // Se agrega texto al elemento 'p' usando innerHTML en lugar de textContent
  // ya que innerHTML  permite la inserción de contenido HTML.
  // En este caso es se uso la entidad '&deg' que representa el símbolo de grados (°)
  p.innerHTML = `${Math.round(data.main.temp)}&degC - `;   

  // Itera sobre cada palabra capitalizada en la descripción del clima.
  getWords.forEach(w => {
       
    // Se imprime para depurar.
    console.log(w);
    // output: 
    // 'Overcast'
    // 'Clouds'
    
    // Se crea un nodo de texto.
    // Lo que esta entre paréntesis y literal strings corresponde al iterador que almacena la palabra,
    // enseguida se hizo un espacio para que las palabras del arreglo 'getWords' no colisionen
    // Nota: lo dejare en modo de prueba para ver que sucede cuando el texto del pronóstico del tiempo sea mas de 2 o mas palabras
    let textNode = document.createTextNode(`${w} `);  
    
    // Se agrega el nodo de texto al párrafo, o elemento 'p'.
    p.appendChild(textNode);
  }); 

  weather.appendChild(img); 
  weather.appendChild(p);
  
}

function getCapitalLetters(words) {
  
  // console.log(words); // output: ['overcast', 'clouds']

  let letter = "";
  let subString = "";
  let counter = 0;  
  let descriptions = []

  words.forEach(word => {

    // console.log(word); 
    // output: 
    // 'overcast'
    // 'clouds'

    letter = word[0].toUpperCase();
    // console.log(letter)
    // output: 
    // 'O'
    // 'C'
    
    subString = words[(counter)].slice(1);
    counter++;   
    // console.log(subString);
    // output: 
    // 'vercast'
    // 'louds'

    // console.log(letter + subString)
    // output: 
    // 'Overcast'
    // 'Louds'

    descriptions.push(letter + subString)
  });

  return descriptions;

}

getWeather();