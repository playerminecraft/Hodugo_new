function breakpoints_3() {
  const slider = document.getElementById(".bp-3");
  const slides = document.querySelectorAll(".bp-item");
  let slidesPerView = 1;

  if (window.innerWidth >= 320 && window.innerWidth < 768) {
    slidesPerView = 1;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    slidesPerView = 2;
  } else if (window.innerWidth >= 1440) {
    slidesPerView = 3;
  }

  const slideWidth = slider.clientWidth / slidesPerView;
  slides.forEach((slide) => {
    slide.style.flex = `1 0 ${slideWidth}px`;
  });
}

window.addEventListener("resize", setSlidesPerView);
window.addEventListener("load", setSlidesPerView);
