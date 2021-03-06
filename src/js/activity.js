$(function(){ 


/*=====================================
            消除placeHolder
    =======================================*/
$("#act_name").focus(function(){
  $("#act_name").attr('placeholder','');
}).blur(function(){
  $("#act_name").attr('placeholder','請輸入活動名稱');
})

$("#a-add-mapInput").focus(function(){
  $("#a-add-mapInput").attr('placeholder','');
}).blur(function(){
  $("#a-add-mapInput").attr('placeholder','請輸入地點');
})


/*=====================================
            表單驗證
    =======================================*/
$('#a-add-next1').click(function(e){
  console.log($(this).index());
  e.preventDefault();
  if($("#act_name").val()==""){
    alert("請輸入活動名稱");
    $("#act_name").focus();
  }else if($("#a-add-mapInput").val()==""){
    alert("請輸入地點");
    $("#a-add-mapInput").focus();
  }
  else{
    $.fn.fullpage.moveSectionDown();
    
  }
});

actCla_no="";
$('#a-add-next2').click(function(e){
 console.log($(this).index());
 if($("#a-timePicker2").val()==""){
    alert("請選擇時間");
 }else{
    $.fn.fullpage.moveSectionDown();
 }  
});
$('#a-add-next3').click(function(e){
  e.preventDefault();
  if(actCla_no==""){
    alert("請選擇類型");
  }else{
    $.fn.fullpage.moveSectionDown();
  }
});
/*=====================================
            顯示/隱藏日曆
    =======================================*/
  $('#multiple').hide();
  $('#a-add-mutiple1').focus(function(){
    $('#multiple').show().css({
      'position':'fixed',
      'top':'0',
      'left':0,
      'right':0,
      'bottom':0,
      'width':'320px',
      'height':'320px',
      'z-index':20
    });
  });
  $('input.calendar').pignoseCalendar({
    format: 'YYYY-MM-DD' // date format string. (2017-02-02)
  });
  $('body').click(function(evt) {
        // console.log($(evt.target).parents("#multiple").length);
              if($(evt.target).parents("#multiple").length==0 && 
                  evt.target.id != "a-date-control" && evt.target.class != "calendar-dark") {
                  $('#multiple').hide();

              }
          });

    $('#a-add-q1').mouseover(function(){
    $('.a-add-put-p1').stop(true,false).fadeTo(1000,'1');
    $('.a-add-p').not(".a-add-put-p1").fadeTo(1,'0');
    actCla_no=1;
    console.log(actCla_no);
  })
$('#a-add-q2').mouseover(function(){
    $('.a-add-put-p2').stop(true,false).fadeTo(1000,'1');
    $('.a-add-p').not(".a-add-put-p2").fadeTo(1,'0');
    actCla_no=2;
    console.log(actCla_no);
  })
$('#a-add-q3').mouseover(function(){
    $('.a-add-put-p3').stop(true,false).fadeTo(1000,'1');
    $('.a-add-p').not(".a-add-put-p3").fadeTo(1,'0');
    actCla_no=3;
    console.log(actCla_no);
  })
$('#a-add-q4').mouseover(function(){
    $('.a-add-put-p4').stop(true,false).fadeTo(1000,'1');
    $('.a-add-p').not(".a-add-put-p4").fadeTo(1,'0');
    actCla_no=4;
    console.log(actCla_no);
  })//mouseover
/*=====================================
            act_class mouseover
    =======================================*/
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


/*=====================================
            手機板的input縮放
    =======================================*/
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

/*=====================================
            日期和時間
    =======================================*/
$('#wrapper .version strong').text('v' + pignoseCalendar.VERSION);
function onClickHandler(date, obj) {
      /**
       * @date is an array which be included dates(clicked date at first index)
       * @obj is an object which stored calendar interal data.
       * @obj.calendar is an element reference.
       * @obj.storage.activeDates is all toggled data, If you use toggle type calendar.
       */

      var $calendar = obj.calendar;
      var $box = $calendar.parent().siblings('.box').show();
      text = '';
     text2 = '';

      if(date[0] !== null) {
        text += date[0].format('YYYY-MM-DD');

        $('#a-add-phoneDate').html(
          '<div class="a-text">活動日期</div>'+
          '<div  class="btn-calendar btn-lg btn-blue" style="line-height: 38px">選擇日期'+
          '</div><div class="a-add-content" id="a-dateTime3">'+
          '</div><input type="text" id="a-timePicker3" name="" value="" placeholder="" class="a-add-timePicker element2">'+
          '<div class="a-add-content">'
          );
        $('#a-timePicker3').timepicker({ 'timeFormat': 'h:i A' });
        // $('#a-timePicker').timepicker('option', { useSelect: true });
        $('#a-timePicker3').val('09:00PM');
        $('#a-timePicker3').on('changeTime', function() {
            $('#a-time').text($(this).val());
        
        });
        $('.btn-calendar').pignoseCalendar({
          modal: true, // It means modal will be showed when you click the target button.
          lang: 'ch',
          theme: 'dark',
          multiple: true,
          buttons: true,
          select: onClickHandler
        });
      }

      if(date[0] !== null && date[1] !== null) {
        text += '';
        $('#a-add-phoneDate').html(
          '<div class="a-text">活動日期</div><div  class="btn-calendar btn-lg btn-blue" style="line-height: 38px">選擇日期'+
          '</div><div class="a-add-content" id="a-dateTime3">'+
          '</div><input type="text" id="a-timePicker3" name="" value="" placeholder="" class="a-add-timePicker element2">'+
          '<div class="a-add-content">到</div><div class="a-add-content" id="a-dateTime4"> </div>'+
          '<input type="text" id="a-timePicker4" name="" value="" placeholder="" class="a-add-timePicker element2"> '
          );
        $('#a-timePicker3').timepicker({ 'timeFormat': 'h:i A' });
        // $('#a-timePicker').timepicker('option', { useSelect: true });
        $('#a-timePicker3').val('09:00PM');
        $('#a-timePicker3').on('changeTime', function() {
            $('#a-time').text($(this).val());
        
        });
        $('#a-timePicker4').timepicker({ 'timeFormat': 'h:i A' });
        // $('#a-timePicker').timepicker('option', { useSelect: true });
        
        $('#a-timePicker4').on('changeTime', function() {
            $('#a-time').text($(this).val());
        
        });
        $('.btn-calendar').pignoseCalendar({
          modal: true, // It means modal will be showed when you click the target button.
          lang: 'ch',
          theme: 'dark',
          multiple: true,
          buttons: true,
          select: onClickHandler
        });
      } else if(date[0] === null && date[1] == null) {
        text += '';
      }
      if(date[1] == null){
        $('#a-timePicker4').val('');
      }
      if(date[1] !== null) {
        text2 = date[1].format('YYYY-MM-DD'); 
        $('#a-timePicker4').val('09:00:00');
      }

      $box.text(text);
      console.log(text);
      $('#a-dateTime').text(text);
      $('#a-dateTime2').text(text2);
      $('#a-dateTime3').text(text);
      $('#a-dateTime4').text(text2);

     
    }

    // Default Calendar
    $('.calendar').pignoseCalendar({
      select: onClickHandler
    });

    // Input Calendar
    $('.input-calendar').pignoseCalendar({
      buttons: true,
      lang: 'ch',
      theme: 'dark',
      multiple: true
       // It means you can give bottom button controller to the modal which be opened when you click.
    });

    // Calendar modal
    var $btn = $('.btn-calendar').pignoseCalendar({
      modal: true, // It means modal will be showed when you click the target button.
      lang: 'ch',
      theme: 'dark',
      multiple: true,
      buttons: true,
      select: onClickHandler 
      // apply: function(date) {
      //   console.log('You applied date ' + date + '.');
      //   $btn.next().show().text('You applied date ' + date + '.');
      // }
    });

    // Color theme type Calendar
    $('.calendar-dark').pignoseCalendar({
      theme: 'dark', // light, dark
      select: onClickHandler,
      lang: 'ch',
      multiple: true,
      select: function(dates, obj) {
      console.log('toggle active dates', obj.storage.activeDates);

      },
      select: onClickHandler    
    });

    // Multiple picker type Calendar
    $('.multi-select-calendar').pignoseCalendar({
      multiple: true,
      select: onClickHandler
    });

    // Toggle type Calendar
    $('.toggle-calendar').pignoseCalendar({
      toggle: true,
      select: function(date, obj) {
        var $target = obj.calendar.parent().next().show().html('You selected ' + 
        (date[0] === null? 'null':date[0].format('YYYY-MM-DD')) + 
        '.' +
        '<br /><br />' +
        '<strong>Active dates</strong><br /><br />' +
        '<div class="active-dates"></div>');

        for(var idx in obj.storage.activeDates) {
          var date = obj.storage.activeDates[idx];
          if(typeof date !== 'string') {
            continue;
          }
          $target.find('.active-dates').append('<span class="ui label default">' + date + '</span>');
        }
      }
    });

    // Disabled date settings.
    !(function() {
      // IIFE Closure
      var times = 30;
      var disabledDates = [];
      for(var i=0; i<times; /* Do not increase index */) {
        var year = moment().year();
        var month = 0;
        var day = parseInt(Math.random() * 364 + 1);
        var date = moment().year(year).month(month).date(day).format('YYYY-MM-DD');
        if($.inArray(date, disabledDates) === -1) {
          disabledDates.push(date);
          i++;
        }
      }

      disabledDates.sort();

      var $dates = $('.disabled-dates-calendar').siblings('.guide').find('.guide-dates');
      for (var idx in disabledDates) {
        $dates.append('<span>' + disabledDates[idx] + '</span>');
      }

      $('.disabled-dates-calendar').pignoseCalendar({
        select: onClickHandler,
        disabledDates: disabledDates
      });
    } ());

    // Disabled Weekdays Calendar.
    $('.disabled-weekdays-calendar').pignoseCalendar({
      select: onClickHandler,
      disabledWeekdays: [0, 6]
    });

    // Disabled Range Calendar.
    var minDate = moment().set('dates', Math.min(moment().day(), 2 + 1)).format('YYYY-MM-DD');
    var maxDate = moment().set('dates', Math.max(moment().day(), 24 + 1)).format('YYYY-MM-DD');
    $('.disabled-range-calendar').pignoseCalendar({
      select: onClickHandler,
      minDate: minDate,
      maxDate: maxDate
    });

    // Multiple Week Select
    $('.pick-weeks-calendar').pignoseCalendar({
      pickWeeks: true,
      multiple: true,
      select: onClickHandler
    });

    // Disabled Ranges Calendar.
    $('.disabled-ranges-calendar').pignoseCalendar({
      select: onClickHandler,
      disabledRanges: [
        ['2016-10-05', '2016-10-21'],
        ['2016-11-01', '2016-11-07'],
        ['2016-11-19', '2016-11-21'],
        ['2016-12-05', '2016-12-08'],
        ['2016-12-17', '2016-12-18'],
        ['2016-12-29', '2016-12-30'],
        ['2017-01-10', '2017-01-20'],
        ['2017-02-10', '2017-04-11'],
        ['2017-07-04', '2017-07-09'],
        ['2017-12-01', '2017-12-25'],
        ['2018-02-10', '2018-02-26'],
        ['2018-05-10', '2018-09-17'],
      ]
    });

    // I18N Calendar
    $('.language-calendar').each(function() {
      var $this = $(this);
      var lang = $this.data('lang');
      $this.pignoseCalendar({
        lang: lang
      });
    });

    // This use for DEMO page tab component.
    $('.menu .item').tab();

    $('#a-timePicker1').timepicker({ 'timeFormat': 'H:i:s' });
    // $('#a-timePicker').timepicker('option', { useSelect: true });
    $('#a-timePicker1').val('21:00:00');
    $('#a-timePicker1').on('changeTime', function() {
        $('#a-time').text($(this).val());

    });

    $('#a-timePicker2').timepicker({ 'timeFormat': 'H:i:s' });
    // $('#a-timePicker').timepicker('option', { useSelect: true });
    $('#a-timePicker2').val('');
    $('#a-timePicker2').on('changeTime', function() {
        $('#a-time').text($(this).val());
    
    });
    $('.a-add-timePicker').click(function(){
      $('.ui-timepicker-wrapper').addClass('element1');
    })
    
$('#a-add-next5').click(function(){
  var time1=document.getElementById("a-timePicker1").value;
  var time2=document.getElementById("a-timePicker2").value;
  var date1=document.getElementById("a-dateTime").value;
  var date2=document.getElementById("a-dateTime2").value;
  var act_limit = document.getElementById("act_limit").value;
  var act_price = document.getElementById("act_price").value;
  var act_name = document.getElementById("act_name").value;
  var act_place = document.getElementById("a-add-mapInput").value;
  var act_info = document.getElementById("act_info").value;

  var act_startDate = date1+" "+time1;
  var act_endDate = date2+" "+time2;
  var act_limit = act_limit; 


  $('#a-add-act_name').text(act_name);
  $('#a-add-act_startDate').text(act_startDate);
  $('#a-add-act_endDate').text(act_endDate);
  $('#a-add-act_price').text(act_price);
  $('#a-add-act_info').text(act_info);
  $('#a-add-act_class').text(actCla_no);
  $('#a-add-act_place').text(act_place);
})


});//window.function


