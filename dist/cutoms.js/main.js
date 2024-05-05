const darkModeBtn = document.querySelector('.dark-mode-toggle');
darkModeBtn.addEventListener('click' , function(){
    if(darkModeBtn.getAttribute('data-kt-value') === 'dark'){
        darkModeBtn.setAttribute('data-kt-value' , 'light');
        darkModeBtn.innerHTML = 'sunny';
    } else{
        darkModeBtn.setAttribute('data-kt-value' , 'dark');
        darkModeBtn.innerHTML = 'dark_mode';
    }
    
})

// sidenav 
let sidenavAccordionBtn = document.querySelectorAll('.sidenav-item');
sidenavAccordionBtn.forEach(function(btn){
  btn.addEventListener('click' , function(){
    btn.classList.toggle('active')
  })
});

// function handleScroll() {
//   let navbar = document.querySelector('.main-navbar');
//   let scrollValue = window.scrollY;
  
//   if (scrollValue > 300) {
//     navbar.classList.add('active')
//   } else {
//     navbar.classList.remove('active')
//   }
// }

// window.addEventListener('scroll', handleScroll);

