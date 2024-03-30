const highTemperatureMessage = document.querySelector(".high-temperature-message");
const closeBanner = document.querySelector(".close-banner");

closeBanner.addEventListener("click", () => {
  highTemperatureMessage.classList.add("hide-banner")
});