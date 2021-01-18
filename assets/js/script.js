// Menu Toggle for Mobile
const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

menu.addEventListener("click", function () {
  nav.classList.toggle('show');
  menu.classList.toggle('click');
})