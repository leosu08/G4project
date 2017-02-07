$(document).ready(function(){

		

	// scroll magic效果
			// var controller = new ScrollMagic.Controller();
			// var pinSubNav = new ScrollMagic.Scene({
			// 	triggerElement:'.f_desc',
			// 	triggerHook:0,

				
			// })

			// .setPin('#f_section1', {
	  //           pushFollowers: false
	  //       })

	  //       .addIndicators()
			// .addTo(controller);

	// lightbox效果--主題被點擊後，lightbox跳出
		$('.f_post_link').click(function(){
			$('#f_lightbox').css('display','block')
			// alert('ok');
		});

		$('#f_lightbox_close').click(function(){
			$('#f_lightbox').css('display','none')
		})



			
})

