let serviceType = document.querySelector("#service");
let radioButtonsContainer = document.querySelector('#radio-button-container');
let radioItemOne = document.querySelector('.radio-item-one');
let radioItemTwo = document.querySelector('.radio-item-two');
let radioItemThree = document.querySelector('.radio-item-three');
let serviceItems = document.querySelector('#service-item');
let ceremonyItems = document.querySelector('#ceremony');
let nursingItems = document.querySelector("#nursing");
let radioButtonTitleElem = document.querySelector('.radio-items-title');
let transportationItems = document.querySelector('#transportation');
let meter = document.querySelector("#meters");
let datePickerContainer = document.querySelector('#date-picker-container');
let textWarning = document.querySelector('.text-warn');

let servicesData = {
"خدمات نظافتی": [

    'نطافت منزل',
    'نظافت راه پله و مشاعات',
    'نظافت فرش و مبل',
    'نظافت اداره',
    'نظافت مجتمع های مسکونی',
    'نظافت مجتمع های اداری',
    'نظافت مجتمع های تجاری',
    'شستشوی پرده',
    'نماشویی',
    'شیشه و پنجره',
],
"خدمات پرستاری": [

    'مراقبت در بیمارستان',
    'نگهداری از سالمندان سالم',
    'نگهداری از سالمندان لگنی ، پوشکی',
    'مراقبت و نگهداری از کودکان',
    'نگهداری از بیمار زخم بستری',
    'نگهداری بیمار MS',
    'نگهداری بیمار آلزایمری',
],
"خدمات کاریابی": [

    'اعزام ابدارچی',
    'اعزام کارگر ساده',
    'اعزام باغبان',
    'اعزام سرایدار',
    
],
"خدمات پذیرایی" : [
    'جشن تولد و نامزدی و دوستانه',
    'مهمانی خانوادگی',
    'مراسم خانوادگی',
    'مراسم تجاری/اداری',
    'مراسم سوگواری',
],
"خدمات حمل و نقل" : [
    'اسباب و لوازم منزل',
    'اسباب و لوازم شرکت',
    'جهیزیه عروس',
],
}

function updateRadionItems(){
radioButtonTitleElem.innerHTML = '';
radioItemOne.innerHTML = '';
radioItemTwo.innerHTML = '';
radioItemThree.innerHTML = '';
}


serviceType.addEventListener('change' , function(){
    let mainService = serviceType.value;
    let mainServiceItem = servicesData[mainService];
    if(serviceType.value === 'انتخاب خدمات'){
        serviceItems.innerHTML = '';
        serviceItems.innerHTML += '<option>انتخاب نوع خدمات</option>';
        ceremonyItems.classList.add('d-none');
        nursingItems.classList.add('d-none');
        transportationItems.classList.add('d-none');
    } else{
       
        if(mainService === 'خدمات پذیرایی'){
            ceremonyItems.classList.remove('d-none')
        } else{
            ceremonyItems.classList.add('d-none')
        }
      
        if(mainService === 'خدمات تعمیر منزل' || mainService === 'نظافتچی'){
            
            serviceItems.parentElement.classList.add('d-none')
        } else{
            serviceItems.parentElement.classList.remove('d-none')
        }
      
        if(mainService === 'خدمات حمل و نقل'){
            transportationItems.classList.remove('d-none')
        } else{
            transportationItems.classList.add('d-none')
        }
        if(mainService === 'خدمات تعمیر منزل'){
            textWarning.innerHTML = ' جزییات تعمیرات خود را در این بخش کامل ذکر کنید.*';
        } else{
            textWarning.innerHTML ='';   
        }
        if (mainService === 'خدمات نظافتی') {
            meter.classList.remove('d-none');
            radioItemOne.innerHTML = '۴ ساعت';
            radioItemTwo.innerHTML = '۸ ساعت';
            radioItemThree.innerHTML = '۱۰ ساعت';
            radioButtonTitleElem.innerHTML = 'زمان مورد نیاز برای نظافت؟';
            datePickerContainer.classList.remove('d-none');
            nursingItems.classList.add('d-none'); // Hide nursing items if shown previously
            radioButtonsContainer.classList.remove('d-none');
        } else if (mainService === 'خدمات پرستاری') {
            nursingItems.classList.remove('d-none');
            radioItemOne.innerHTML = 'آقا';
            radioItemTwo.innerHTML = 'خانم';
            radioItemThree.innerHTML = 'فرقی ندارد';
            datePickerContainer.classList.remove('d-none');
            radioButtonTitleElem.innerHTML = 'به پرستار آقا نیاز دارید یا خانم؟';
            meter.classList.add('d-none'); 
            radioButtonsContainer.classList.remove('d-none');
        } else {
            meter.classList.add('d-none');
            nursingItems.classList.add('d-none');
            radioButtonsContainer.classList.add('d-none');
            datePickerContainer.classList.add('d-none');
            updateRadionItems();
        }

        serviceItems.innerHTML = '';
        mainServiceItem.forEach(service => {
            serviceItems.innerHTML += '<option>' + service + '</option>'
        });

        
    }

})