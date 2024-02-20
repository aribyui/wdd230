// 1️⃣ Inicializar la variable del elemento de visualización
const visits = document.querySelector(".visits");

// 2️⃣ Obtener el VALOR almacenado para la CLAVE numVisits-ls en el localStorage si existe. Si la CLAVE numVisits está ausente, entonces asignar 0 a la variable numVisits.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determinar si esta es la primera visita o mostrar el número de visitas. Escribimos este ejemplo al revés para que pienses profundamente sobre la lógica.
if (numVisits !== 0) {
  visits.textContent = numVisits;
} else {
  visits.textContent = "This is your first visit. Welcome! 👋"
}

// 4️⃣ Incrementar el número de visitas en uno.
numVisits++;

// 5️⃣ Almacena el nuevo total de visitas en localStorage, con la clave numVisits-ls.
localStorage.setItem("numVisits-ls", numVisits);