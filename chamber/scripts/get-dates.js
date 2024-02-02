const lastModified = document.lastModified;
const currentDate = new Date();

document.getElementById("current-year").textContent = currentDate.getFullYear(); 
document.getElementById("last-modified").textContent = ` ${lastModified}`;