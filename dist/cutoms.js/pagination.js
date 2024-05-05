
    let nextBtn = document.querySelector('.next-btn');
			let prevBtn = document.querySelector('.prev-btn');
			let pageBtn = document.querySelectorAll('.page-btn')
			let currentValue = 1;
			nextBtn.addEventListener('click' , function(event){
			if(currentValue > 1){
				for(let i = 0 ; i < pageBtn.length ; i++){
					pageBtn[i].classList.remove('active');
				}
				currentValue--;
				pageBtn[currentValue-1].classList.add('active');
			}
			})

			prevBtn.addEventListener('click' , function(){
				if(currentValue < pageBtn.length){
				for(let i = 0 ; i < pageBtn.length ; i++){
					pageBtn[i].classList.remove('active');
				}
				currentValue++;
				pageBtn[currentValue-1].classList.add('active');
			}
			})