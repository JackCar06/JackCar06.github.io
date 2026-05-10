// Slideshow javascript modified from https://www.w3schools.com/howto/howto_js_slideshow.asp
// Javascript for jumping from one spot on the page to another is from https://stackoverflow.com/questions/3569329/javascript-to-make-the-page-jump-to-a-specific-location
// Javacript for switching css themes is modified from https://www.geeksforgeeks.org/javascript/how-to-switch-between-multiple-css-stylesheets-using-javascript/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

function jumpToSonic() {
	document.getElementById("sonic").scrollIntoView({behavior: 'smooth'});
}

function jumpToMarvel() {
	document.getElementById("marvel").scrollIntoView({behavior: 'smooth'});
}

function jumpToFNAF() {
	document.getElementById("fnaf").scrollIntoView({behavior: 'smooth'});
}

function jumpToDeltarune() {
	document.getElementById("deltarune").scrollIntoView({behavior: 'smooth'});
}

function jumpToMario() {
	document.getElementById("mario").scrollIntoView({behavior: 'smooth'});
}

function swapTheme(value) {
	let design = document.getElementsByTagName('link');
	design[0].href = value;
}