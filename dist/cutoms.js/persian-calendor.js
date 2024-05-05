function persianDatePicker(){
    jalaliDatepicker.startWatch({
        minDate: "attr",
        maxDate: "attr"
      }); 
    
      let datePickerInput = document.getElementsByClassName("form-date")
      for(let i = 0 ; i < datePickerInput.length; i++){
        datePickerInput[i].addEventListener('click' , function(){
            jalaliDatepicker.hide();
            jalaliDatepicker.show(this);
          })
      }
}
persianDatePicker();