/*=====================================
            圖片同步顯示
    =======================================*/
document.getElementById('act_img').onchange = fileChange();   
function fileChange(){
    var file = document.getElementById('act_img').files[0];
    var fileName = file.name;
    /*=====================================
                fileReader
        =======================================*/
    //要new 一個FileReader
    var readFile = new FileReader();

    //以DataURL格式回傳結果，讀取圖檔和影片都使用此方法
    readFile.readAsDataURL(file);
    readFile.addEventListener('load',function(){
        var image = document.getElementById('a-add-imgShow');
        //.src是HTML的屬性
        //result是讀取到的內容
       
        image.src = readFile.result;
        //HTML不用加單位
        //EX:image.width=400;
        //css的屬性需要加單位
        image.style.maxWidth='100%';
        image.style.maxHeight = '100%';    
},false);

}//fileChange end 圖片同步顯示


/*=====================================
		ajax sendForm	upfile            
=======================================*/	
function sendForm(){
  
  var time1=document.getElementById("a-timePicker1").value;
  var time2=document.getElementById("a-timePicker2").value;

  var act_limit = document.getElementById("act_limit").value;
  var act_price = document.getElementById("act_price").value;
  var act_name = document.getElementById("act_name").value;
  var act_place = document.getElementById("a-add-mapInput").value;
  var act_info = document.getElementById("act_info").value;

  var act_startDate = text+" "+time1;
  var act_endDate = text2+" "+time2;
  var act_limit = act_limit;
  var act_img = document.getElementById("act_img").value;
  console.log(act_startDate);
  console.log("act_img",act_img);


  console.log("actCla_no",actCla_no);
  var xhr = new XMLHttpRequest();
  var url = "php/activity_addACT.php";
  xhr.open("Post",url,true);
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  var data_info = "act_name="+act_name+"&act_place="+act_place+"&act_startDate="+act_startDate+"&act_endDate="+act_endDate+"&act_limit="+act_limit+"&act_price="+act_price+"&actCla_no="+actCla_no+"&act_info="+act_info+"&act_img="+act_img;
  xhr.send(data_info);
  xhr.onreadystatechange = function(){
      if(xhr.readyState == 4){
        if(xhr.status == 200){
          if(xhr.respondeText == "Fail"){
            //帳密錯誤
            //顯示 帳密錯誤 訊息
             alert("資料錯誤");
          }else{
            alert("成功");
            document.getElementById("a-bigTitle").innerHTML=xhr.responseText;
          }
          
                
        }else{
            alert(xhr.status);      
        }
      }
  }

};//sendForm end


