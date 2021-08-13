// window.addEventListener('DOMContentLoaded', function () { 
//   document.querySelector('loader-wrap').style.display = 'none'; 
// }

// dim

var dimmerBtn = document.querySelector(".dim");
var dimmer = document.querySelector(".dimmer");

dimmerBtn.addEventListener("click", function () {
  if (dimmer.classList.contains("activate")) {
    dimmer.classList.remove("activate");
    dimmerBtn.children[0].classList = "fas fa-moon";
  } else {
    dimmer.classList.add("activate");
    dimmerBtn.children[0].classList = "fas fa-sun";
  }
});

const preloader = document.querySelector('.loader-wrap');

window.onload = () => {
  // document.querySelector('.loader-wrap').style.display = "none";
  preloader.style.animation = "forwards fadeOut 10s ease-in-out";
  preloader.addEventListener('animationend', function () {
    preloader.style.display = "none";
  })
}

// document.addEventListener("load", function () {
//   document.querySelector('.loader-wrap').style.display = "none";
// })

// window.addEventListener('DOMContentLoaded', function() 
// { 

//   document.querySelector('loader-wrap').style.display = 'none';}
