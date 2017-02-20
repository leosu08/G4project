$(function() {
    _windowWidth = $(window).width();
    _windowHeight = $(window).height();
    console.log(_windowWidth);
    forumShowAnim();
    shootingStar();


    function shootingStar() {
        var srDrop = 45;
        for (i = 1; i < srDrop; i++) {
            var dropLeft = rand(0, 1600);
            var dropTop = rand(-1000, 1400);

            $('.shootingStar').append('<div class="shoot" id="shoot' + i + '"></div>');
            $('#shoot' + i).css({
                'left': dropLeft,
                'top': dropTop,
                'animation': 'fall ' + rand(2, 30) + 's linear infinite'
            });
        }

    }
    



    $('#navButton').click(function() {
        if ($('.mainMenu2menu').hasClass('open')) {
            $('body').css('overflow', 'visible');
            $('#navButton').children('i').attr('class', 'fa fa-bars');
            $('.mainMenu.menu').stop().animate({
                'left': '-100%'
            }, 400).removeClass('open');
        } else {
            $('.mainMenu.menu').stop().animate({
                'left': '0'
            }, 400).addClass('open');
            $('body').css('overflow', 'hidden');
            $('#navButton').children('i').attr('class', 'fa fa-times');
        }

    })

    //導覽列 + 體驗帳號彈窗
    $('#navLogin').click(function(e){
        onLogin();
        e.preventDefault();
        $('.activity').fadeOut();
        $('#accordion').fadeOut();
        $('#accordion').fadeOut();
        $('.title').fadeOut();
        $('.forumGroup').fadeOut();
        $('.gallery').css('display','none');
    });
      $('.i-lightboxBg').click(function(){
        $('.activity').fadeIn(500);
        $('#accordion').fadeIn(500);
        $('#accordion').fadeIn(500);
        $('.title').fadeIn(500);
        $('.forumGroup').fadeIn(500);
        $('.gallery').css('display','block');
      })

    $('.join .button-square').click(onLogin);

    
    function onLogin() {
        $('.loginPopup').css({
            'display': 'block'
        });
        $('.join').fadeOut(100);
        $('.login').css({
            'display': 'block'
        });
        $('#nav').stop().slideUp(600);
        $('#icanvas').stop().slideUp(600);
        $('body').css({
            'overflow': 'hidden'
        });
        $('#loginAccount').val('guest');
        $('#loginPsw').val('guest');
        $('.join').css({'animationDelay':'0s'});
    }



    $('.i-lightboxBg').click(function() {
        $('.loginPopup').css({
            'display': 'none'
        });
        $('.join').stop().fadeIn();
        $('.login').css({
            'display': 'none'
        });
        $('#nav').stop().fadeIn(600);
        $('#icanvas').stop().slideDown(600);
        $('body').css({
            'overflow': 'visible'
        });
    })

    $('.logOn').click(function () {
        if ($(this).text() == '我要登入') {
            $(this).text('按此註冊會員');
            $('.login h4').text('會員登入');
            $('#i-loginBtn').val('登入');
            $('#loginConfirmPsw').stop().slideUp(400);
            $('#loginMemName').stop().slideUp(400);
             $('#loginAccount').attr('placeholder','*帳號(Email)');
              $('#loginPsw').attr('placeholder','*密碼(4~8個字元)');
        } else {
            $(this).text('我要登入');
            $('.login h4').text('會員註冊');
            $('#i-loginBtn').val('註冊');
            $('#loginConfirmPsw').stop().fadeIn(400);
            $('#loginMemName').stop().fadeIn(400);
            $('#loginAccount').attr('placeholder','*帳號(Email)').val('');
            $('#loginPsw').attr('placeholder','*密碼(4~8個字元)').val('');
        }

    })



    if (_windowWidth >= 992) {
        //自動執行手風琴
        knowClockOn = setInterval(autoKnowTrans, 3000);
        _knowTransTimes = 1;

        //導覽列
    }

    (function(){
    jQuery(window).bind('scrollstart', function(){
        $('#i-body #nav').stop(true,false).animate({'top':'-100px','opacity':0},500);
    });
 
    jQuery(window).bind('scrollstop', function(e){
        $('#i-body #nav').stop(true,false).animate({'top':'0px','opacity':1},1000);
    });
 
})();



if (_windowWidth < 992) {
        $('#searchBarMobile').focus(function() {
            $('.searchDetail').stop().slideDown(400);
            $('#nav').fadeOut(400);
        });
        $('.searchDetail .fa-times').click(function() {
            $('.searchDetail').stop().slideUp(400);
            $('#nav').slideDown(600);
        })
    } 

///===================手風琴========================

var _accordion=$('#accordion > li')
for(var i=0;i<=_accordion.length;i++){
    $('#accordion .know:eq('+ i +')').css({
        'animationName':'aa',
        'animationDuration':0.2+i*0.4+'s'
    });
}

    //手動執行手風琴
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
                $('.heading', $this).stop(true, true).animate({'margin-top':'280px','opacity':'0'},800);
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
                $('.heading', $this).stop(true, true).animate({'margin-top':'60px','opacity':'1'},800);
                $('.pic', $this).stop(true, true).fadeOut();
                $('.description', $this).stop(true, true).fadeOut(500);
                $('.knowDescription', $this).stop(true, true).slideUp(700);
                $('.memberId', $this).stop(true, true).fadeOut();
            }
        );
    } else {
        $("#accordion > li").click(function() {
            var $this = $(this);
            var other = $(this).siblings('');
            other.addClass('fakeCover');
            $this.removeClass('fakeCover');
            other.stop().animate({
                'height': '80px'
            }, 300).css({
                'z-index': '0'
            });
            $this.stop().animate({
                'height': '250px'
            }, 300).css({
                'z-index': '2'
            });
            $('.heading', $this).stop(true, true).fadeOut();
            $('.knowDescription', $this).stop(true, true).slideDown(500);
            $('.pic', $this).stop(true, true).fadeIn(1200);
            $('.description', $this).stop(true, true).fadeIn(500);
            $('.memberId', $this).stop(true, true).fadeIn(1200);
            $('.heading', other).stop(true, true).fadeIn();
            $('.knowDescription', other).stop(true, true).fadeOut(500);
            $('.pic', other).stop(true, true).fadeOut();
            $('.description', other).stop(true, true).fadeOut(500);
            $('.memberId', other).stop(true, true).fadeOut(800);
        })
    }
    //旋轉照片
    var gallery = $(".gallery"),
        _currdeg = 0,
        _currPos = 0;

    for (var i = 0; i < $('.photoBar img').length; i++) {
        var picBig = $('.gallery .photo:eq(' + i + ')').attr('src');
        var pic = $('.photoBar img:eq(' + i + ')');
        pic.attr('src', picBig);
    }

    //mobile
    $('.photoBar img').click(function() {
            var _movePos = $(this).index();
            var _moveDist = _movePos - _currPos;
            _currdeg = _currdeg - _moveDist * 45;
            _currPos = _movePos;
            gallery.css({
                "transform": "rotateY(" + _currdeg + "deg)"
            });
            $(this).siblings().children('img').removeClass('shadow');
            $(this).children('img').addClass('shadow');

        })
        //.......mobile end

    $(".gallery .pic").click(function() {
        var _movePos = $(this).index();
        var _moveDist = _movePos - _currPos;
        _currdeg = _currdeg - _moveDist * 45;
        _currPos = _movePos;
        gallery.css({
            "transform": "rotateY(" + _currdeg + "deg)"
        });

        $(this).siblings().children('.picContainer').removeClass('shadow');
        $(this).children('.picContainer').addClass('shadow');
        $(this).siblings().children('.picContainer').children('a').css('display','none');
        $(this).children('.picContainer').children('a').css('display','block');
    })

    var galleryTt = setInterval(autoRotateGallery,3000);
    function autoRotateGallery(){
        if( _currPos >= 7){
            _currPos = 0 ;
        }else{
            _currPos +=1;
        }
       
        _currdeg = _currPos * -45; 
          gallery.css({
            "transform": "rotateY(" + _currdeg + "deg)"
        });
        $('.gallery .pic:eq('+ _currPos +')').siblings().children('.picContainer').removeClass('shadow');
        $('.gallery .pic:eq('+ _currPos +')').children('.picContainer').addClass('shadow');
        $('.gallery .pic:eq('+ _currPos +')').children('.picContainer').children('a').css('display','block');
        $('.gallery .pic:eq('+ _currPos +')').siblings().children('.picContainer').children('a').css('display','none');   
    }


    $(".gallery .pic").hover(function() {
        clearInterval(galleryTt);
        $(this).children('.picContainer').css({
            'box-shadow': '0px 0px 12px 2px #f1f1f1'
        });
        $(this).children('.picContainer').children('.detail').css({'opacity':1});
    }, function() {
        galleryTt = setInterval(autoRotateGallery,3000);
        $(this).children('.picContainer').children('.detail').css({'opacity':0});  
        $(this).children('.picContainer').css({
            'box-shadow': 'none'
        });
    })

    //sideBar=================start========================================
   
    _sideMoved01 = 40;
    _sideMoved02 = 60;
    _sideMoved03 = 60;
    _sideMoved04 = 60;
    _sideMoved05 = 60;
    _sideMoved06 = 60;
    _sideBarPosX = 40;
    _sideBarPosY = 380;

    if (_windowWidth < 768) {
        _sideMoved01 = 60;
        _sideBarPosX = 60;
        _sideBarPosY = 265;
    };


    //桌機
    $(window).scroll(function() {
        // if (_windowWidth >= 768) {          
            var _scrollTop = $(this).scrollTop();
            if (_scrollTop <= 100 * _windowHeight / 100 + 1) {
                clearCanvas();
                _sideMoved01 = 40;
                _sideBarPosY = 175;
                doFirst();
                $('.sideBar1').css({
                    'transform': 'translateX(-25px)'
                });
                $('.sideBar1').siblings().css('transform', 'translateX(0px)');
                $('.sideBar1').siblings().children('span').removeClass('show').css('display', 'none');
            } else if (_scrollTop > 130 * _windowHeight / 100 && _scrollTop <= 454 * _windowHeight / 100) {
                clearCanvas();
                _sideMoved02 = 40;
                _sideBarPosY = 145;
                doFirst();
                $('.sideBar2').css({
                    'transform': 'translateX(-25px)'
                });
                $('.sideBar2').siblings().css('transform', 'translateX(0px)');
            } else if (_scrollTop > 454 * _windowHeight / 100 && _scrollTop <= 534 * _windowHeight / 100) {
                clearCanvas();
                _sideMoved03 = 40;
                _sideBarPosY = 115;
                doFirst();
                $('.sideBar3').css({
                    'transform': 'translateX(-25px)'
                });
                $('.sideBar3').siblings().css('transform', 'translateX(0px)');
            } else if (_scrollTop > 534 * _windowHeight / 100 && _scrollTop <= 614 * _windowHeight / 100) {
                clearCanvas();
                _sideMoved04 = 40;
                _sideBarPosY = 85;
                doFirst();
                $('.sideBar4').css({
                    'transform': 'translateX(-25px)'
                });
                $('.sideBar4').siblings().css('transform', 'translateX(0px)');
            } else if (_scrollTop > 614 * _windowHeight / 100&& _scrollTop <= 690 * _windowHeight / 100) {
                clearCanvas();
                _sideMoved05 = 40;
                _sideBarPosY = 55;
                doFirst();
                $('.sideBar5').css({
                    'transform': 'translateX(-25px)'
                });
                $('.sideBar5').siblings().css('transform', 'translateX(0px)');
            }else if (_scrollTop > 690 * _windowHeight / 100) {
                clearCanvas();
                _sideMoved06 = 40;
                _sideBarPosY = 25;
                doFirst();
                $('.sideBar6').css({
                    'transform': 'translateX(-25px)'
                });
                $('.sideBar6').siblings().css('transform', 'translateX(0px)');
            }
        // } else {
        //     var _scrollTop = $(this).scrollTop();
        //     if (_scrollTop <= 120 * _windowHeight / 100 + 1) {
        //         clearCanvas();
        //         _sideBarPosY = 265;
        //         doFirst();
        //     } else if (_scrollTop > 130 * _windowHeight / 100 && _scrollTop <= 454 * _windowHeight / 100) {
        //         clearCanvas();
        //         _sideBarPosY = 235;
        //         doFirst();
        //     } else if (_scrollTop > 454 * _windowHeight / 100 && _scrollTop <= 504 * _windowHeight / 100) {
        //         clearCanvas();
        //         _sideBarPosY = 205;
        //         doFirst();
        //     } else if (_scrollTop > 504 * _windowHeight / 100 && _scrollTop <= 554 * _windowHeight / 100) {
        //         clearCanvas();
        //         _sideBarPosY = 175;
        //         doFirst();
        //     } else if (_scrollTop > 554 * _windowHeight / 100) {
        //         clearCanvas();
        //         _sideBarPosY = 145;
        //         doFirst();
        //     }
        // }
    });


    $('.sideBar').hover(function() {
        $(this).children('span').addClass('show');
    }, function() {
        $(this).children('span').removeClass('show');
    })








    $('.sideBar').click(function(e) {
        if (_windowWidth >= 768) {
            $(this).siblings().css('transform', 'translateX(0px)');
            $(this).css({
                'transform': 'translateX(-20px)'
            });
        }
        var myHtml = $('html,body');
        switch ($(this).attr('id')) {
            case 'sideBar1':
                myHtml.animate({
                    scrollTop: 0
                }, 1000);
                break;
            case 'sideBar2':
                myHtml.animate({
                    scrollTop: 133 * _windowHeight / 100 + 1
                }, 1000);
                break;
            case 'sideBar3':
                myHtml.animate({
                    scrollTop: 456 * _windowHeight / 100 + 1
                }, 1000);
                break;
            case 'sideBar4':
                myHtml.animate({
                    scrollTop: 536 * _windowHeight / 100 + 1
                }, 1000);
                break;
            case 'sideBar5':
                myHtml.animate({
                    scrollTop: 616 * _windowHeight / 100 + 1
                }, 1000);
                break;
            case 'sideBar6':
                myHtml.animate({
                    scrollTop: 700 * _windowHeight / 100 + 1
                }, 1000);
                break;
        }
    })

});


