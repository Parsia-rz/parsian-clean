
let trackScrollProgress = () => {
    let scrollProgress = document.querySelector('.scroll-progress-wrapper');
    let documentHeight = document.documentElement.scrollHeight;
    let windowHeight = window.innerHeight;
    let scrollValue = window.scrollY;
    let scrollPercent = scrollValue / (documentHeight - windowHeight);
    scrollPercent = Math.round(scrollPercent * 100);
    // scroll progress width 
    scrollProgress.style.width = scrollPercent + '%';
}

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll' , trackScrollProgress);
});

// export {trackScrollProgress};