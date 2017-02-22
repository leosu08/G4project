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
	

	// lightbox效果--主題被點擊後，lightbox跳出
		$('.ff_lightbox_link').click(function(){
			$('.ff_lightbox').css('display','block')
			// alert('ok');
		});

		$('#close-btn').click(function(){
			$('.ff_lightbox').css('display','none')
		})


		//popular box hover effect

		$('.pop-box').hover(function(){
			// alert('123')
			$(this).addClass('hover')
			$(this).siblings().addClass('fblur')
		},function(){
			$(this).removeClass('hover')
			$(this).siblings().removeClass('fblur')

		})

		//lightbox close-btn
		$('#close-btn').hover(function(){
			$('#closeIt').css({
				color: '#ffc889',
				opacity: '1'
			});
			$('.closeIco').attr({
				src: 'img/close2.svg'
			});
		},function(){
			$('#closeIt').css({
				color: 'white',
				opacity: '1'
			});
			$('.closeIco').attr({
				src: 'img/close.svg'
			});
		})



			
})

