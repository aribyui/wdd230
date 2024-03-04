const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets);   
  displayProphets(data.prophets);
}

getProphetData()

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    const section = document.createElement("section");
    const fullName = document.createElement("h2");
    const birthdate = document.createElement("p");
    const birthplace = document.createElement("p");
    const portrait = document.createElement("img");
    const death = document.createElement("p");

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    // console.log(fullName)
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    death.textContent = `Death: ${prophet.death}`;

    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute("src", `${prophet.imageurl}`);
    portrait.setAttribute("alt", `Portrait of: ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Append the section(card) with the created elements
    section.appendChild(fullName);
    section.appendChild(birthdate);
    section.appendChild(birthplace);
    section.appendChild(death);
    section.appendChild(portrait);     

    cards.appendChild(section);
  });
}