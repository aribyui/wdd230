const baseURL = "https://aribyui.github.io/wdd230/";
const linksURL = "https://aribyui.github.io/wdd230/chamber/data/members.json";
const gridButton = document.querySelector("#grid");
let gridList = document.querySelector("#list");
let article = document.querySelector("article");

gridButton.classList.add("borderButton");
gridList.classList.add("borderButtonNoMargin");

gridButton.addEventListener("click", () => {
  article.classList.add("grid");
  article.classList.remove("list");

  if (gridList.classList.contains("borderButton")) {
    gridList.classList.remove("borderButton");
    gridList.classList.add("borderButtonNoMargin");
    gridButton.classList.remove("borderButtonNoMargin")
    gridButton.classList.add("borderButton");    
  }

});

gridList.addEventListener("click", () => {
  article.classList.add("list");
  article.classList.remove("grid");

  if (gridButton.classList.contains("borderButton")) {
    gridButton.classList.remove("borderButton");
    gridButton.classList.add("borderButtonNoMargin");
    gridList.classList.remove("borderButtonNoMargin");
    gridList.classList.add("borderButton"); 
  }

});

async function getMembers() {
  const response = await fetch(linksURL);
  if (response.ok) {
    const data = await response.json();
    console.table(data.members); // se imprime en consola para depurar
    displayMembers(data.members);
  }
}

const displayMembers = (members) => {
  members.forEach((member) => {

    // console.log(member.logo[0].title) // se imprime en consola para depurar

    const section = document.createElement("section");
    section.innerHTML =
      `<h2>${member.name}</h2>
      <p>${member.name}</p>
      <img src="${member.logo[0].url}" alt="${member.logo[0].alt}" width="150" height="150" loading="lazy"></img>
      <p>${member.membershipLevel}</p>
      <p>${member.address}, ${member.zipcode}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Site</a>`;

    article.appendChild(section);
  });
}

getMembers();