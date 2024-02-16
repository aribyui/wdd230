const lastModified = document.lastModified;
const currentYear = new Date();

document.querySelector("#current-year").textContent = currentYear.getFullYear();
document.querySelector("#last-modified").textContent = lastModified;
