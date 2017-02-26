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
//打開燈箱
		$('.m_info').click(function(){
			$('.m_lightbox_area').css('transform','scale(1)')
			// alert('ok');
		});

		$('#m_close_id').click(function(){
			$('.m_lightbox_area').css('transform','scale(0)')
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


$(function(){
	// 預設顯示第一個頁籤
	// 並先把 .tabs, .tabs li 及 .tab_content, .tab_content li 等元素取出
	// 同時也要取得 .tab_content 的寬
	var _default = 0, 
		$block = $('.lightbox_content'), 
		$tabs = $block.find('.m_sub_tab'), 
		$tabsLi = $tabs.find('li'), 
		$tab_content = $block.find('.m_tab_content'), 
		$tab_contentLi = $tab_content.find('li'), 
		_width = $tab_content.width();

 
	// 當滑鼠移到 .tabs li 上時要套用 .hover 樣式
	// 移出時要移除 .hover 樣式
	$tabsLi.hover(function(){
		var $this = $(this);
 
		// 若被滑鼠移上去的 li 是目前顯示的頁籤就不做任何動作
		if($this.hasClass('active')) return;
 
		$this.toggleClass('hover');
	}).click(function(){	// 當滑鼠點擊 .tabs li 時
		// 先取出被點擊及目前顯示的頁籤與索引
		var $active = $tabsLi.filter('.active').removeClass('active'), 
			_activeIndex = $active.index(),  
			$this = $(this).addClass('active').removeClass('hover'), 
			_index = $this.index(), 
			isNext = _index > _activeIndex;
 
		// 如果被點擊的頁籤就是目前已顯示的頁籤, 則不做任何動作
		if(_activeIndex == _index) return;
 
		// 依索引大或小來決定移動的位置
		$tab_contentLi.eq(_activeIndex).stop().animate({
			left: isNext ? -_width : _width
		}).end().eq(_index).css('left', isNext ? _width : -_width).stop().animate({
			left: 0
		});
		// console.log(isNext);
	});
 
	// 先把預設要顯示的頁籤加上 .active 樣式及顯示相對應的內容
	$tabsLi.eq(_default).addClass('active');
	$tab_contentLi.eq(_default).siblings().css({
		left: _width
	});
});

$(function(){
	// 預設顯示第一個頁籤
	// 並先把 .tabs, .tabs li 及 .tab_content, .tab_content li 等元素取出
	// 同時也要取得 .tab_content 的寬
	var _default = 0, 
		$block = $('.lightbox_content'), 
		$tabs = $block.find('.m_sub_tab1'), 
		$tabsLi = $tabs.find('li'), 
		$tab_content = $block.find('.m_tab_content1'), 
		$tab_contentLi = $tab_content.find('li'), 
		_width = $tab_content.width();

 
	// 當滑鼠移到 .tabs li 上時要套用 .hover 樣式
	// 移出時要移除 .hover 樣式
	$tabsLi.hover(function(){
		var $this = $(this);
 
		// 若被滑鼠移上去的 li 是目前顯示的頁籤就不做任何動作
		if($this.hasClass('active')) return;
 
		$this.toggleClass('hover');
	}).click(function(){	// 當滑鼠點擊 .tabs li 時
		// 先取出被點擊及目前顯示的頁籤與索引
		var $active = $tabsLi.filter('.active').removeClass('active'), 
			_activeIndex = $active.index(),  
			$this = $(this).addClass('active').removeClass('hover'), 
			_index = $this.index(), 
			isNext = _index > _activeIndex;
 
		// 如果被點擊的頁籤就是目前已顯示的頁籤, 則不做任何動作
		if(_activeIndex == _index) return;
 
		// 依索引大或小來決定移動的位置
		$tab_contentLi.eq(_activeIndex).stop().animate({
			left: isNext ? -_width : _width
		}).end().eq(_index).css('left', isNext ? _width : -_width).stop().animate({
			left: 0
		});
		// console.log(isNext);
	});
 
	// 先把預設要顯示的頁籤加上 .active 樣式及顯示相對應的內容
	$tabsLi.eq(_default).addClass('active');
	$tab_contentLi.eq(_default).siblings().css({
		left: _width
	});
});

$(function(){
	$('.m_sub_nav li').click(function(){
		$('.m_sub_nav li').removeClass('selected');
		$(this).addClass('selected');	
	});

	// $('.myInfo').click(function(){
	// 	$('.m_id').css({
	// 		'display':'block'
	// 	}).siblings().css({
	// 		'display':'none'
	// 	});
	// })
	$('.myInfo').click(function(){
		$('.m_id').fadeIn(1000).siblings().fadeOut(1000);
	})

	// $('.myAct').click(function(){
	// 	$('.m_activity').css({
	// 		'display':'block'
	// 	}).siblings().css({
	// 		'display':'none'
	// 	});
	// })
	$('.myAct').click(function(){
		$('.m_activity').slideDown(1000).siblings().slideUp(1000);
	})
	$('.myPost').click(function(){
		$('.m_posts').slideDown(1000).siblings().slideUp(1000);
	})

	// $('.myPost').click(function(){
	// 	$('.m_posts').css({
	// 		'display':'block'
	// 	}).siblings().css({
	// 		'display':'none'
	// 	});
	// })
});
