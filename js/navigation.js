var menu = document.querySelector("#mobile-navigation");
var hamburgerIcon = document.querySelector(".hamburger-menu");

hamburgerIcon.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
