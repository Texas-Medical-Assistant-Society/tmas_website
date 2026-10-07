const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const menuBtn = document.querySelector('.hamburger');

menuBtn.addEventListener('click', () => {
menuBtn.classList.toggle('open');
});