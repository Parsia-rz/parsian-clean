
// sidenav 
let sidenavAccordionBtn = document.querySelectorAll('.sidenav-item');
sidenavAccordionBtn.forEach(function(btn){
  btn.addEventListener('click' , function(){
    btn.classList.toggle('active')
  })
});

// add active class to each nav link 
const path = window.location.pathname;
const page = path.split("/").pop();
const navLinks = document.querySelectorAll('nav .nav-link');
navLinks.forEach((link) => {
  if(link.getAttribute("href") === page) {
    link.parentElement.classList.add('active')
  }
})


