const replyBtn = document.querySelectorAll('.reply-btn');
const replyModal = document.querySelector('.reply-modal-container');
const overlayBg = document.querySelector('.overlay-bg');
const closeModalBtn = document.querySelector('.reply-modal-close-btn');
const modalTitle = document.querySelector('.modal-title')

replyBtn.forEach(function(btn){
    btn.addEventListener('click' , function(){
        replyModal.classList.add('active');
        overlayBg.classList.add('active');
        
        let commentUsername = btn.closest('.card-comment').querySelector('.comment-username').innerHTML;
        modalTitle.innerHTML = 'در پاسخ به ' +  commentUsername;
    })
});
closeModalBtn.addEventListener('click' , function(){
    replyModal.classList.remove('active');
    overlayBg.classList.remove('active');
})

document.addEventListener('mouseup', function(event){
    if(!replyModal.contains(event.target)){
        replyModal.classList.remove('active');
        overlayBg.classList.remove('active');
    }
});
document.querySelector("#reply-submit-btn").addEventListener('click' , function(event){
    event.preventDefault();
})