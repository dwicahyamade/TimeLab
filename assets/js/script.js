// Menu Toggle for Mobile
const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");
const btn_hide = document.getElementById("btn-hide");

menu.addEventListener("click", function () {
  nav.classList.toggle('show');
  btn_hide.classList.toggle('show');
  menu.classList.toggle('click');
})