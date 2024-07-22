// Start Slider-swiper
const slider_swiper = new Swiper(".slider-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".slider-swiper .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
// End Slider-swiper

// Start Type-swiper
const type_swiper = new Swiper(".type-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: -4,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
// End Type-swiper

// Start Rate-swiper
const rate_swiper = new Swiper(".rate-swiper", {
  slidesPerView: 3,
  spaceBetween: 1, // Tăng khoảng cách giữa các slide
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 3,
    },

    // 425: {
    //   slidesPerView: 1.2,
    //   spaceBetween: 15,
    // },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1440: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

// End Rate-swiper

// Start New-swiper
const new_swiper = new Swiper(".new-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
