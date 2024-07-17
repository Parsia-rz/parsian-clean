const fullNameInput = document.querySelector('.full-name-input');
const phoneNumberInput = document.querySelector('.phone-number-input');
const inputErrors = document.querySelectorAll('.input-error');
const submitButton = document.querySelector('#submit-button');
const phoneError = document.querySelector('.phone-error');
const formWrapper = document.querySelector('#form-wrapper');
const messageBox = document.querySelector('.message-box');

formWrapper.addEventListener('submit' , (e) =>{
    e.preventDefault();
});

// check inputs value is empty or not
let checkInputsValue = () => {
    if(fullNameInput.value.trim() === '' || phoneNumberInput.value.trim() === '' || messageBox.value.trim() === '') {
        inputErrors.forEach((error) => {
            error.classList.remove('d-none');
        });
        
    } else{
        inputErrors.forEach((error) => {
            error.classList.add('d-none')
        });
        checkPhoneNumberInputValueType();
    }
    
}

// check the phone number value is a number or not
let checkPhoneNumberInputValueType = () => {
    if(isNaN(phoneNumberInput.value)){
        phoneError.classList.remove('d-none')
        phoneError.textContent = 'شماره موبایل باید شامل عدد باشد !';
    } else{
        showMoreSuccessMessage();
        clearAllInputs();
    }
}

// check the length of phone number input
let checkPhoneNumberLength = () => {

    if(phoneNumberInput.value.length >= 11) {
        phoneError.classList.add('d-none')
    } else{
        phoneError.classList.remove('d-none')
        phoneError.textContent = 'لطفا یک شماره موبایل ۱۱ رقمی وارد نمایید';

    }
}

// show success maessage modal
let showMoreSuccessMessage = () => {
    Swal.fire({
    title: "پیغام شما با موفقیت ارسال شد !",
    text:"از شما برای ارسال نظرتون متشکریم ",
    icon: "success", 
    confirmButtonColor : '#70e000',
    confirmButtonText : 'باشه'
    });
}

let clearAllInputs = () =>{
    fullNameInput.value = '';
    phoneNumberInput.value = '';
    messageBox.value = '';
}

// functions
submitButton.addEventListener('click' , checkInputsValue)
phoneNumberInput.addEventListener('keyup' , checkPhoneNumberLength);
