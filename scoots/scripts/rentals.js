const rentalsUrl = "https://aribyui.github.io/wdd230/scoots/data/data.json";
const prices = document.querySelector(".prices");
const table = document.querySelector(".rentals-prices");
const scooters = document.querySelector(".scooters");

async function getRentals() {
  try {
    const response = await fetch(rentalsUrl);
    if (response.ok) {
      const data = await response.json();
      // console.log(data.rentals);
      displayRentals(data.rentals);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayRentals(data) {
  const thead = document.createElement("thead");

  thead.innerHTML = ` 
  <tr>
    <th colspan="6">Max Rental Pricing</th>
  </tr>
  <tr>    
    <th colspan="2"></th>
    <th colspan="2">Reservation</th> 
    <th colspan="2">Walk-In</th>   
  </tr>
  <tr>
    <th>Type</th>
    <th>Max Pers</th>
    <th>Half Day (3hrs)</th>
    <th>Full Day</th>
    <th>Half Day (3hrs)</th>
    <th>Full Day</th>
  <tr>
  `;

  const tbody = document.createElement("tbody");

  data.forEach((d) => {
    // console.log(d);

    // table
    const tr = document.createElement("tr");
    tr.innerHTML = `    
      <td>${d.rental_type}</td>
      <td>${d.max_persons}</td>
      <td>${d.reservation[0].half_day}</td>
      <td>${d.reservation[0].full_day}</td>
      <td>${d.walk_in[0].half_day}</td>
      <td>${d.walk_in[0].full_day}</td>    
   `;

    tbody.appendChild(tr);
    table.appendChild(thead);
    table.appendChild(tbody);

    // scooters
    const scooterElement = document.createElement("div");
    scooterElement.classList.add("scooter");

    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("scooter-description");

    scooterElement.innerHTML = `           
      <figure>
        <source media="(max-width: 400px)" srcet="${d.images[0].small}">
        <source media="(max-width: 600px)" srcet="${d.images[0].medium}">
        <img src="${d.images[0].large}" alt="${d.rental_type}">
      </figure>
      <figcaption>${d.rental_type}</figcaption>
    `;

    descriptionElement.innerHTML = `<h3>${d.rental_type}</h3><hr><p>${d.description}</p><a href="reservations.html">Make a Reservation&nbsp;&nbsp;<i class="fa fa-calendar-plus"></i></a>`;

    scooters.appendChild(scooterElement);
    scooters.appendChild(descriptionElement);
  });
}

getRentals();
