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
	
})