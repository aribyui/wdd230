// all pages
const lastModified = document.lastModified;
const currentYear = new Date();
const dateTime = Date.now();

document.querySelector("#current-year").textContent = currentYear.getFullYear();
document.querySelector("#last-modified").textContent = lastModified;

// join page
document.querySelector("#date-time").setAttribute("value", dateTime);