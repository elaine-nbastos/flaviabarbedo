
const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed:10,
  direction: 'horizontal',
  loop: true,
  spaceBetween: 800,
  slidesPerView:1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',   
  },

});
