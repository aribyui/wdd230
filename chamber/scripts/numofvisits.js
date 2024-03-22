const visits = document.querySelector(".visits");
const currentDate = new Date();
let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;
const lastVisitDate = localStorage.getItem("lastVisitDate-ls"); // Obtener la fecha de la última visita del localStorage

// Verificar si es la primera visita del usuario
if (!lastVisitDate) {
  visits.textContent = "Welcome! Let us know if you have any questions.";
  numVisits++; // Incrementar el número de visitas solo si es la primera visita
} else {
  // Calcular la diferencia en días entre la última visita y la visita actual
  const daysDifference = Math.floor((currentDate - new Date(lastVisitDate)) / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    visits.textContent = "Back so soon! Awesome!"; // Mensaje si la diferencia es 0 días
  } else {
    const message = daysDifference === 1 ? "day" : "days"; // Corregir el mensaje para singular o plural
    visits.textContent = `You last visited ${daysDifference} ${message} ago.`; // Mostrar el mensaje con la diferencia de días
  }
}

// Actualizar el número de visitas y la fecha de la última visita en el localStorage
localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("lastVisitDate-ls", currentDate.toISOString());
