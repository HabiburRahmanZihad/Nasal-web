// JavaScript for mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});


const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? 3 : currentIndex - 1;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 3) ? 0 : currentIndex + 1;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});