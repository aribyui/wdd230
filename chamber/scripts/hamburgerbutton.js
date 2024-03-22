const hamburgerButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("open");
  navigation.classList.toggle("open");

  if (navigation.classList.contains('open')) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});