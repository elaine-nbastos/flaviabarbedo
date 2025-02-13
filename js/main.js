
const swiper = new Swiper('.swiper', {
  // Optional parameters
  autoplay:{
    depay:5000,
  },  
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
