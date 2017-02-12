$(document).ready(function(){



	// scroll magic效果
			var controller = new ScrollMagic.Controller();
			var pinSubNav = new ScrollMagic.Scene({
				triggerElement:'#f_section2',
				triggerHook:0,
			})

			.setPin('#f_section2')
			.addTo(controller);

			var aaTop = $('#f_section2').offset().top;
	

	// lightbox效果--主題被點擊後，lightbox跳出
		$('.f_post_link').click(function(){
			$('#f_lightbox').css('display','block')
			// alert('ok');
		});

		$('#f_lightbox_close').click(function(){
			$('#f_lightbox').css('display','none')
		})



			
})

