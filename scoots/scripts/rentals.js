const rentalsUrl = "https://aribyui.github.io/wdd230/scoots/data/data.json";
const prices = document.querySelector(".prices");
const table = document.querySelector(".rentals-prices");

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
  // agregar tbody, tfoot, caption
  table.innerHTML = `
  <tr>
    <th colspan="2"></th>
    <th colspan="2">Reservation</th> 
    <th colspan="2">Walk-In</th> 
  </tr>
  <tr>
    <th>Type</th>
    <th>Max Pers</th>
    <th>HD (3hrs)</th>
    <th>FD</th>
    <th>HD (3hrs)</th>
    <th>FD</th>
  <tr>`;

  data.forEach((d) => {
    // console.log(d);

    const tr = document.createElement("tr");

    tr.innerHTML = `    
      <td>${d.rental_type}</td>
      <td>${d.max_persons}</td>
      <td>${d.reservation[0].half_day}</td>
      <td>${d.reservation[0].full_day}</td>
      <td>${d.walk_in[0].half_day}</td>
      <td>${d.walk_in[0].full_day}</td>
   `;

    table.appendChild(tr);
  });
}

getRentals();
