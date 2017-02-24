$(function(){
	// $('#a-phone-mapBtn').click(function(){
	// 	$('.a-map').css({
	// 		'display':'block'
	// 	});
	// 	// initAutocomplete();
	// })	
	$('#a-phone-input_1').focus(function(){
		$('#a-phone-input_1').hide();
		$('.fa-chevron-up').slideDown(500).css({
			'display':'block'
		});

		$('.a-phone-input').slideDown();
		$('.fa-search').hide();

	})
	$('.fa-chevron-up').click(function(){
		$('.a-phone-input').hide();
		$('.fa-chevron-up').hide();
		$('#a-phone-input_1').slideDown();
		$('.fa-search').slideDown();
	})
	$('#turnOff').click(function(){
		console.log("click");
		$.fn.fullpage.setAllowScrolling(false);
  		
	})

	
	// $('.a-add-put-p1').css('opacity','0');
	// $('.a-add-put-p2').css('opacity','0');
	// $('.a-add-put-p3').css('opacity','0');
	// $('.a-add-put-p4').css('opacity','0');

	
$('#a-add-q1').mouseover(function(){
		$('.a-add-put-p1').stop(true,false).fadeTo(1000,'1');
		$('.a-add-p').not(".a-add-put-p1").fadeTo(1,'0');
	})
$('#a-add-q2').mouseover(function(){
		$('.a-add-put-p2').stop(true,false).fadeTo(1000,'1');
		$('.a-add-p').not(".a-add-put-p2").fadeTo(1,'0');
	})
$('#a-add-q3').mouseover(function(){
		$('.a-add-put-p3').stop(true,false).fadeTo(1000,'1');
		$('.a-add-p').not(".a-add-put-p3").fadeTo(1,'0');
	})
$('#a-add-q4').mouseover(function(){
		$('.a-add-put-p4').stop(true,false).fadeTo(1000,'1');
		$('.a-add-p').not(".a-add-put-p4").fadeTo(1,'0');
	})

$('#a-slide-1 ul li:first-child').mouseover(function(){
		// console.log('over');
		$('#a-ast-ini2').stop(true,false).fadeTo(1,'1');
		$('#a-ast-ini1').fadeTo(1,'0');
	})
$('#a-slide-1 ul li:first-child').mouseleave('test',function(){
		// console.log('over');
		$('#a-ast-ini1').stop(true,false).fadeTo(1,'1');
		$('#a-ast-ini2').fadeTo(1,'0');
	})
$('#a-slide-1 ul li:first-child').click(function(){
		// console.log('over');
		$('#a-ast-ini2').stop(true,false).fadeTo(1,'1');
		$('#a-ast-ini1').fadeTo(1,'0');
		$(this).unbind('mouseleave');
	})
$('#a-slide-1 ul li:nth-child(2)').mouseover(function(){
		// console.log('over');
		$('#a-ast-pro2').stop(true,false).fadeTo(1,'1');
		$('#a-ast-pro1').fadeTo(1,'0');
	})
$('#a-slide-1 ul li:nth-child(2)').mouseleave('test',function(){
		// console.log('over');
		$('#a-ast-pro1').stop(true,false).fadeTo(1,'1');
		$('#a-ast-pro2').fadeTo(1,'0');
	})
$('#a-slide-1 ul li:nth-child(2)').click(function(){
		// console.log('over');
		$('#a-ast-pro2').stop(true,false).fadeTo(1,'1');
		$('#a-ast-pro1').fadeTo(1,'0');
		$(this).unbind('mouseleave');
	})

				
	
})//window.function