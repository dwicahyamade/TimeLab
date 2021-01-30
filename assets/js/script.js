// Menu Toggle for Mobile
const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

menu.addEventListener("click", function () {
  nav.classList.toggle('show');
  menu.classList.toggle('click');
})

// Owl Carousel
$('.owl-portofolio').owlCarousel({
  nav: true,
  navText: ['<i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>', '<i class="fas fa-chevron-right fa-2x" aria-hidden="true"></i>'],
  stagePadding: 100,
  center: true,
  loop: true,
  // margin: 100,
  responsive: {
    1600: {
      items: 4
    },
    1300: {
      items: 3,
      stagePadding: 50,
    },
    900: {
      items: 2,
      stagePadding: 50,
    },
    700: {
      items: 2,
      stagePadding: 0,
    },
    300: {
      items: 1,
      stagePadding: 30,
    }
  }
});

$('.owl-testimonials').owlCarousel({
  center: true,
  items: 1,
  loop: true,
  margin: 300,
  dots: true,
});

// Sticky Navbar
// Add .sticky class when scrolled
var navbar = document.getElementById("header");

window.onscroll = function () {
  if (window.pageYOffset > 10) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};

// Jquery for scroling
$('.page-scroll').on('click', function (e) {
  var destination = $(this).attr('href');
  var elDestination = $(destination);

  $('html').animate({
    scrollTop: elDestination.offset().top - 80
  }, 800);

  e.preventDefault();
})