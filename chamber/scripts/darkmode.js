const modeButton = document.querySelector("#mode");

modeButton.addEventListener("click", () => {  
  
  if (modeButton.textContent.includes("☀️")) {
    modeButton.textContent = "🌑";   
  } else {   
    modeButton.textContent = "☀️"
  }
});