function doFirst() {
    icanvas = document.getElementById('icanvas');
    icontext = icanvas.getContext('2d');
    icontext.lineWidth = .6;
    icontext.fillStyle = 'white';
    icontext.strokeStyle = '#cccccc';

        icontext.beginPath();
        icontext.arc(_sideMoved06, 25, 5, 0, 2 * Math.PI, false);
        icontext.fill();

        icontext.beginPath();
        icontext.moveTo(_sideMoved06, 25);
        icontext.lineTo(_sideMoved05, 55);
        icontext.stroke();

        icontext.beginPath();
        icontext.arc(_sideMoved05, 55, 5, 0, 2 * Math.PI, false);
        icontext.fill();

        icontext.beginPath();
        icontext.moveTo(_sideMoved05, 55);
        icontext.lineTo(_sideMoved04, 85);
        icontext.stroke();

        icontext.beginPath();
        icontext.arc(_sideMoved04, 85, 5, 0, 2 * Math.PI, false);
        icontext.fill();

        icontext.beginPath();
        icontext.moveTo(_sideMoved04, 85);
        icontext.lineTo(_sideMoved03, 115);
        icontext.stroke();

        icontext.beginPath();
        icontext.arc(_sideMoved03, 115, 5, 0, 2 * Math.PI, false);
        icontext.fill();

        icontext.beginPath();
        icontext.moveTo(_sideMoved03, 115);
        icontext.lineTo(_sideMoved02, 145);
        icontext.stroke();

        icontext.beginPath();
        icontext.arc(_sideMoved02, 145, 5, 0, 2 * Math.PI, false);
        icontext.fill();

        icontext.beginPath();
        icontext.moveTo(_sideMoved02, 145);
        icontext.lineTo(_sideMoved01, 175);
        icontext.stroke();

        icontext.beginPath();
        icontext.arc(_sideMoved01, 175, 5, 0, 2 * Math.PI, false);
        icontext.fill();

        icontext.beginPath();
        icontext.lineWidth = 2;
        icontext.strokeStyle = 'white';
        icontext.arc(_sideBarPosX, _sideBarPosY, 8, 0, 2 * Math.PI, false);
        icontext.stroke();
}




