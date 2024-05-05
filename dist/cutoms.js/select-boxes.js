const selectBtn = document.querySelectorAll('.select-container');
			selectBtn.forEach(function(btn){
				btn.addEventListener('click' , function(){
					btn.classList.toggle('active');
				})
			})

			document.addEventListener('mouseup' , function(event){
				selectBtn.forEach(function(btn){
					btn.classList.remove('active');
				})
			})