const baseURL = "https://aribyui.github.io/wdd230/";
const linksURL = "https://aribyui.github.io/wdd230/chamber/data/members.json";
const indexPage = location.href;
const affiliatedMembers = document.querySelector(".affiliated-members");
const directoryPage = location.href;
const gridButton = document.querySelector("#grid");
const gridListButton = document.querySelector("#list");
const article = document.querySelector("article");
let data = null;

// Este bloque if es detectado automáticamente cuando la página "index.html" se encuentra activa
if (indexPage.includes("chamber/")) {

  async function getMembers() {
    const response = await fetch(linksURL);
    if (response.ok) {
      data = await response.json();
      // console.log(data.members); // se imprime en consola para depurar
      displayMembers(data.members);
    }
  }

  function displayMembers(members) {

    // display all members
    // console.log(members);

    // display silver and gold members
    const silverAndGoldMembers = members.filter((member) => member.membershipLevel === "Gold" || member.membershipLevel === "Silver");
    // console.log(silverAndGoldMembers)

    // display memberArrayLength length
    const memberArrayLength = silverAndGoldMembers.length; 
    // console.log(memberArrayLength) // output: 11

    const h2 = document.createElement("h2");
    h2.textContent = "Affiliated Members";

    affiliatedMembers.appendChild(h2)

    for (let i = 0; i < 3; i++) {
      let randomInt = Math.floor(Math.random() * memberArrayLength);
      // console.log(randomInt);   

      const section = document.createElement("section");

      const h3 = document.createElement("h3");
      const img = document.createElement("img");
      const address = document.createElement("p");
      const phone = document.createElement("p");    
      const website = document.createElement("a");

      h3.textContent = members[randomInt].name;
      img.setAttribute("src", members[randomInt].logo[0].url);
      img.setAttribute("alt", members[randomInt].logo[0].alt);
      img.setAttribute("width", "150");
      img.setAttribute("height", "150");
      img.setAttribute("loading", "lazy");      
      address.textContent = members[randomInt].address;
      phone.textContent = members[randomInt].phone;
      website.textContent = "Website";
      website.setAttribute("href", members[randomInt].website);
      
      section.appendChild(h3)
      section.appendChild(img)
      section.appendChild(address);
      section.appendChild(phone);     
      section.appendChild(website)

      affiliatedMembers.appendChild(section);
    }
  }

  getMembers();
    
}

// Este bloque if es detectado automáticamente cuando la página "join.html" se encuentra activa
if (directoryPage.includes("chamber/directory.html")) {
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
        <p>${member.membershipLevel}</p>
        <img src="${member.logo[0].url}" alt="${member.logo[0].alt}" width="150" height="150" loading="lazy"></img>
        
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href=" ${member.website}" target="_blank" style="font-weight:600">Website</a>`;
  
      article.appendChild(section);
    });
  }
  
  getMembers();
  
}

