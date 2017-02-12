$(function() {
    var gallery = $(".gallery"),
    currdeg  = 0;

  $(".next").on("click", { name: "next" }, rotate);
  $(".prev").on("click", { name: "prev" }, rotate);

  function rotate(e){
  if(e.data.name=="next"){
    currdeg = currdeg - 45;
  }
  if(e.data.name=="prev"){
    currdeg = currdeg + 45;
  }
  gallery.css({
    "transform": "rotateY("+currdeg+"deg)"
  });
  }
    // if($(document).width() < 768){
    //   $('.act01').attr({'data-1000':'transform:scale(0) translate3d(-330px,-730px,-350px);opacity:0;','data-1160':'transform:scale(0.4) translate3d(0,0px,0);opacity:1;', 'data-1560':'transform:scale(0.6) translate3d(200px,0px,0);opacity:1', 'data-1660':'transform:scale(0.8) translate3d(300px,330px,0);opacity:0'});
    // }else{
    //   $('.act01').attr({'data-1000':'transform:scale(0) translate3d(-330px,-730px,-350px);opacity:0;','data-1160':'transform:scale(1) translate3d(0,0px,0);opacity:1;', 'data-1560':'transform:scale(1.2) translate3d(200px,0px,0);opacity:1', 'data-1660':'transform:scale(1.4) translate3d(300px,330px,0);opacity:0'});
    // }

    //漂浮
    if($(document).width()>= 768){
      var _forumLength = $('.forum').length;
      for (var i = 1; i <= _forumLength; i++) {
          if (i <= 3) {
              $('.forum' + i).css({
                  'top': rand(0, 45) + 'px',
                  'left': rand(50, 200) + (i - 1) * rand(470, 540) + 'px',
                  'animation': 'float' + rand(0, 4) + ' ' + (i + 5) + 's infinite alternate linear both'
              });
          } else if (i > 3 && i <= 6) {
              var _gap = rand(50, 200);
              var _forTop = rand(160, 225);
              var _forLeft = rand(510, 600);
              $('.forum' + i).css({
                  'top': _forTop + 'px',
                  'left': _gap + (i - 4) * _forLeft + 'px',
                  'animation': 'float' + rand(0, 4) + ' ' + (i + 3) + 's infinite alternate linear both'
              });
          } else if (i > 6 && i <= 10) {
              $('.forum' + i).css({
                  'top': rand(350, 395) + 'px',
                  'left': rand(50, 60) + (i - 7) * rand(390, 420) + 'px',
                  'animation': 'float' + rand(0, 4) + ' ' + i + 's infinite alternate linear both'
              });
          } else {
              $('.forum' + i).css({
                  'top': rand(480, 535) + 'px',
                  'left': rand(50, 60) + (i - 11) * rand(400, 420) + 'px',
                  'animation': 'float' + rand(0, 4) + ' ' + (i - 3) + 's infinite alternate linear both'
              });
          }
      }
    }




    //手風琴 hover
    if($(document).width()>= 768){
    $('#accordion > li').hover(
        function() {
            closeKnowTrans();
            clearInterval(knowClockOn);
            var $this = $(this);
            $this.removeClass('fakeCover');
            $this.stop().animate({
                'width': '480px'
            }, 500).css({
                'transform': 'scale(1.4)',
                'z-index': '2'
            });
            $('.heading', $this).stop(true, true).fadeOut();
            $('.knowDescription', $this).stop(true, true).slideDown(500);
            $('.pic', $this).stop(true, true).fadeIn();
            $('.description', $this).stop(true, true).fadeIn();
            $('.memberId', $this).stop(true, true).fadeIn(800);
        },
        function() {
            knowClockOn = setInterval(autoKnowTrans, 3000);
            var $this = $(this);
            $this.addClass('fakeCover');
            $this.stop().animate({
                'width': '215px'
            }, 500).css({
                'transform': 'scale(1)',
                'z-index': '0'
            });
            $('.heading', $this).stop(true, true).fadeIn();
            $('.pic', $this).stop(true, true).fadeOut();
            $('.description', $this).stop(true, true).fadeOut(500);
            $('.knowDescription', $this).stop(true, true).slideUp(700);
            $('.memberId', $this).stop(true, true).fadeOut();
        }
    );
}
    //手風琴輪播
    var knowClockOn = setInterval(autoKnowTrans, 3000);
    var _knowTransTimes = 1;

    function autoKnowTrans() {
        closeKnowTrans();
        if (_knowTransTimes > 5) {
            _knowTransTimes = 1;
        }
        $('.know' + _knowTransTimes).removeClass('fakeCover');
        if($(document).width()>= 768){
          $('.know' + _knowTransTimes).animate({
              'width': '480px'
          }, 500).css({
              'transform': 'scale(1.4)',
              'z-index': '2'
          });}
        else{
          $('.know' + _knowTransTimes).animate({
              'height': '480px'
          }, 500).css({
              'z-index': '2'
          });
        }
        $('.heading', '.know' + _knowTransTimes).stop(true, true).fadeOut();
        $('.knowDescription', '.know' + _knowTransTimes).stop(true, true).slideDown(500);
        $('.pic', '.know' + _knowTransTimes).stop(true, true).fadeIn();
        $('.description', '.know' + _knowTransTimes).stop(true, true).fadeIn();
        $('.memberId', '.know' + _knowTransTimes).stop(true, true).fadeIn(800);
      }

    function closeKnowTrans() {
      if($(document).width()>=768){
        $('.know' + _knowTransTimes).addClass('fakeCover');
        $('.know' + _knowTransTimes).stop().animate({
            'width': '220px'
        }, 500).css({
            'transform': 'scale(1)',
            'z-index': '0'
        });
        }else{  $('.know' + _knowTransTimes).stop().animate({
            'height': '220px'
        }, 500).css({
            'transform': 'scale(1)',
            'z-index': '0'
        });
      }
        $('.heading', '.know' + _knowTransTimes).stop(true, true).fadeIn();
        $('.pic', '.know' + _knowTransTimes).stop(true, true).fadeOut();
        $('.description', '.know' + _knowTransTimes).stop(true, true).fadeOut(500);
        $('.knowDescription', '.know' + _knowTransTimes).stop(true, true).slideUp(700);
        $('.memberId', '.know' + _knowTransTimes).stop(true, true).fadeOut();
        _knowTransTimes++;
    }



    //side效果
    $('.sideBar').hover(function() {
        var $this = $(this);
        // $('span', $this).stop(true, true).fadeIn();
        $this.css('color','#f1f1f1');
    }, function() {
        var $this = $(this);
        // $('span', $this).stop(true, true).fadeOut(500);
        $this.css('color','#9e9e9e');
    })


        _sideMoved01 = 50;
        _sideMoved02 = 50;
        _sideMoved03 = 50;
        _sideMoved04 = 50;
        _sideMoved05 = 50;

    $('.sideBar').click(function() {
        $(this).css({'transform':'translateX(-40px)'});
        $(this).siblings().css('transform','translateX(0px)');
        switch ($(this).attr('id')) {
            case 'sideBar1':
                  $(this).css({'color':'#f1f1f1'});
                clearCanvas();
                _sideMoved01 = 10;
                doFirst();
                break;
            case 'sideBar2':
                clearCanvas();
                _sideMoved02 = 10;
                doFirst();
                break;
            case 'sideBar3':
                clearCanvas();
                _sideMoved03 = 10;
                doFirst();
                break;
            case 'sideBar4':
                clearCanvas();
                _sideMoved04 = 10;
                doFirst();
                break;
            case 'sideBar5':
                clearCanvas();
                _sideMoved05 = 10;
                doFirst();
                break;
        }
    })

});



