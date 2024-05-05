let formControl = document.querySelectorAll('.form-control');
let focusBorder = document.querySelectorAll('.focus-border');

formControl.forEach((input, i) => {
    input.addEventListener('focus', function() {
        focusBorder[i].classList.add('active');
    });

    input.addEventListener('blur' , function(){
        if(input.value.trim() === ''){
            focusBorder[i].classList.remove('active')
        } else{
            focusBorder[i].classList.add('active')
        }
    })
});
