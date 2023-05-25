const navigation = document.getElementById("nav");
const menu = document.getElementById("nav-button");

document.querySelector('.nav--nojs, .map--nojs').classList.remove('nav--nojs');

menu.addEventListener("click", () => {
  navigation.style.setProperty("nav__list", navigation.children.length);
  navigation.classList.toggle("nav__list--open");
  menu.classList.toggle("nav-button--close");
});
