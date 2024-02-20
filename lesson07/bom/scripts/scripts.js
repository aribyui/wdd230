
// Selecciona los elementos del DOM que se usarán frecuentemente
const input = document.querySelector("#favchap"); // Input donde el usuario ingresa el capítulo favorito
const addChapterBtn = document.querySelector("button"); // Botón para agregar un nuevo capítulo
const unorderedList = document.querySelector("#list"); // Lista no ordenada donde se mostrarán los capítulos

// Obtiene la lista de capítulos almacenada en el localStorage o crea un array vacío si no hay ninguno
let chaptersArray = getChapterList() || []; 

// Recorre el array de capítulos y muestra cada uno en la lista
// Cada vez que se abra la página se mostrarán los elementos almacenados en el local storage
// Y se mostraran en la lista no ordenada
chaptersArray.forEach(chapter => {
  displayList(chapter);

   // Mensaje de depuración
  console.log(JSON.parse(localStorage.getItem("myFavBOMList")));
});

// Agrega un evento de clic al botón de agregar capítulo
addChapterBtn.addEventListener("click", () => {      
  if (input.value != "") { // Verifica si el campo de entrada no está vacío
    displayList(input.value); // Muestra el capítulo ingresado en la lista
    chaptersArray.push(input.value); // Agrega el capítulo al array de capítulos
    setChapterList(); // Guarda la lista actualizada en el localStorage      
    input.value = ""; // Limpia el campo de entrada
    input.focus(); // Regresa el foco al campo de entrada   
  } else {
    alert("no hay nada")
  }
});

// Función para mostrar un capítulo en la lista
function displayList(item) {
  const li = document.createElement("li"); // Crea un nuevo elemento de lista
  const deleteBtn = document.createElement("button"); // Crea un botón para eliminar el capítulo
  
  li.textContent = item; // Asigna el texto del capítulo al elemento de lista
  deleteBtn.textContent = "❌"; // Asigna el texto del botón de eliminar

  /* 
  Element: append() method - http://tinyurl.com/2fnkswxd
  Element.append() can append several nodes and strings, 
  whereas Node.appendChild() can only append one node. 
  */

  li.appendChild(deleteBtn); // Agrega el botón de eliminar al elemento de lista
  unorderedList.appendChild(li); // Agrega el elemento de lista a la lista no ordenada       

  // Agrega un evento de clic al botón de eliminar para eliminar el capítulo de la lista
  deleteBtn.addEventListener("click", () => {
    unorderedList.removeChild(li); // Elimina el elemento de lista de la lista no ordenada
    deleteChapter(li.textContent); // Elimina el capítulo del array de capítulos
    input.focus(); // Regresa el foco al campo de entrada
  }); 
};

// Función para guardar la lista de capítulos en el localStorage
function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray)); // Guarda el array de capítulos en el localStorage

  // Mensaje de depuración
  console.log("Updated chapter list in local storage:", chaptersArray);
};

// Función para obtener la lista de capítulos del localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList")); // Obtiene y parsea el array de capítulos almacenado en el localStorage
};

// Función para eliminar un capítulo del array de capítulos
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // Elimina el último carácter del capítulo (en este caso, el emoji ❌)

  // Mensaje de depuración
  console.log("Deleting chapter from array:", chapter);

  // Filtra el array de capítulos para eliminar el capítulo especificado
  // Utiliza el método filter() en el array chaptersArray
  // Este método crea un nuevo array que incluye solo los elementos del array original que cumplan cierta condición
  // La condición que se evalúa es item !== chapter
  // Esto significa que se incluirán en el nuevo array solo los elementos que no sean iguales al capítulo que se quiere eliminar
  // Por lo tanto, el resultado es un nuevo array que contiene todos los elementos del array original excepto el capítulo que se quiere eliminar
  // Finalmente, este nuevo array se asigna de nuevo a la variable chaptersArray, lo que actualiza el contenido del array con el capítulo eliminado
  chaptersArray = chaptersArray.filter((item) => item !== chapter); 

  // Mensaje de depuración
  console.log("Updated chapter array:", chaptersArray); 

  setChapterList(); // Guarda el array de capítulos actualizado en el localStorage
};



