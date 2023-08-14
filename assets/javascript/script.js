// Navbar
const menuToogle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToogle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Slides
let slideIndex = 0;
showSlide();

function showSlide() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlide, 2000);
}
