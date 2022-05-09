let menu_inner_container = document.getElementById("menu_inner_container");
let menu_icon = document.getElementById("menu_icon");
let menu_inner_menu_icon = document.getElementById("menu_inner_menu_icon");
let menu_inner_img = document.getElementById("menu_inner_img");
let page1_prev_btn = document.getElementById("page1_prev_btn");
let page1_next_btn = document.getElementById("page1_next_btn");
let page1_slides = document.querySelectorAll(".page1-slide")

menu_icon.addEventListener("click", () => {
  menu_inner_container.classList.toggle("menu-inner-container-on");
  menu_icon.classList.toggle("active");
});

menu_inner_menu_icon.addEventListener("click", () => {
  menu_inner_container.classList.toggle("menu-inner-container-on");
  menu_icon.classList.toggle("active");
});

const NextSlide = () =>{
  const activeSlide = document.querySelector(".active");
  activeSlide.classList.remove("active");
  if(activeSlide.nextElementSibling){
    activeSlide.nextElementSibling.classList.add("active");
  }
  else{
    page1_slides[0].classList.add("active");
  }
}
const PrevSlide = () =>{
  const activeSlide = document.querySelector(".active");
  activeSlide.classList.remove("active");
  if(activeSlide.previousElementSibling){
    activeSlide.previousElementSibling.classList.add("active");
  }
  else{
    page1_slides[page1_slides.length-1].classList.add("active");
  }
}
page1_next_btn.addEventListener("click",()=>{NextSlide()})
page1_prev_btn.addEventListener("click",()=>{PrevSlide()})

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});