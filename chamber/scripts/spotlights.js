const baseURL = "https://aribyui.github.io/wdd230/";
const linksURL = "https://aribyui.github.io/wdd230/chamber/data/members.json";
const affiliatedMembers = document.querySelector(".affiliated-members");

async function getMembers() {
  const response = await fetch(linksURL);
  if (response.ok) {
    data = await response.json();
    console.log(data.members); // se imprime en consola para depurar
    displayMembers(data.members);
  }
}

function displayMembers(members) {

  // display all members
  console.log(members);

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
    const mLevel = document.createElement("p");
    const address = document.createElement("p");
    const phone = document.createElement("p");    
    const website = document.createElement("a");

    h3.textContent = members[randomInt].name;
    img.setAttribute("src", members[randomInt].logo[0].url);
    img.setAttribute("alt", members[randomInt].logo[0].alt);
    img.setAttribute("width", "200");
    img.setAttribute("height", "200");
    img.setAttribute("loading", "lazy");  
    mLevel.textContent = members[randomInt].membershipLevel;  
    address.textContent = members[randomInt].address;
    phone.textContent = members[randomInt].phone;
    website.textContent = "Website";
    website.setAttribute("href", members[randomInt].website);
    website.setAttribute("target", "_blank");
    
    section.appendChild(h3)
    section.appendChild(img)
    section.appendChild(mLevel);
    section.appendChild(address);
    section.appendChild(phone);     
    section.appendChild(website)

    affiliatedMembers.appendChild(section);
  }
}

getMembers();