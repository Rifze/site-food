import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("load", function() {
    var loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "none";
  });
  var aboutUsButton = document.getElementById("about-us-button");
  aboutUsButton.addEventListener("click", function() {
    var loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "flex";

    setTimeout(function() {
      loadingScreen.style.display = "none";
    }, 3000);
  });
});

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 1
  });
});


 
  