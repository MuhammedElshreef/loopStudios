const burgerCheckBox = document.getElementById("burger-menu-btn");
const burgerMenu = document.getElementById("burger-menu");
burgerCheckBox.addEventListener("change", () => {
  if (burgerCheckBox.checked) {
    burgerMenu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  } else {
    burgerMenu.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
});
burgerMenu.addEventListener("click", () => {
  burgerCheckBox.checked = false;
  burgerMenu.classList.add("hidden");
  document.body.style.overflow = "auto";
});