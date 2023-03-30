// const slidesContainer = document.querySelector(".slides-container");
// const slides = document.querySelectorAll(".slide");
// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");

// let currentIndex = 0;
// let intervalId;

// function moveSlides() {
//   slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// function startAutoplay() {
//   intervalId = setInterval(() => {
//     currentIndex++;
//     if (currentIndex >= slides.length) {
//       currentIndex = 0;
//     }
//     moveSlides();
//   }, 3000);
// }

// function stopAutoplay() {
//   clearInterval(intervalId);
// }

// prevBtn.addEventListener("click", () => {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = slides.length - 1;
//   }
//   moveSlides();
//   stopAutoplay();
// });

// nextBtn.addEventListener("click", () => {
//   currentIndex++;
//   if (currentIndex >= slides.length) {
//     currentIndex = 0;
//   }
//   moveSlides();
//   stopAutoplay();
// });

// startAutoplay();



// let slideIndex = 0;

// function movePrev() {
//   const slides = document.querySelectorAll('.slide');
//   slides[slideIndex].classList.remove('active');
//   slideIndex--;
//   if (slideIndex < 0) {
//     slideIndex = slides.length - 1;
//   }
//   slides[slideIndex].classList.add('active');
// }

// function moveNext() {
//   const slides = document.querySelectorAll('.slide');
//   slides[slideIndex].classList.remove('active');
//   slideIndex++;
//   if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   }
//   slides[slideIndex].classList.add('active');
// }



const carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.slides');
const slideList = carousel.querySelectorAll('.slide');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');
let currentIndex = 0;
let slideInterval = setInterval(nextSlide, 5000);

function goToSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  slideList[currentIndex].classList.remove('active');
  slideList[index].classList.add('active');
  currentIndex = index;
}

function nextSlide() {
  let index = (currentIndex + 1) % slideList.length;
  goToSlide(index);
}

function prevSlide() {
  let index = currentIndex - 1;
  if (index < 0) {
    index = slideList.length - 1;
  }
  goToSlide(index);
}

prevButton.addEventListener('click', () => {
  clearInterval(slideInterval);
  prevSlide();
  slideInterval = setInterval(nextSlide, 5000);
});

nextButton.addEventListener('click', () => {
  clearInterval(slideInterval);
  nextSlide();
  slideInterval = setInterval(nextSlide, 5000);
});
