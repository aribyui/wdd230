const baseURL = "https://aribyui.github.io/wdd230/";
const linksURL = "https://aribyui.github.io/wdd230/chamber/data/members.json";
const gridButton = document.querySelector("#grid");
const gridListButton = document.querySelector("#list");
const article = document.querySelector("article");
let data = null;

gridButton.addEventListener("click", () => {
  article.classList.add("grid");
  article.classList.remove("list");
});

gridListButton.addEventListener("click", () => {
  article.classList.add("list");
  article.classList.remove("grid");
});

async function getMembers() {
  const response = await fetch(linksURL);
  if (response.ok) {
    data = await response.json();
    // console.table(data.members); // se imprime en consola para depurar
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
      <p>${member.membershipLevel}</p>
      <img src="${member.logo[0].url}" alt="${member.logo[0].alt}" width="150" height="150" loading="lazy"></img>
      
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href=" ${member.website}" target="_blank">Website</a>`;

    article.appendChild(section);
  });
}

getMembers();