function clearCanvas() {
    icanvas = document.getElementById('icanvas');
    icontext = icanvas.getContext('2d');
    icontext.clearRect(0, 0, icanvas.width, icanvas.height);
    _sideMoved01 = 60;
    _sideMoved02 = 60;
    _sideMoved03 = 60;
    _sideMoved04 = 60;
    _sideMoved05 = 60;
    _sideMoved06 = 60;
    _moving = 0;
}

window.addEventListener('load', doFirst, false);
 //sideBar ====================end============================


//隨機
function rand(min, max) {
    result = min + (Math.floor(Math.random() * (max - min + 1)));
    return result;
}



//手機論壇
// function forumMove() {
//     var _forumLength = $('.forum').length;
//     for (var i = 1; i <= _forumLength; i += 2) {
//         $('.forum' + i).css({
//             'animation': 'animForumMoveRight .5s ' + i / 3 + 's both linear'
//         });
//         $('.forum' + (i + 1)).css({
//             'animation': 'animForumMoveLeft .5s ' + (i + 1) / 3 + 's both linear'
//         });
//     }
// }

 boxTt = setInterval(autoForumRotate,3000);


function forumShowAnim(){
   for(var i=0 ; i<=8;i++){
       $('.forumBox:eq('+i+')').css({'animation':'boxRotate 0.'+rand(7000,9999)+'s linear'})
   } 
}

