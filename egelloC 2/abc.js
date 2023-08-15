const slides = document.querySelectorAll(".slide");
let curSlide = 0;

// select next slide button
const nextSlide = document.querySelector(".btn-next");
let maxSlide = slides.length - 1;
// add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
    if (curSlide === maxSlide) {
        curSlide = 0;
      } else {
        curSlide++;
      }
// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
});

const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});