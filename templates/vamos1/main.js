let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

let slides = document.querySelectorAll(".home .slides-container .slide");

let index = 0;

function next() {
  slides[index].classList.remove("active");

  index = (index + 1) % slides.length;

  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");

  index = (index - 1 + slides.length) % slides.length;

  slides[index].classList.add("active");
}
// Create the script tag, set the appropriate attributes
var script = document.createElement("script");
script.src =
  "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap";
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function () {
  // JS API is loaded and available
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