function rand(min, max) {
    result = min + (Math.floor(Math.random() * (max - min + 1)));
    return result;
}


function doFirst() {
    icanvas = document.getElementById('icanvas');
    icontext = icanvas.getContext('2d');
    icontext.lineWidth = .4;
    icontext.fillStyle = 'white';
    icontext.strokeStyle = '#888888';

    icontext.beginPath();
    icontext.arc(_sideMoved01, 5, 5, 0, 2 * Math.PI, false);
    icontext.fill();

    icontext.beginPath();
    icontext.moveTo(_sideMoved01, 5);
    icontext.lineTo(_sideMoved02, 55);
    icontext.stroke();

    icontext.beginPath();
    icontext.arc(_sideMoved02, 60, 5, 0, 2 * Math.PI, false);
    icontext.fill();

    icontext.beginPath();
    icontext.moveTo(_sideMoved02, 65);
    icontext.lineTo(_sideMoved03, 115);
    icontext.stroke();

    icontext.beginPath();
    icontext.arc(_sideMoved03, 120, 5, 0, 2 * Math.PI, false);
    icontext.fill();
    icontext.arc(_sideMoved03, 120, 5, 0, 2 * Math.PI, false);
    icontext.stroke();

    icontext.beginPath();
    icontext.moveTo(_sideMoved03, 125);
    icontext.lineTo(_sideMoved04, 175);
    icontext.stroke();

    icontext.beginPath();
    icontext.arc(_sideMoved04, 180, 5, 0, 2 * Math.PI, false);
    icontext.fill();

    icontext.beginPath();
    icontext.moveTo(_sideMoved04, 185);
    icontext.lineTo(_sideMoved05, 235);
    icontext.stroke();

    icontext.beginPath();
    icontext.arc(_sideMoved05, 240, 5, 0, 2 * Math.PI, false);
    icontext.fill();
}

function clearCanvas() {
    icontext.clearRect(0, 0, icanvas.width, icanvas.height);
    _sideMoved01 = 50;
    _sideMoved02 = 50;
    _sideMoved03 = 50;
    _sideMoved04 = 50;
    _sideMoved05 = 50;
}




window.addEventListener('load', doFirst, false);
