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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBvcGVuTWVudShpZCl7XHJcblx0XHRcdGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXHJcblx0XHRcdGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcblx0XHRcdGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYnKVxyXG5cdFx0XHRlbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmlkID09PSBpZCl7XHJcblx0XHRcdFx0XHRsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdl9fbGlzdCcpWzBdXHJcblx0XHRcdFx0XHRtZW51LnN0eWxlLndpZHRoID0gXCIxMDAlXCJcclxuXHRcdFx0XHRcdGJvZHkuc3R5bGUub3ZlcmZsb3dZID0gXCJoaWRkZW5cIlxyXG5cdFx0XHRcdFx0cGFyZW50LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiXHJcblxyXG5cdFx0XHRcdFx0bWVudS5zdHlsZS5vdmVyZmxvd1ggPSBcImhpZGRlblwiXHJcblx0XHRcdFx0XHRwYXJlbnQuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCJcclxuXHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHRcclxuXHRmdW5jdGlvbiBjbG9zZU1lbnUoaWQpIHtcclxuXHRcdGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXHJcblx0XHRsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG5cdFx0bGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdicpXHJcblx0XHRlbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRpZiAodGhpcy5pZCA9PT0gaWQpe1xyXG5cdFx0XHRcdGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2X19saXN0JylbMF1cclxuXHRcdFx0XHRtZW51LnN0eWxlLndpZHRoID0gXCIwXCJcclxuXHRcdFx0XHRib2R5LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiXHJcblx0XHRcdFx0Ym9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImF1dG9cIlxyXG5cdFx0XHRcdHBhcmVudC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxyXG5cdFx0XHRcdG1lbnUuc3R5bGUub3ZlcmZsb3dYID0gXCJoaWRkZW5cIlxyXG5cdFx0XHRcdGZ1bmN0aW9uIGRpc2FibGVIZWlnaHQoKSB7XHJcblx0XHRcdFx0XHRcdHBhcmVudC5zdHlsZS5oZWlnaHQgPSBcIjBcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzZXRUaW1lb3V0KGRpc2FibGVIZWlnaHQsIDUwMClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRcclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgXHRcdFx0JCgnLnNlY29uZC1zbGlkZXJfX2luaXQnKS5zbGljayh7XHJcbiAgXHRcdFx0XHRwcmV2QXJyb3c6JzxidXR0b24gYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgY2xhc3M9XCJzZWNvbmQtc2xpZGVyX19wcmV2XCI+PC9idXR0b24+JyxcclxuICAgICAgXHRcdFx0bmV4dEFycm93Oic8YnV0dG9uIGFyaWEtbGFiZWw9XCJOZXh0XCIgY2xhc3M9XCJzZWNvbmQtc2xpZGVyX19uZXh0XCI+PC9idXR0b24+JyxcclxuICAgIFx0XHRcdCBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIFx0XHRcdCBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICBcdFx0XHQgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBcdFx0XHQgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgIFx0XHRcdCByZXNwb25zaXZlOiBbe1xyXG5cdFx0XHRcdFx0ICAgIGJyZWFrcG9pbnQ6IDExOTksXHJcblx0XHRcdFx0XHRcdHNldHRpbmdzOiB7XHJcblx0XHRcdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHRcdFx0XHRcdGluZmluaXRlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGNlbnRlck1vZGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0YXJyb3dzOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRkb3RzOiB0cnVlXHJcblx0XHRcdFx0ICAgIFx0fX0se1xyXG5cdFx0XHRcdCAgICBcdGJyZWFrcG9pbnQ6IDEyMzYsXHJcblx0XHRcdFx0ICAgIFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHQgICAgXHRcdGFycm93czogZmFsc2VcclxuXHRcdFx0XHQgICAgXHR9XHJcblx0XHRcdFx0ICAgfV1cclxuICBcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0JCgnLm1haW4tc2xpZGVyX19pbml0Jykuc2xpY2soe1xyXG5cdHByZXZBcnJvdzogJy5tYWluLXNsaWRlcl9fcHJldmhyeicsXHJcblx0bmV4dEFycm93OiAnLm1haW4tc2xpZGVyX19uZXh0aHJ6JyxcclxuXHRyZXNwb25zaXZlOiBbe1xyXG5cdFx0YnJlYWtwb2ludDogMTE5OSxcclxuXHRcdHNldHRpbmdzOiB7XHJcblx0XHRcdGRvdHM6IHRydWUsXHJcblx0XHRcdGFycm93czogZmFsc2VcclxuXHRcdH19LFxyXG5cdFx0e1xyXG5cdFx0XHRicmVha3BvaW50OiAxMjAwLFxyXG5cdFx0XHRzZXR0aW5nczoge1xyXG5cdFx0XHRcdHByZXZBcnJvdzogJy5tYWluLXNsaWRlcl9fcHJldmhyeicsXHJcblx0XHRcdFx0bmV4dEFycm93OiAnLm1haW4tc2xpZGVyX19uZXh0aHJ6JyxcclxuXHRcdFx0XHRkb3RzOiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9XVxyXG5cdH0pIl19
