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

  country.textContent = data.name;
  // Se crea un nuevo elemento de imágen.
  let img = document.createElement("img");
  // Se asigna el atributo src y se referencia con la variable icon,
  // esta almacena el icono correspondiente del pronóstico del tiempo
  // obtenida de la API
  img.setAttribute("src", icon);  
  // Se asigna el atributo alt en caso de que la icono no aparezca
  // y se muestre el texto descriptivo del icono del pronóstico del tiempo
  img.setAttribute("alt", data.weather[0].main)

  weather.appendChild(img);

  // Itera sobre cada palabra capitalizada en la descripción del clima.
  getWords.forEach(w => {
       
    // Se imprime para depurar
    console.log(w);
    // output: 
    // 'Overcast'
    // 'Clouds'
    
    // Se crea un nuevo elemento de párrafo.
    let p = document.createElement("p");    

    // Se asigna la palabra capitalizada como contenido del elemento de párrafo.
    // Se ha utilizado innerHTML en lugar de textContent, ya que innerHTML 
    // permite la inserción de contenido HTML. En este caso, se utiliza para agregar
    // la entidad HTML &nbsp; (espacio no rompible), garantizando su validez
    // dentro de la estructura HTML.
    p.innerHTML = `${w}&nbsp;`;
    
    // Agregar el párrafo al elemento HTML con el id "weather"
    weather.appendChild(p); 
  }); 
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