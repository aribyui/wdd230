const hamburgerBtn = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

/* hamburger button */
hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  navigation.classList.toggle('open');

  if (navigation.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

/* dark mode */
const modeButton = document.querySelector("#mode")
const header = document.querySelector("header");
const body = document.querySelector("body");
const h2List = document.querySelectorAll("h2"); /* node list  */
const h3List = document.querySelectorAll("h3"); /* node list  */
const ctaButtons = document.querySelectorAll(".cta-button"); /* node list */
const paragraphsList = document.querySelectorAll("p"); /* node list */
const linksList = document.querySelectorAll("a"); /* node list */
const footer = document.querySelector("footer");


modeButton.addEventListener("click", () => {  

  header.classList.toggle("dark-mode");
  navigation.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode-secondary");

  // h2 - primera parte
  for (let i = 0; i < h2List.length; i++) {
    if (i === 2) {
      break;
    }
    h2List[i].style.color = "var(--text2)";
  }

  // h2 - segunda parte
  for (let i = 3; i < h2List.length; i++) {
    if (i === 5) {
      break;
    }
    h2List[i].style.color = "var(--text2)";
  }

  // h3 {
  for (let i = 0; i < h3List.length; i++) {
    if (i === 3) {
      break;
    }
    h3List[i].style.color = "var(--text2)";
  }

  // paragraphs - primera parte
  for (let i = 0; i < paragraphsList.length; i++) {
    console.log(paragraphsList[i])
    if (i === 3) {
      break;
    }
    paragraphsList[i].style.color = "var(--text2)";
  }
  
  // paragraphs - segunda parte
  for (let i = 4; i < paragraphsList.length; i++) {
    if (i === 9) {
      break;
    }
    paragraphsList[i].style.color = "var(--text2)";
  }

  // links 
  for (let i = 4; i < linksList.length; i++) {
    linksList[i].style.color = "var(--text2)";
  }

  // buttons 
  for (let i = 0; i < ctaButtons.length; i++ ) {
    ctaButtons[i].style.backgroundColor = "var(--thirdDark)";
    ctaButtons[i].style.color = "var(--text2)";
  }

  events.style.backgroundColor = "var(--mainDark)";

  footer.classList.toggle("dark-mode");

  if (modeButton.textContent.includes("🌞")) {   
    modeButton.textContent = "🌑"
  } else {

    
    // h2 - primera parte
    for (let i = 0; i < h2List.length; i++) {
      if (i === 2) {
        break;
      }
      h2List[i].style.color = "var(--text1)";
    }

    // h2 - segunda parte      
    for (let i = 3; i < h2List.length; i++) {
      if (i === 5) {
        break;
      }
      h2List[i].style.color = "var(--text1)";
    }

    // h3 {
    for (let i = 0; i < h3List.length; i++) {
      if (i === 3) {
        break;
      }
      h3List[i].style.color = "var(--text1)";
    }

    // paragraphs - primera parte
    for (let i = 0; i < paragraphsList.length; i++) {
      if (i === 3) {
        break;
      }
      paragraphsList[i].style.color = "var(--text1)";
    }

    // paragraphs - segunda parte
    for (let i = 4; i < paragraphsList.length; i++) {
      if (i === 9) {
        break;
      }
      paragraphsList[i].style.color = "var(--text1)";
    }

    // buttons
    for (let i = 0; i < ctaButtons.length; i++ ) {
      ctaButtons[i].style.backgroundColor = "var(--accent2)";
      ctaButtons[i].style.color = "var(--text1)";
    }

    // links 
    for (let i = 4; i < linksList.length; i++) {
      linksList[i].style.color = "var(--text1)";
    }

    events.style.backgroundColor = "var(--headerFooterBackground)";
  
    modeButton.textContent = "🌞"
  }
});
