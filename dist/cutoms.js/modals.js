const modal = document.querySelector('.modal-container');
const reportBtn = document.querySelectorAll('.report-button');
const sendReportBtn = document.querySelector('#send-report-button');
const overlay = document.querySelector('.overlay-bg');
const modalCloseBtn = document.querySelector('.modal-close-button');

reportBtn.forEach(function(btn){
    btn.addEventListener('click' , function(){
        modal.classList.add('active');
        overlay.classList.add('active')
    });
});
modalCloseBtn.addEventListener('click' , function(){
    modal.classList.remove('active');
    overlay.classList.remove('active');
});
sendReportBtn.addEventListener('click' , function(){
    modal.classList.remove('active');
    overlay.classList.remove('active');
    Swal.fire({
    title: "متن گزارش با موفقیت ارسال شد",
    icon: "success", 
    confirmButtonColor : '#70e000',
    confirmButtonText : 'باشه'
    });
});

const notifModal = document.querySelector('.notif-modal-container');
const notifBtn = document.querySelector('.notif-button'); 
const notifModalCloseBtn = document.querySelector('.notif-modal-close-button');

notifBtn.addEventListener('click' , function(){
    notifModal.classList.add('active');
    document.querySelector('.overlay-bg').classList.add('active');
});
notifModalCloseBtn.addEventListener('click' , function(){
    notifModal.classList.remove('active')
    document.querySelector('.overlay-bg').classList.remove('active');
})