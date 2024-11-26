// window.onload = function() {
//   alert('Welcome to TravelQuest!');
// };


// let currentSlide = 0;
//         const slides = document.querySelector('.slides');
//         const totalSlides = document.querySelectorAll('.slide').length;

//         document.getElementById('next').addEventListener('click', () => {
//             currentSlide = (currentSlide + 1) % totalSlides;
//             updateSlidePosition();
//         });

//         document.getElementById('prev').addEventListener('click', () => {
//             currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//             updateSlidePosition();
//         });

//         function updateSlidePosition() {
//             const slideWidth = document.querySelector('.slide').clientWidth;
//             slides.style.transform = 'translateX(' + (-slideWidth * currentSlide) + 'px)';
//         }