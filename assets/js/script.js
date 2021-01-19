// Menu Toggle for Mobile
const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");
const btn_hide = document.getElementById("btn-hide");

menu.addEventListener("click", function () {
  nav.classList.toggle('show');
  btn_hide.classList.toggle('show');
  menu.classList.toggle('click');
})

// Owl Carousel
$('.owl-carousel').owlCarousel({
  nav: true,
  navText: ['<i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>', '<i class="fas fa-chevron-right fa-2x" aria-hidden="true"></i>'],
  stagePadding: 100,
  center: true,
  items: 2,
  loop: true,
  margin: 400,
  responsive: {
    1300: {
      items: 5
    },
    700: {
      items: 2
    },
    300: {
      items: 1
    }
  }
});