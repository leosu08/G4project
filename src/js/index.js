$(function() {

  var _windowWidth = $(window).width();
  console.log('window:'+_windowWidth);

  console.log('1:'+$('#i-page01').height());
  console.log('2:'+$('#i-page02').height());
  console.log('3:'+$('#i-page03').height());
  console.log('4:'+$('#i-page04').height());
  console.log('5:'+$('#i-page05').height());
  var _sumHeight=0;
  for (var i = 1 ; i<=5 ;i++){
     _sumHeight += $('#i-page0'+i).height();
  }
  console.log(_sumHeight);

  if(_windowWidth<768){
    $('.searchBar input').click(function() {
        $('.searchDetail').slideDown(500);
        clearCanvas();
    });
    $('.searchDetail .fa-times').click(function(){
      $('.searchDetail').css('display','none');
      doFirst();
    })
  }

//旋轉照片
    var gallery = $(".gallery"),
        _currdeg = 0,
        _currPos = 0;

    // $(".next").on("click", {
    //     name: "next"
    // }, rotate);
    // $(".prev").on("click", {
    //     name: "prev"
    // }, rotate);
    $(".gallery .pic").click(function() {
        var _movePos = $(this).index();
        var _moveDist = _movePos - _currPos;
        _currdeg = _currdeg - _moveDist * 45;
        _currPos = _movePos;
        gallery.css({
            "transform": "rotateY(" + _currdeg + "deg)"
        });
    })
    $(".gallery .pic").hover(function() {
        $(this).children('.detail').slideDown(400);
    }, function() {
        $(this).children('.detail').slideUp(200);
    })


    function rotate(e) {
        if (e.data.name == "next") {
            _currdeg = _currdeg - 45;
        }
        if (e.data.name == "prev") {
            _currdeg = _currdeg + 45;
        }
        gallery.css({
            "transform": "rotateY(" + _currdeg + "deg)"
        });
    }
    //旋轉照片結束


    // if($(document).width() > 768){
    //   $('.act01').attr({'data-1000':'transform:scale(0) translate3d(-330px,-730px,-350px);opacity:0;','data-1160':'transform:scale(0.4) translate3d(0,0px,0);opacity:1;', 'data-1560':'transform:scale(0.6) translate3d(200px,0px,0);opacity:1', 'data-1660':'transform:scale(0.8) translate3d(300px,330px,0);opacity:0'});
    // }
    // alert($('.act01').attr());
    // if($(document).width() > 768){
    //   $('.act01').attr({'data-1000':'transform:scale(0) translate3d(-330px,-730px,-350px);opacity:0;','data-1160':'transform:scale(0.4) translate3d(0,0px,0);opacity:1;', 'data-1560':'transform:scale(0.6) translate3d(200px,0px,0);opacity:1', 'data-1660':'transform:scale(0.8) translate3d(300px,330px,0);opacity:0'});
    // }else{
    //   $('.act01').attr({'data-1000':'transform:scale(0) translate3d(-330px,-730px,-350px);opacity:0;','data-1160':'transform:scale(1) translate3d(0,0px,0);opacity:1;', 'data-1560':'transform:scale(1.2) translate3d(200px,0px,0);opacity:1', 'data-1660':'transform:scale(1.4) translate3d(300px,330px,0);opacity:0'});
    // }


    //彈出論壇
    if (_windowWidth >= 768) {
        var _forumLength = $('.forum').length;
        for (var i = 1; i <= _forumLength; i++) {
            $('.forum' + i).css({
                'animation': 'float' + rand(1, 3) + ' 1s ' + rand(0, 3) + 's both'
            });
            if (i <= 3) {
                $('.forum' + i).css({
                    'top': rand(0, 45) + 'px',
                    'left': rand(50, 200) + (i - 1) * rand(470, 540) + 'px'
                });
            } else if (i > 3 && i <= 6) {
                var _gap = rand(50, 200);
                var _forTop = rand(160, 225);
                var _forLeft = rand(510, 600);
                $('.forum' + i).css({
                    'top': _forTop + 'px',
                    'left': _gap + (i - 4) * _forLeft + 'px'
                });
            } else if (i > 6 && i <= 10) {
                $('.forum' + i).css({
                    'top': rand(350, 395) + 'px',
                    'left': rand(50, 60) + (i - 7) * rand(390, 420) + 'px'
                });
            } else {
                $('.forum' + i).css({
                    'top': rand(480, 535) + 'px',
                    'left': rand(50, 60) + (i - 11) * rand(400, 420) + 'px'
                });
            }
        }
    }
//彈出論壇結束



    //手風琴 hover
    if (_windowWidth >= 768) {
        $('#accordion > li').hover(
            function() {
                closeKnowTrans();
                clearInterval(knowClockOn);
                var $this = $(this);
                $this.removeClass('fakeCover');
                $this.stop().animate({
                    'width': '480px'
                }, 500).css({
                    'transform': 'scale(1.1)',
                    'z-index': '2'
                });
                $('.heading', $this).stop(true, true).fadeOut();
                $('.knowDescription', $this).stop(true, true).slideDown(500);
                $('.pic', $this).stop(true, true).fadeIn();
                $('.description', $this).stop(true, true).fadeIn(500);
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
        if (_windowWidth >= 768) {
            $('.know' + _knowTransTimes).animate({
                'width': '480px'
            }, 500).css({
                'transform': 'scale(1.1)',
                'z-index': '2'
            });
        } else {
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
        if (_windowWidth >= 768) {
            $('.know' + _knowTransTimes).addClass('fakeCover');
            $('.know' + _knowTransTimes).stop().animate({
                'width': '220px'
            }, 500).css({
                'transform': 'scale(1)',
                'z-index': '0'
            });
        } else {
            $('.know' + _knowTransTimes).stop().animate({
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
    _sideMoved01 = 50;
    _sideMoved02 = 50;
    _sideMoved03 = 50;
    _sideMoved04 = 50;
    _sideMoved05 = 50;


    // $(document).scroll(function(){
    //   var _scrollTop = $(this).scrollTop();
    //   console.log(_scrollTop);
    //   if(_scrollTop>=950 && _scrollTop<=4350){
    //     clearCanvas();
    //     _sideMoved04 = 10;
    //     doFirst();
    //     $('#sideBar4').css({
    //         'transform': 'translateX(-40px)'
    //     }).children('span').addClass('show');
    //     $('#sideBar4').siblings().css('transform', 'translateX(0px)')
    //     .children('span').removeClass('show').fadeOut(600);
    //   }
    // })



    $('.sideBar').hover(function() {
      if(_windowWidth>=768){
        var $this = $(this);
        $('span', $this).stop(true, true).fadeIn();
      }
    }, function() {
        var $this = $(this);
        if($this.children('span').attr('class') != 'show'){
        $('span', $this).stop(true, true).fadeOut(500);
      }

    })


    $('.sideBar').click(function() {
      if(_windowWidth>=768){
        $(this).siblings().css('transform', 'translateX(0px)')
        .children('span').removeClass('show').fadeOut(600);
        $(this).css({
            'transform': 'translateX(-40px)'
        }).children('span').addClass('show');


        switch ($(this).attr('id')) {
            case 'sideBar1':
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
      }
    })

        var _baseHight = $(window).height();
        var _baseHightPercent=_baseHight/800;
        console.log("H:"+_baseHight);
        console.log(_baseHightPercent);


          $('a.page-scroll01').click(function(){
            $('html,body').animate({
                scrollTop:0
            }, 1000);
              console.log($('#i-page01').offset().top);
          })
          $('a.page-scroll02').click(function(){
            $('html,body').animate({
                scrollTop:1325+1000*1100/4300
            }, 1000);
              console.log($('#i-page02').offset().top);
          })
          $('a.page-scroll03').click(function(){
            $('html,body').animate({
                scrollTop:4950+1000*800/4300
            }, 1000);
              console.log($('#i-page03').offset().top);
          })
          $('a.page-scroll04').click(function(){
            $('html,body').animate({
                scrollTop:5950+1000*800/4300
            }, 1000);
              console.log($('#i-page04').offset().top);
          });
          $('a.page-scroll05').click(function(){
            $('html,body').animate({
                scrollTop:6900+1000*800/4300
            }, 1000);
              console.log($('#i-page05').offset().top);
          });



            // $('a.page-scroll').click(function() {
          //       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          //           var target = $(this.hash);
          //           target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          //           if (target.length) {
          //               $('html,body').animate({
          //                   scrollTop: target.offset().top
          //               }, 1000);
          //               console.log(target.offset().top);
          //               return false;
          //           }
          //       }
          //   });



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
    icontext.arc(_sideMoved05, 5, 5, 0, 2 * Math.PI, false);
    icontext.fill();

    icontext.beginPath();
    icontext.moveTo(_sideMoved05, 5);
    icontext.lineTo(_sideMoved04, 55);
    icontext.stroke();

    icontext.beginPath();
    icontext.arc(_sideMoved04, 60, 5, 0, 2 * Math.PI, false);
    icontext.fill();

    icontext.beginPath();
    icontext.moveTo(_sideMoved04, 65);
    icontext.lineTo(_sideMoved03, 115);
    icontext.stroke();

    icontext.beginPath();
    icontext.arc(_sideMoved03, 120, 5, 0, 2 * Math.PI, false);
    icontext.fill();
    icontext.arc(_sideMoved03, 120, 5, 0, 2 * Math.PI, false);
    icontext.stroke();

    icontext.beginPath();
    icontext.moveTo(_sideMoved03, 125);
    icontext.lineTo(_sideMoved02, 175);
    icontext.stroke();

    icontext.beginPath();
    icontext.arc(_sideMoved02, 180, 5, 0, 2 * Math.PI, false);
    icontext.fill();

    icontext.beginPath();
    icontext.moveTo(_sideMoved02, 185);
    icontext.lineTo(_sideMoved01, 235);
    icontext.stroke();

    icontext.beginPath();
    icontext.arc(_sideMoved01, 240, 5, 0, 2 * Math.PI, false);
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
