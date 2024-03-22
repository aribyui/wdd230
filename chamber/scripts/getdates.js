// all pages
const lastModified = document.lastModified;
const currentYear = new Date();

document.querySelector("#current-year").textContent = currentYear.getFullYear();
document.querySelector("#last-modified").textContent = lastModified;

// join page
const dateTime = Date.now();
const dateTimeForm = document.querySelector("#date-time");

// Obtener la URL actual del navegador
const currentUrl = location.href;

// Verificar si el elemento del formulario existe y si la URL actual incluye "join.html"
if (dateTimeForm && currentUrl.includes("join.html")) {
  // Si se cumple la condición, establecer el atributo "value" del formulario con la fecha y hora actual
  dateTimeForm.setAttribute("value", dateTime);
}




