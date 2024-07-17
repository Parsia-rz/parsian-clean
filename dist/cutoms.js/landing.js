// scroll down change navbar style
function handleScroll() {
  let navbar = document.querySelector(".navbar");
  let scrollValue = window.scrollY;

  if (scrollValue > 0) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
}

window.addEventListener("scroll", handleScroll);

// request form 
const requestBtns = document.querySelectorAll('.request-btn');
function scrollToRequestForm(){
    const requestForm = document.querySelector('#request-form');
    requestForm.scrollIntoView();
    if(requestForm.classList.contains('active')){
      requestForm.classList.remove('active')
    } else{
      requestForm.classList.add('active')
      setTimeout(() => {
        requestForm.classList.remove('active')
      }, 2000);
    }
}
requestBtns.forEach(function(btn){
  btn.addEventListener('click' , scrollToRequestForm);
});

// request form custom select box

const selectBoxBtn = document.querySelector(".select-box__btn");
const selectBox = document.querySelector(".select-box");
const selectBoxItem = document.querySelectorAll(".select-box__item");

selectBox.addEventListener("click", function () {
  this.classList.toggle("active");
});
selectBoxItem.forEach(function (item) {
  item.addEventListener("click", function (e) {
    let itemText = e.target.innerHTML;
    selectBoxBtn.innerHTML = itemText;
  });
  selectBox.classList.remove("active");
});
document.body.addEventListener("mouseup", function (e) {
  if (!selectBox.contains(e.target)) {
    selectBox.classList.remove("active");
  }
});  


// request form input validation

let userNumber = document.getElementById("user-number");
let userFullName = document.getElementById("user-full-name");
const sendRequestBtn = document.querySelector("#send-request");
sendRequestBtn.addEventListener("click", function () {
  if (userFullName.value === "" || userNumber.value === "") {
    Swal.fire({
      icon: "error",
      title: "لطفا اطلاعات مورد نیاز را وارد نمایید",
      confirmButtonColor: "#ef233c",
      confirmButtonText: "باشه",
    });
  } else {
    if (isNaN(userNumber.value)) {
      Swal.fire({
        icon: "error",
        title: "لطفا شماره تماس خود را به درستی وارد نمایید",
        confirmButtonColor: "#ef233c",
        confirmButtonText: "باشه",
      });
    } else {
      Swal.fire({
        title: "درخواست شما با موفقیت ارسال شد !",
        text: "کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت ",
        icon: "success",
        confirmButtonColor: "#70e000",
        confirmButtonText: "باشه",
      });
      userFullName.value = "";
      userNumber.value = "";
    }
  }
});

// call form request
const sendCallRequestBtn = document.querySelector(".call-form__button");
function sendCallRequest() {
  const formCallInputElem = document.querySelector(".call-form__input");
  function showAlert(title, text, icon, confirmButtonColor) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonColor: confirmButtonColor,
      confirmButtonText: "باشه",
    });
  }

  if (formCallInputElem.value === "") {
    showAlert("لطفا شماره تماس خود را وارد نمایید !", "", "error", "#ef233c");
    formCallInputElem.style.borderColor = "red";
  } else if (isNaN(formCallInputElem.value)) {
    showAlert(
      "فقط مجاز به وارد کردن عدد در فرم هستید !",
      "",
      "error",
      "#ef233c"
    );
    formCallInputElem.style.borderColor = "red";
  } else {
    showAlert(
      "درخواست شما با موفقیت ارسال شد !",
      "کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت",
      "success",
      "#70e000"
    );
    formCallInputElem.style.borderColor = "green";
    formCallInputElem.value = "";
    setTimeout(() => {
      formCallInputElem.style.borderColor = "#adb5bd";
    }, 2000);
  }
}
sendCallRequestBtn.addEventListener("click", sendCallRequest);

// faqs
function openFaqs() {
  const faqBtn = document.querySelectorAll(".faq-container");
  faqBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.classList.toggle("active");
    });
  });
  document.addEventListener('mouseup' , function(e){
    faqBtn.forEach(function(btn){
      if(!btn.contains(e.target)){
        btn.classList.remove('active')
      }
    })
  })
}
openFaqs();

// call fixed button 
function showNumber(){
  const callButton = document.querySelector('.call-fixed-button');
  const showNumber = document.querySelector('.show-number');
  const showNumberCloseButton = document.querySelector('.show-number__close-button');
  callButton.addEventListener('click' , function(){
    showNumber.classList.add('active');
  });
  showNumberCloseButton.addEventListener('click' , function(){
    showNumber.classList.remove('active')
  })

}
showNumber();


// spinner loader

window.addEventListener('load' , function(){
  const spinnerLoader = this.document.querySelector('.spinner-container');
  spinnerLoader.style.display = 'none';
})



