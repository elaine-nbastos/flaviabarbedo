
const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed:400,
  direction: 'vertical',
  loop: true,
  spaceBetween: 100,
  slidesPerView:3,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
