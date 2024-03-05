const baseURL = "https://aribyui.github.io/wdd230";
const linksURL = "https://aribyui.github.io/wdd230/data/links.json";
const lessons = document.querySelector(".lessons")

async function getLinks() {
  const response = await fetch(linksURL);
  if (response.ok) {
    const data = await response.json();
  //  console.table(data);
    displayLinks(data.lessons);
  }  
}

const displayLinks = (weeks) => {
  weeks.forEach(week => { 
    
    // console.log(week.links[0].url) // test

    const linksLength = week.links.length;
    // console.log(linksLength);   

    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");
    const a4 = document.createElement("a");
    let separator1 = document.createTextNode(" | ");
    let separator2 = document.createTextNode(" | ");
    let separator3 = document.createTextNode(" | ");
    
    const li = document.createElement("li");

    let i = 0;    

    if (linksLength === 2) {    
      a1.setAttribute("href", `${week.links[i].url}`);
      a1.textContent = `${week.links[i].title}`;     
      i++;
      a2.setAttribute("href", `${week.links[i].url}`);
      a2.textContent = `${week.links[i].title}`;
    } else if (linksLength === 3) {
      a1.setAttribute("href", `${week.links[i].url}`);
      a1.textContent = `${week.links[i].title}`;      
      i++;
      a2.setAttribute("href", `${week.links[i].url}`);
      a2.textContent = `${week.links[i].title}`;      
      i++;
      a3.setAttribute("href", `${week.links[i].url}`);
      a3.textContent = `${week.links[i].title}`;
    } else {
      a1.setAttribute("href", `${week.links[i].url}`);
      a1.textContent = `${week.links[i].title}`;      
      i++;
      a2.setAttribute("href", `${week.links[i].url}`);
      a2.textContent = `${week.links[i].title}`;      
      i++;
      a3.setAttribute("href", `${week.links[i].url}`);
      a3.textContent = `${week.links[i].title}`;
      i++;
      a4.setAttribute("href", `${week.links[i].url}`);
      a4.textContent = `${week.links[i].title}`;
    }
       
    li.textContent = `${week.lesson} `;

    if (linksLength === 2) {
      li.appendChild(a1);
      li.appendChild(separator1);
      li.appendChild(a2);
    } else if (linksLength === 3) {
      li.appendChild(a1);
      li.appendChild(separator1);
      li.appendChild(a2);
      li.appendChild(separator2);
      li.appendChild(a3);
    } else {
      li.appendChild(a1);
      li.appendChild(separator1);
      li.appendChild(a2);
      li.appendChild(separator2);
      li.appendChild(a3);
      li.appendChild(separator3);
      li.appendChild(a4);
    }

    lessons.appendChild(li);       
  });
}

getLinks();