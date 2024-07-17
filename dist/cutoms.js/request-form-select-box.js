
const selectBoxBtn = document.querySelector(".select-box__btn");
const selectBox = document.querySelector(".select-box");
const selectBoxItem = document.querySelectorAll(".select-box__item");

let openRequestSelectBoxes = () => {
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
}

// validation

let userNumber = document.getElementById("user-number");
let userFullName = document.getElementById("user-full-name");
const sendRequestBtn = document.querySelector("#send-request");

let checkRequestFromInputesValue = () => {
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
}


export {selectBox,selectBoxItem,selectBoxBtn,openRequestSelectBoxes,checkRequestFromInputesValue};
