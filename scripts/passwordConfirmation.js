const password = document.querySelector("#userPassword");
const passwordConfirmation = document.querySelector("#userPasswordConfirmation");
const message = document.querySelector("#message");

passwordConfirmation.addEventListener("focusout", checkSame);

function checkSame() {
  if (password.value !== passwordConfirmation.value) {
    message.textContent = "❗ Passwords do not match. Try again"
    message.style.display = "block";
    password.value = "";
    passwordConfirmation.value = "";
    password.focus();
  } else {
    message.style.display = "none";
    message.style.color = "#171717";
  }
}