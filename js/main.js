
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

const btnMenu = document.getElementById("hamburger-button");
const menu = document.getElementById("menu")

btnMenu.classList.add("hamburger-button-js-enabled");
btnMenu.setAttribute("aria-expanded", "false");
menu.setAttribute("aria-hidden", "true");

btnMenu.addEventListener("click", function(){

  let expanded = this.getAttribute("aria-expanded") === "true" ? true : false;


  if(expanded){
    menu.classList.add("menu-closed")
  }else{
    menu.classList.remove("menu-closed")
  };

  this.setAttribute("aria-expanded", !expanded)
  menu.setAttribute("aria-hidden", expanded)
})