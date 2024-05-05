function handleScroll() {
    let navbar = document.querySelector('.navbar');
    let scrollValue = window.scrollY;
    
    if (scrollValue > 0) {
      navbar.classList.add('active')
    } else {
      navbar.classList.remove('active')
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  