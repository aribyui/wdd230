const ul = document.querySelector("ul");
const hamButton = document.querySelector("#menu");

hamButton.addEventListener("click", () => {
  ul.classList.toggle("show");
  hamButton.classList.toggle("show");
});