// Sticky Header
let navSlide = document.getElementById("header");
let prevPos = window.scrollY;
window.addEventListener("scroll", () => {
  let newPos = window.scrollY;
  newPos > prevPos? navSlide.classList.add("hide"): navSlide.classList.remove("hide");
  prevPos = newPos;
});

// ======== Toggle Nav bar ==========
const menuBar = document.getElementById("bar");
const headerMenu = document.getElementById("header-menu");

menuBar.addEventListener("click", () => {
  headerMenu.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  e.target.classList == "disable-item"
    ? headerMenu.classList.remove("active")
    : "";
});




// Get Start
document.getElementById('getStartBtn').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default anchor click behavior
  window.scrollTo({
      top: document.querySelector('#tech').offsetTop - 100, 
      behavior: 'smooth' // Optional: adds smooth scrolling
  });
});
// ========= Scroll to Top =========
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;

  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  pos > 200
    ? (scrollProgress.style.display = "grid")
    : (scrollProgress.style.display = "none");
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#b3ff00 ${scrollValue}%, #000000 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// Owl-carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
    },
  },
});

// wow animate js
new WOW().init();


// Counter Number
$(function() {
  let counterActivated = false;

  $(window).on("scroll", () => {
      if (!counterActivated && $(window).scrollTop() > $("#counter-section").offset().top - window.innerHeight) {
          $(".counter").each(function() {
              $(this).prop("Counter", 0).animate({ Counter: $(this).data("count") }, {
                  duration: 2000,
                  easing: "swing",
                  step: now => $(this).text(Math.floor(now))
              });
          });
          counterActivated = true;
      }
  });
});
