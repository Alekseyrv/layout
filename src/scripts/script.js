function openMenu(id){
			let element = document.getElementById(id)
			let body = document.querySelector('body')
			let parent = document.querySelector('.header__nav')
			element.onclick = function(event) {
				if (this.id === id){
					let menu = document.getElementsByClassName('nav__list')[0]
					menu.style.width = "100%"
					body.style.overflowY = "hidden"
					parent.style.position = "fixed"

					menu.style.overflowX = "hidden"
					parent.style.height = "100%"
		
				}
		}
	}
		
	function closeMenu(id) {
		let element = document.getElementById(id)
		let body = document.querySelector('body')
		let parent = document.querySelector('.header__nav')
		element.onclick = function(event) {
			if (this.id === id){
				let menu = document.getElementsByClassName('nav__list')[0]
				menu.style.width = "0"
				body.style.height = "100%"
				body.style.overflowY = "auto"
				parent.style.position = "absolute"
				menu.style.overflowX = "hidden"
				function disableHeight() {
						parent.style.height = "0"
				}
				setTimeout(disableHeight, 500)
			}
		}
	}
	
	
		$(document).ready(function(){
  			$('.second-slider__init').slick({
  				prevArrow:'<button aria-label="Previous" class="second-slider__prev"></button>',
      			nextArrow:'<button aria-label="Next" class="second-slider__next"></button>',
    			 infinite: true,
    			 slidesToShow: 4,
    			 slidesToScroll: 1,
    			 variableWidth: true,
    			 responsive: [{
					    breakpoint: 1199,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
							centerMode: true,
							arrows: false,
							dots: true
				    	}},{
				    	breakpoint: 1236,
				    	settings: {
				    		arrows: false
				    	}
				   }]
  			});
		});
		$('.main-slider__init').slick({
	prevArrow: '.main-slider__prevhrz',
	nextArrow: '.main-slider__nexthrz',
	responsive: [{
		breakpoint: 1199,
		settings: {
			dots: true,
			arrows: false
		}},
		{
			breakpoint: 1200,
			settings: {
				prevArrow: '.main-slider__prevhrz',
				nextArrow: '.main-slider__nexthrz',
				dots: false
			}
		}]
	})