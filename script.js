const testimonials = [...document.querySelector(".testimonials").children];
const backBtn = document.querySelector(".back-btn");
const forwardBtn = document.querySelector(".forward-btn");
const body = document.querySelector("body");

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

const testimonialBtnMore = [
  ...document.querySelectorAll(".testimonial-btn--more"),
];
const testimonialDiv = document.querySelector(".testimonial-div");

testimonialBtnMore.forEach((btn) => {
  btn.addEventListener("click", function () {
    body.style.overflow = "hidden";
    const testimonial = btn.parentElement.parentElement.parentElement;
    const html = `
    <div class="popup-div">
    
    <div class="testimonial-popup">
    <div class="testimonial-img-div testimonial-img--popup">
    <img
    class="testimonial-img"
    src="imgs/${testimonial.dataset.name}.png"
    alt="Image of ${
      testimonial.querySelector(".testimonial-author").textContent
    }"
    />
    </div>
    <h3 class="testimonial-insert--popup">${
      testimonial.querySelector(".testimonial-insert").textContent
    }</h3>
    <p class="testimonial-txt--popup">${testimonial.dataset.text}
    <div class="testimonial-author testimonial-author--popup">
    ${testimonial.querySelector(".testimonial-author").textContent}
    </div>
    </p>
    <button class="popup-close-btn"><ion-icon name="caret-back-outline"></ion-icon></button>
    </div>
    <div class="blur"></div>
    </div>
    `;
    document.querySelector("main").insertAdjacentHTML("afterend", html);
    const popupDiv = document.querySelector(".popup-div");
    const testimonialPopup = document.querySelector(".testimonial-popup");
    const testimonialCloseBtn = document.querySelector(`.popup-close-btn`);
    const blurDiv = document.querySelector(".blur");
    popupDiv.style.display = "block";

    setTimeout(function () {
      console.log("hello");
      testimonialPopup.classList.add("testimonial-popup-active");
    }, 10);

    testimonialCloseBtn.addEventListener("click", function () {
      popupDiv.remove();
      body.style.overflow = "visible";
    });
    blurDiv.addEventListener("click", function () {
      popupDiv.remove();
      body.style.overflow = "visible";
    });
  });
});

const sections = document.querySelectorAll(".section-gap");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio) {
        entry.target.classList.add("section-load");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
