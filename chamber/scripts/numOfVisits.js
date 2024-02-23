const visits = document.querySelector(".visits");
let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
  visits.textContent = numVisits;  
} else {
  visits.textContent = "Welcome! this is your first visit."
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits)