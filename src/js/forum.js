$(document).ready(function(){



	// scroll magic效果
			// var controller = new ScrollMagic.Controller();
			// var pinSubNav = new ScrollMagic.Scene({
			// 	triggerElement:'#f_section2',
			// 	triggerHook:0,
			
			// })

			// .setPin('#f_section2')
			// .addTo(controller);

			// var aaTop = $('#f_section2').offset().top;
	

	


		//popular box hover effect

		$('.pop-box').hover(function(){
			// alert('123')
			$(this).addClass('hover')
			$(this).siblings().addClass('fblur')
		},function(){
			$(this).removeClass('hover')
			$(this).siblings().removeClass('fblur')

		})


		//貼文內容切換
		$('.ff_post').click(function(e){
			e.preventDefault();
			$('.f_posts').fadeOut(1000);
			$('.post_text').delay(1000).fadeIn(1000);

		})

		$('#f_tab1').click(function(){
			$('.post_text').fadeOut(1000);
			$('.f_posts-1').delay(1000).fadeIn(1000);
		})




			
})

