// https://www.w3schools.com/jsref/prop_doc_lastmodified.asp
let lastModif = document.lastModified; 

// http://tinyurl.com/4mdmc2ev
const date = new Date();
const currentYear = date.getFullYear();

document.getElementById("current-year").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last modified: ${lastModif}`;