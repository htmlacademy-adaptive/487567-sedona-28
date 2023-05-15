const navigation = document.getElementById("nav");
const menu = document.getElementById("nav-button");

menu.addEventListener("click", () => {
  navigation.style.setProperty("nav__list", navigation.children.length);
  navigation.classList.toggle("nav__list--open");
  menu.classList.toggle("nav-button--close");
});
