$(document).ready(function(){

		// 一頁滾動效果fullpage.js

		// $('#fullpage').fullpage({
		// 	css3: true,
		//  scrollingSpeed: 700,
		//  autoScrolling: true,
		//  fitToSection: true,
		//  fitToSectionDelay: 50,
		//  scrollBar: true,
		//  easing: 'easeInOutCubic',
		//  easingcss3: 'ease',
		// });

	// scroll magic效果
			var controller = new ScrollMagic.Controller();
			var pinSubNav = new ScrollMagic.Scene({
				triggerElement:'#f_subnav',
				triggerHook:0,

				
			})

			.setPin('#f_subnav', {
	            pushFollowers: false
	        })
			.addTo(controller);

	// lightbox效果--主題被點擊後，lightbox跳出
		$('.f_post_link').click(function(){
			$('#f_lightbox').css('display','block')
			// alert('ok');
		});

		$('#f_lightbox_close').click(function(){
			$('#f_lightbox').css('display','none')
		})



			
})

