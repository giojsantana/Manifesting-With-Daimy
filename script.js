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

const texts = [...document.querySelectorAll("p")];
texts.push([...document.querySelectorAll("h1")]);
texts.push([...document.querySelectorAll("h2")]);
texts.push([...document.querySelectorAll("h3")]);
texts.push([...document.querySelectorAll("h4")]);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio) {
        entry.target.classList.remove("hide-txt");
        entry.target.classList.add("show-txt");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0,
  }
);

testimonials.forEach((testimonial, i) => {
  if (i > 0) {
    testimonial.classList.add("no-animation");
  }
});

const mobileTxtTestimonial = document.querySelectorAll(
  ".testimonial-txt--mobile"
);

mobileTxtTestimonial.forEach((testimonial, i) => {
  if (i > 0) {
    testimonial.classList.add("no-anim");
  }
});

texts.flat().forEach((text) => {
  if (text.parentElement.classList.contains("no-animation")) {
    return;
  } else {
    text.classList.add("hide-txt");
    observer.observe(text);
  }
});

const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-hamburger");
const nav = document.querySelector(".nav");

const openNav = function () {
  console.log("open");
  nav.classList.add("nav-active");
  body.style.overflow = "hidden";
};
const closeNav = function () {
  console.log("close");
  nav.classList.remove("nav-active");
  body.style.overflow = "visible";
};

hamburgerBtn.addEventListener("click", openNav);
hamburgerBtn.addEventListener("touchend", openNav);
closeBtn.addEventListener("click", closeNav);
closeBtn.addEventListener("touchend", closeNav);
