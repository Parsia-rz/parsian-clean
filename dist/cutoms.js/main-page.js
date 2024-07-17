import { openRequestSelectBoxes , checkRequestFromInputesValue } from "./request-form-select-box.js";

const swiper = new Swiper("#main-page-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 25000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   articles swiper slider

 const articlesSlider = new Swiper("#articles-slider" , {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
 })

//  comments slider

const commentSlider = new Swiper("#comments-slider" , {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
})

// count the numbers in header

const counters = document.querySelectorAll('.counter-number');
let mainPageHeaderContent = document.querySelector('.main-page-header__content');
let startCounter = false;

window.addEventListener('scroll' , () =>{
    if(window.scrollY >= mainPageHeaderContent.offsetTop) {
        if(!startCounter) {
            counters.forEach((counter) => setCounter(counter))
        }
        startCounter = true;
    }
})



window.addEventListener('load' , () => {
    if(!startCounter){
        counters.forEach(counter => setCounter(counter))
    }
    startCounter = true;
})

let setCounter = (el) => {
    let elementCounter = el.dataset.number;
    let currentValue = 0;
    let counterInterval = setInterval(() => {
        if(currentValue == elementCounter){
            clearInterval(counterInterval)
        }
        el.textContent = `${currentValue++} +`;
    }, 2);
}

// scroll to request form
const requestFormBtn = document.querySelectorAll('#request-form-btn');
const requestForm = document.querySelector('#parsianclean-services');

requestFormBtn.forEach((btn) => {
    btn.addEventListener('click' , () => {
      requestForm.scrollIntoView();
    });
 });

// recall request form select box
openRequestSelectBoxes();
// check request form validtion
checkRequestFromInputesValue();

