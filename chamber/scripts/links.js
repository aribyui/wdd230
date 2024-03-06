const baseURL = "https://aribyui.github.io/wdd230/";
const linksURL = "https://aribyui.github.io/wdd230/chamber/data/members.json";
const gridButton = document.querySelector("#grid");
const gridList = document.querySelector("#list");
const article = document.querySelector("article");

gridButton.addEventListener("click", () => {
  article.classList.add("grid");
  article.classList.remove("list");
});

gridList.addEventListener("click", () => {
  article.classList.add("list");
  article.classList.remove("grid");
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
        `<p>${member.name}</p>
      <p>${member.membershipLevel} member</p>
      <div>
      <img src="${member.logo[0].url}" title="${member.logo[0].title}">
      </div>
      <p>${member.address}, ${member.zipcode}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">${member.website}</a>`;

    article.appendChild(section);
  });
}

getMembers();