$(function(){
	// $('#a-phone-mapBtn').click(function(){
	// 	$('.a-map').css({
	// 		'display':'block'
	// 	});
	// 	// initAutocomplete();
	// })	
	$('#a-phone-input_1').focus(function(){
		$('#a-phone-input_1').hide();
		$('.fa-chevron-up').show(500).css({
			'display':'block'
		});

		$('.a-phone-input').show();
		$('.fa-search').hide();

	})
	$('.fa-chevron-up').click(function(){
		$('.a-phone-input').hide();
		$('.fa-chevron-up').hide();
		$('#a-phone-input_1').show();
		$('.fa-search').show();
	})
})