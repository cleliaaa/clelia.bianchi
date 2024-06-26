const slider = document.querySelector('.section-4 .slider');
const left = document.querySelector('.section-4 .left');
const right = document.querySelector('.section-4 .right');

let slide = 0;
const slideWidth = 300;
const totalSlides = slider.children.length;

left.addEventListener('click', () => {
  if (slide > 0) {
    slide--;
    slider.style.left = -(slide * slideWidth) + 'px';
  }
});

right.addEventListener('click', () => {
  if (slide < totalSlides - 1) {
    slide++;
    slider.style.left = -(slide * slideWidth) + 'px';
  }
});

const burger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.responsive-menu');

burger.addEventListener('click', () => {
  console.log("test")
  menuMobile.classList.toggle('active');
})
