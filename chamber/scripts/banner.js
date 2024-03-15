const banner = document.querySelector(".banner");
const bannerMessage = document.createElement("p");
const deleteButton = document.createElement("span");

bannerMessage.textContent = "We invite you to join us for the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m";
deleteButton.textContent = "✖";

deleteButton.setAttribute("title", "Close")

banner.appendChild(bannerMessage);
banner.appendChild(deleteButton);

const currentDay = new Date().getDay();
console.log(currentDay);

currentDay === 0 || currentDay === 2 || currentDay === 3 ? banner.classList.toggle("showBanner") : banner.classList.toggle("closeBanner");

deleteButton.addEventListener("click", () => {
  banner.classList.toggle("closeBanner");
});