function autoForumRotate(){
    var _forumBoxLength = $('.forumBox').length;
   $('.forumBox').removeClass('rotate');
   for(var i=0 ; i<=_forumBoxLength;i+=3){
       $('.forumBox:eq('+ (rand(0,2)+i) +')').addClass('rotate');
   }
}

//結束



//手風琴
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
            'height': '200px'
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
//手風琴結束


// window.onscroll = function() {
//     var _scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
//     if(_scrollTop <= 120 * _windowHeight / 100 + 1){
//       clearCanvas();
//       _sideBarPosY = 265;
//       doFirst();
//     }else if (_scrollTop > 130 * _windowHeight / 100 && _scrollTop <= 454 * _windowHeight / 100) {
//         clearCanvas();
//           _sideBarPosY = 235;
//         doFirst();
//     } else if(_scrollTop > 454 * _windowHeight / 100 && _scrollTop <= 504 * _windowHeight / 100) {
//         clearCanvas();
//         _sideBarPosY = 205;
//         doFirst();
//     }else if( _scrollTop > 504 * _windowHeight / 100 && _scrollTop<=554 * _windowHeight / 100) {
//         clearCanvas();
//           _sideBarPosY = 175;
//         doFirst();
//     }else if( _scrollTop > 554 * _windowHeight / 100) {
//         clearCanvas();
//           _sideBarPosY = 145;
//         doFirst();
//     };
// }



