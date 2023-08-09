const testimonials = [...document.querySelector(".testimonials").children];
const backBtn = document.querySelector(".back-btn");
const forwardBtn = document.querySelector(".forward-btn");

testimonials.forEach((testimonial, i) => {
  testimonial.style.transform = `translateX(${i * 100}%)`;
});

let currentSlide = 0;
const maxSlide = testimonials.length;

backBtn.addEventListener("click", function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  testimonials.forEach((testimonial, i) => {
    const move = (i - currentSlide) * 100;

    testimonial.style.transform = `translateX(${move}%)`;
  });
});

forwardBtn.addEventListener("click", function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  testimonials.forEach((testimonial, i) => {
    const move = (i - currentSlide) * 100;

    testimonial.style.transform = `translateX(${move}%)`;
  });
});
