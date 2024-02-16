const modeButton = document.querySelector("#mode");
const header = document.querySelector("header");
const body = document.querySelector("body");
const h2IntroductoryMessage = document.querySelector(".introductory-message");
const main = document.querySelector("main");
const heroLabel = document.querySelector(".hero-label");
const linksList = document.querySelectorAll("a");
const h2List = document.querySelectorAll("h2");
const h3List = document.querySelectorAll("h3");
const pList = document.querySelectorAll("p");
const buttonList = document.querySelectorAll("button");
const events = document.querySelector(".events");
const hr = document.querySelector("hr");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {  
  
  header.classList.toggle("dark-mode-backgroundPrimary");
  body.classList.toggle("dark-mode-backgroundSecondary");
  // navigation ya fue declarada en el archivo "hamburgerButton.js"
  navigation.classList.toggle("dark-mode-backgroundPrimary");  
  main.classList.toggle("dark-mode-backgroundSecondary");
  events.classList.toggle("dark-mode-backgroundPrimary");
  hr.classList.toggle("dark-mode-hr");
  footer.classList.toggle("dark-mode-backgroundPrimary");
  
  if (modeButton.textContent.includes("🌞")) {

    modeButton.textContent = "🌑"; 

    heroLabel.setAttribute("id", "dark-mode-hero-label");

    h2IntroductoryMessage.setAttribute("id", "dark-mode-text-1");

    // h2
    for (let i = 1; i < h2List.length; i++) {     
      if (i === 2) {        
        break;
      }
      h2List[i].setAttribute("id", "dark-mode-text-2");
    }
    // h2
    for (let i = 3; i < h2List.length; i++) {     
      if (i === 5) {        
        break;
      }
      h2List[i].setAttribute("id", "dark-mode-text-2");
    }

    // h3
    for (let i = 0; i < h3List.length; i++) {
      if (i === 3) {
        break;
      } 
      h3List[i].setAttribute("id", "dark-mode-text-2");
    }

    // p
    for (let i = 0; i < pList.length; i++) {
      if (i === 3) {
        break;
      }
      // console.log(pList[i])
      pList[i].setAttribute("id", "dark-mode-text-2");
    }

    for (let i = 4; i < pList.length; i++) {
      if (i === 9) {
        break;
      }
      // console.log(pList[i])
      pList[i].setAttribute("id", "dark-mode-text-2");
    }

    // hero button    
    for (let i = 1; i < buttonList.length; i++) {
      if (i === 2) {
        break;
      }
      buttonList[i].setAttribute("id", "dark-mode-hero-button");
    }
    
    // event button
    for (let i = 2; i < buttonList.length; i++) {
      buttonList[i].setAttribute("id", "dark-mode-event-button");
    }

    // links "a"
    for (let i = 5; i < linksList.length; i++) {
      // console.log(linksList[i]);
      if (i === 8) {
        break;
      }
      linksList[i].setAttribute("id", "dark-mode-text-2");
    }

  } else {

    modeButton.textContent = "🌞";   

    heroLabel.removeAttribute("id");

    h2IntroductoryMessage.removeAttribute("id");
    
    // h2
    for (let i = 1; i < h2List.length; i++) {
      if (i === 2) {        
        break;
      }      
      h2List[i].removeAttribute("id");
    }
    
    // h2
    for (let i = 3; i < h2List.length; i++) {     
      if (i === 5) {        
        break;
      }
      h2List[i].removeAttribute("id");
    }

    // h3
    for (let i = 0; i < h3List.length; i++) {
      if (i === 3) {
        break;
      } 
      h3List[i].removeAttribute("id");
    }

    // p
    for (let i = 0; i < pList.length; i++) {
      if (i === 3) {
        break;
      }
      // console.log(pList[i])
      pList[i].removeAttribute("id");
    }

    for (let i = 4; i < pList.length; i++) {
      if (i === 9) {
        break;
      }
      // console.log(pList[i])
      pList[i].removeAttribute("id");
    }

    // hero button    
    for (let i = 1; i < buttonList.length; i++) {
      if (i === 2) {
        break;
      }
      buttonList[i].removeAttribute("id");
    }

    // event button
    for (let i = 2; i < buttonList.length; i++) {
      buttonList[i].removeAttribute("id");
    }

    for (let i = 5; i < linksList.length; i++) {
      // console.log(linksList[i]);
      if (i === 8) {
        break;
      }
      linksList[i].removeAttribute("id");
    }

  }

});