$(function() {
    $('#multiple').hide();

    if (_windowWidth < 768) {
        $('#i-wrapper #i-date-control').focus(function() {
            $('#multiple').show().css({
                'position': 'absolute',
                'top': '170px',
                'left': '0px',
                'right': '0px',
                'margin': 'auto',
                'width': '300px',
                'height': '300px',
                'transform': 'scale(1)',
                'z-index': 200
            });
        });
    } else {
        $('#i-wrapper #i-date-control').focus(function() {
            $('#multiple').show().css({
                'position': 'absolute',
                'top': '30px',
                'left': '-40px',
                'width': '300px',
                'height': '300px',
                'transform': 'scale(0.8)',
                'z-index': 200
            });
        });
    }

    $('body').click(function(evt) {
        // console.log($(evt.target).parents("#multiple").length);
        if ($(evt.target).parents("#multiple").length == 0 &&
            evt.target.id != "i-date-control" && evt.target.class != "calendar-dark") {
            $('#multiple').hide();

        }
    });
})

$(function() {
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

        if (date[0] !== null) {
            text += date[0].format('YYYY-MM-DD');
        }

        if (date[0] !== null && date[1] !== null) {
            text += '~';
        } else if (date[0] === null && date[1] == null) {
            text += 'nothing';
        }

        if (date[1] !== null) {
            text += date[1].format('YYYY-MM-DD');
        }
        //操作區
        $box.text(text);
        $('#i-wrapper #i-date-control').val(text);
    } //end


    // Default Calendar
    $('.calendar').pignoseCalendar({
        select: onClickHandler
    });

    // Input Calendar
    $('.input-calendar').pignoseCalendar({
        buttons: true, // It means you can give bottom button controller to the modal which be opened when you click.
    });

    // Calendar modal
    var $btn = $('.btn-calendar').pignoseCalendar({
        modal: true, // It means modal will be showed when you click the target button.
        buttons: true,
        apply: function(date) {
            $btn.next().show().text('You applied date ' + date + '.');
        }
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
                (date[0] === null ? 'null' : date[0].format('YYYY-MM-DD')) +
                '.' +
                '<br /><br />' +
                '<strong>Active dates</strong><br /><br />' +
                '<div class="active-dates"></div>');

            for (var idx in obj.storage.activeDates) {
                var date = obj.storage.activeDates[idx];
                if (typeof date !== 'string') {
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
        for (var i = 0; i < times; /* Do not increase index */ ) {
            var year = moment().year();
            var month = 0;
            var day = parseInt(Math.random() * 364 + 1);
            var date = moment().year(year).month(month).date(day).format('YYYY-MM-DD');
            if ($.inArray(date, disabledDates) === -1) {
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
    }());

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
});


// jquery mobile
(function() {
    $(document).on("pageinit", "#i-body", function() {
        $('.photoBar').on("swipeleft", function() {
            $('.photoBar .photoBarHidden').animate({
                'left': '-142px'
            });
        });
        $('.photoBar').on("swiperight", function() {
            $('.photoBar .photoBarHidden').animate({
                'left': '0px'
            });
        });
    });
})();




(function(){
 
    var special = jQuery.event.special,
        uid1 = 'D' + (+new Date()),
        uid2 = 'D' + (+new Date() + 1);
 
    special.scrollstart = {
        setup: function() {
 
            var timer,
                handler =  function(evt) {
 
                    var _self = this,
                        _args = arguments;
 
                    if (timer) {
                        clearTimeout(timer);
                    } else {
                        evt.type = 'scrollstart';
                        jQuery.event.dispatch.apply(_self, _args);
                    }
 
                    timer = setTimeout( function(){
                        timer = null;
                    }, special.scrollstop.latency);
 
                };
 
            jQuery(this).bind('scroll', handler).data(uid1, handler);
 
        },
        teardown: function(){
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid1) );
        }
    };
 
    special.scrollstop = {
        latency: 300,
        setup: function() {
 
            var timer,
                    handler = function(evt) {
 
                    var _self = this,
                        _args = arguments;
 
                    if (timer) {
                        clearTimeout(timer);
                    }
 
                    timer = setTimeout( function(){
 
                        timer = null;
                        evt.type = 'scrollstop';
                        jQuery.event.dispatch.apply(_self, _args);
 
                    }, special.scrollstop.latency);
 
                };
 
            jQuery(this).bind('scroll', handler).data(uid2, handler);
 
        },
        teardown: function() {
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid2) );
        }
    };
 
})();