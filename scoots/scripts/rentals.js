const rentalsUrl = "https://aribyui.github.io/wdd230/scoots/data/data.json";
const prices = document.querySelector(".prices");

async function getRentals() {
  const response = await fetch(rentalsUrl);
  if (response.ok) {
    const data = await response.json();
    console.log(data.rentals);
    displayRentals(data.rentals);
  }
}

function displayRentals(data) {
  data.forEach((d) => {
    const div = document.createElement("div");
    const table = document.createElement("table");

    // table.classList.add("table");

    // rentalType.innerHTML = `
    // <p>Rental type</p>
    // <p>${d.rental_type}</p>
    // <p>Max persons</p>
    // <p>${d.max_persons}</p>
    // <p>Reservation</p>
    // <p>Half day</p>
    // <p>${d.reservation[0].half_day}</p>
    // <p>Full day</p>
    // <p>${d.reservation[0].full_day}</p>
    // <p>Half day</p>
    // <p>${d.walk_in[0].half_day}</p>
    // <p>Full day</p>
    // <p>${d.walk_in[0].full_day}</p>
    // `;

    // prices.appendChild(table);
  });
}

getRentals();
