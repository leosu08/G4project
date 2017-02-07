function doFirst(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	context.strokeStyle = "rgba(255, 255, 255, 1)";

	context.clearRect(0, 0, canvas.width, canvas.height);
	
	//點1
	context.beginPath();
	context.arc(400, 50, 8, 0, 2*Math.PI, false);
	context.fillStyle = "rgba(255, 255, 255, 1)";
	context.fill();
	context.closePath;

	//點2
	context.beginPath();
	context.arc(900, 140, 8, 0, 2*Math.PI, false);
	// context.fillStyle = "rgba(78, 104, 162, 1)";
	context.fillStyle = "rgba(255, 255, 255, 1)";
	context.fill();
	context.closePath;

	//點3
	context.beginPath();
	context.arc(400, 450, 8, 0, 2*Math.PI, false);
	// context.fillStyle = "rgba(78, 104, 162, 0.8)";
	context.fillStyle = "rgba(255, 255, 255, 1)";
	context.fill();
	context.closePath;

	//點4
	context.beginPath();
	context.arc(1000, 300, 8, 0, 2*Math.PI, false);
	// context.fillStyle = "rgba(78, 104, 162, 0.8)";
	context.fillStyle = "rgba(255, 255, 255, 1)";
	context.fill();
	context.closePath;

	//點5
	context.beginPath();
	context.arc(900, 450, 8, 0, 2*Math.PI, false);
	// context.fillStyle = "rgba(78, 104, 162, 0.8)";
	context.fillStyle = "rgba(255, 255, 255, 1)";
	context.fill();
	context.closePath;

	//點6
	context.beginPath();
	context.arc(400, 50, 8, 0, 2*Math.PI, false);
	// context.fillStyle = "rgba(78, 104, 162, 0.8)";
	context.fillStyle = "rgba(255, 255, 255, 1)";
	context.fill();
	context.closePath;

	//lines
	context.beginPath();
	context.moveTo(400,50);
	context.lineTo(900,140);
	context.lineTo(400,450);
	context.lineTo(1000,300);
	context.lineTo(900,450);
	context.lineTo(400,50);
	context.closePath();
	context.stroke();


}

window.onload=doFirst;




$(document).ready(function(){
//會員帳號
		$('.m_info_id').click(function(){
			$('#m_lightbox_id').css('display','block')
			// alert('ok');
		});

		$('#m_close_id').click(function(){
			$('#m_lightbox_id').css('display','none')
		})
//活動
		$('.m_info_activity').click(function(){
			$('#m_lightbox_activity').css('display','block')
			// alert('ok');
		});

		$('#m_close_activity').click(function(){
			$('#m_lightbox_activity').css('display','none')
		})

//貼文

		$('.m_info_forumpost').click(function(){
			$('#m_lightbox_post').css('display','block')
			// alert('ok');
		});

		$('#m_close_post').click(function(){
			$('#m_lightbox_post').css('display','none')
		})

})

//會員頭像移動
$(document).ready(function(){
	// 先抓到滑鼠的座標


	$(document).mouseover(function(e){
		
		

		var position = $('.m_user_img').offset();
		var imgX = position.left;
		var imgY = position.top;

		var X = (e.clientX-imgX)*0.05+'px';
		var Y = (e.clientY-imgY)*0.05+'px';



		// alert(X+' '+Y);

		$('.m_user_img').css({
			'transform':'translate('+X+','+Y+')'
		})

		// var position = $('.m_user_lv').offset();
		// var lvX = position.left;
		// var lvY = position.top;

		// var X1 = (e.clientX-imgX)*0.001+'px';
		// var Y2 = (e.clientY-imgY)*0.001+'px';

		// 	$('.m_user_lv').css({
		// 	'transform':'translate('+X+','+Y+')'
		// })




	})

	$('#particles-js').css({
		// 'transform':'scale(1,1)',
		'opacity':'1'
	})

	$('#canvas').css({
		// 'transform':'scale(1,1)',
		'opacity':'1'
	})
})

