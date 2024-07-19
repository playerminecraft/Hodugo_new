function breakpoints_wrap_3() {
  const slider = document.querySelector(".bp-w");
  const slides = document.querySelectorAll(".bp-w-item");
  let slidesPerView = 1;

  if (window.innerWidth >= 320 && window.innerWidth < 768) {
    slidesPerView = 1;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    slidesPerView = 2;
  } else if (window.innerWidth >= 1440) {
    slidesPerView = 3;
  }

  // Reset flex styles on slides
  slides.forEach((slide) => {
    // slide.style.flex = "";
    // slide.style.width = ""; // Reset width if needed
    slide.style.marginBottom = "20px"; // Set margin between slides
    slide.style.boxSizing = "border-box";
    // slide.style.backgroundColor = "#f0f0f0";
    // slide.style.textAlign = "center";
  });

  const slideWidth = slider.clientWidth / slidesPerView;

  // Apply flex-basis and flex-wrap styles
  slider.style.display = "flex";
  slider.style.flexWrap = "wrap";
  slider.style.justifyContent = "flex-start";

  slides.forEach((slide, index) => {
    // Remove margin-bottom for the last slide in each row
    if ((index + 1) % slidesPerView === 0) {
      slide.style.marginBottom = "0";
    }
    slide.style.flex = `0 0 calc(${slideWidth}px - 20px)`; // Flex-basis with margin
  });
}

function setSlidesPerView() {
  breakpoints_wrap_3();
}

window.addEventListener("resize", setSlidesPerView);
window.addEventListener("load", setSlidesPerView);
