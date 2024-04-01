const rentalsUrl = "https://aribyui.github.io/wdd230/scooter/data/data.json";

async function getRentals() {
  const response = await fetch(rentalsUrl);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  }
}