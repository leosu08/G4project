$(function(){

    var _liLeng = $('#adminNav li').length;
    for(var i = 0 ; i < _liLeng ; i++){
      $('.adminMenu li:eq('+ i +')').click(function(){
        $(this).addClass('show').siblings().removeClass('show');
        var a = $(this).index();
          $('#view table:eq('+ a +')').animate({'left':'0'},500).siblings().animate({'left':'200%'},500);
      })

    }

})