/*=====================================
            圖片上傳ajax  Jquery
    =======================================*/
$('#a-se').click(function(){
    var fileSelect = document.getElementById('act_img');

    // Get the selected files from the input.
    
    var files = fileSelect.files;//It’s an array.

    // Create a new FormData object.

    var formData = new FormData();

    // Loop through each of the selected files.

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        // Check the file type.可利用type屬性篩選，這裡只取圖片
        if (!file.type.match('image.*')) {
            continue;
        }

        // Add the file to the request.這裡的第一個參數等於QueryString的name，第二個參數等於Value
        formData.append('upFile', file, file.name);

    }

    //接著可透過JQuery或是自己弄個XMLHttpRequest的方式Send Form

    //JQuery
    $.ajax({
        url: 'AjaxJquery.php',//php,jsp and etc..
        type: 'POST',
        data: formData,
        cache: false,
        // dataType: "binary",
        async: false,
        processData: false, // Don't process the files
        contentType: false, // Set content type to false as jQuery will tell the server its a query string request
        success: function(data, textStatus, jqXHR) {
            // Handle errors here
            console.log('Success: ' + textStatus);
            //STOP LOADING SPINNER

        },

        error: function(jqXHR, textStatus, errorThrown) {
            // Handle errors here
            console.log('Errors: ' + textStatus);
            // STOP LOADING SPINNER
        }

    });



    //XMLHttpRequest
    // Set up the request.
    // var xhr = new XMLHttpRequest();

    // // Open the connection.
    // xhr.open('POST', 'AjaxJquery.php', true);

    // // Set up a handler for when the request finishes.
    // xhr.onload = function () {

    //     if (xhr.status === 200) {
    //         // File(s) uploaded.
    //          //uploadButton.innerHTML = 'Upload';
    //         alert('Upload Success!');

    //     } else {
    //         alert('An error occurred!');
    //     }
    // };

    // // Send the Data.
    // xhr.send(formData);   


})//upData function end

	

	
