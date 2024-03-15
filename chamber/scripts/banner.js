const banner = document.querySelector(".banner");
const bannerMessage = document.createElement("p");
bannerMessage.textContent = "We invite you to join us for the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m";
banner.appendChild(bannerMessage);

const currentDay = new Date().getDay();
console.log(currentDay);

if (currentDay === 4 || currentDay === 2) {
  banner.classList.toggle("showBanner");
} else {
  banner.classList.toggle("closeBanner");
}
