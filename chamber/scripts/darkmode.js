const modeButton = document.querySelector("#mode");
const mainBackground = document.querySelectorAll(".main-background");
const body = document.querySelector("body");
const events = document.querySelector(".events");

modeButton.addEventListener("click", () => {   

  body.classList.toggle("dark-mode-secondary");
  navigation.classList.toggle("dark-mode-main");
  events.classList.toggle("dark-mode-secondary");
  
  mainBackground.forEach(element => {
    console.log(element)
    element.classList.toggle("dark-mode-main");    
  });  


  if (modeButton.textContent.includes("☀️")) {
    modeButton.textContent = "🌑";   
  } else {   
    modeButton.textContent = "☀️"
  }
});