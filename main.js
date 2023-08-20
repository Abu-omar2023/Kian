$(document).ready(function(){

    show();

    function show(){
        $('.logo').fadeOut(1000, function () {
            $('.logo').fadeIn(1000);
            show();
        })
        
    };
    $(window).scroll(function(){
        if($(window).scrollTop() >= 230 ){
            $('.progress span:first-child').animate({
                'width': '90%'
            },1000);
             $('.progress span:last-child').delay(1000).fadeIn(1000);
            
        }else{
            $('.progress span:first-child').css({
                'width': '0'
            })
        }
    });
    
    $('.hiden-nav').click(function(){
        $('.sacand-nav').toggleClass('visible')
 })
   
$('header div ul li a').click(function(){
    $(this).addClass('link').parent().siblings().find('a').removeClass('link');
});
$('.sacand-nav ul li a').click(function(){
    $(this).addClass('link2').parent().siblings().find('a').removeClass('link2');
});
$('.container').fadeIn(2000);
$('.profile').delay(2000).fadeIn(2000);

$('.container h2').delay(4000).fadeIn(2000),$('.container p:first-of-type').delay(6000).fadeIn(2000),$('.sacand-p').delay(8000).fadeIn(2000),$('.container p:last-of-type').delay(10000).fadeIn(2000);
;    
let dw = $(document).width();
if( dw > 1080){
    $('.container h2').css({
        
        'margin-left':'70px'
    }),$('.container p').css({
        
        'margin-left':'70px'
    }),
    $('.datas p').css({
        'font-size':'20px'
    }),$('.center').css({
        'font-size':'45px'
    })
  } else if( dw < 1080 && dw >= 900){
    $('.container h2').css({
        
        'margin-left':'50px'
    }),$('.container p').css({
        
        'margin-left':'50px'
    }),
    $('.profile').css({
        'width':'200px',
        'height': '250px',
        'position': 'absolute',
        'z-index':'-1',
        'margin': '10px auto',
        'right' :  '20px',           
        'top': '0',
        'font-weight': 'bold',
        'border-radius': '50px'
    }), $('.profile img').css({
        'width':'240%',
    }),$('.datas p').css({
        'font-size':'20px'
    }),$('.center').css({
        'font-size':'42px'
    })
  }else if( dw < 900 && dw >= 800){
    $('.profile').css({
        'width':'200px',
        'height': '250px',
        'position': 'absolute',
        'z-index':'-1',
        'margin': '10px auto',
        'right' :  '20px',           
        'top': '0',
        'font-weight': 'bold',
        'border-radius': '50px'
    }),$('.container div video').css({
        'width':'130%'
    }),$('.skills video').css({
        'width':'130%'
    }),$('.container h2').css({
        'font-size':'35px',
        'margin-left':'50px'
    }),$('.container span').css({
        'font-size':'30px',
    }),$('.container p').css({
        'font-size':'25px',
        'margin-left':'50px'
    }),
    $('.profile img').css({
        'width':'240%',
    }),$('.datas p').css({
        'font-size':'18px'
    }),$('.center').css({
        'font-size':'40px'
    })
  }else if( dw < 800 && dw >= 700){
    $('.logo').css({
        'marginTop': '0',
        'font-size': '22px'
    }),$('header div ul li').css({
        'margin':'-20px 0 0 0',
        'fontSize':'16px'
    }),
    $('.profile').css({
        'width':'200px',
        'height': '250px',
        'position': 'absolute',
        'z-index':'-1',
        'margin': '10px auto',
        'right' :  '20px',           
        'top': '0',
        'font-weight': 'bold',
        'border-radius': '50px'
    }),$('.container div video').css({
        'width':'150%'
    }),$('.skills video').css({
        'width':'150%'
    }),$('.container h2').css({
        'font-size':'30px',
        'margin-left':'30px'
    }),$('.container span').css({
        'font-size':'30px',
    }),$('.container p').css({
        'font-size':'22px',
        'margin-left':'30px'
    }),
    $('.profile img').css({
        'width':'240%',
    }),$('.datas p').css({
        'font-size':'16px'
    }),$('.center').css({
        'font-size':'37px'
    })
  }else if( dw < 700 && dw >= 600){
    $('.logo').css({
        'margin': '0 20px 0 -20px',
        'font-size': '22px'
    }),$('header div ul li').css({
        'margin':'-20px 0 0 0',
        'fontSize':'16px'
    }),
    $('.profile').css({
        'width':'180px',
        'height': '230px',
        'position': 'absolute',
        'z-index':'-1',
        'margin': '10px 10px',
        'right' :  '0',           
        'top': '0',
        'font-weight': 'bold',
        'border-radius': '50px'
    }),$('.container div video').css({
        'width':'150%'
    }),$('.skills video').css({
        'width':'150%'
    }),$('.container h2').css({
        'font-size':'27px',
        'margin-left':'30px'
    }),$('.container span').css({
        'font-size':'24px',
        
    }),$('.container p').css({
        'font-size':'18px',
        'margin-left':'30px'
    }),
    $('.profile img').css({
        'width':'260%',
    }),$('.datas p').css({
        'font-size':'12px',
        'letter-spacing': '1px'
    }),$('.center').css({
        'font-size':'35px'
    })
  }else if( dw < 600 && dw >= 500){
    $('header').css({
        'margin-top': '-30px'
    }),
    $('.logo').css({
        'marginTop': '20px',
        'font-size': '18px',
        'margin-left':'-20px'
    }),$('header div ul li').css({
        'margin':'0 -10px 0 0 ',
        'fontSize':'12px'
    }),
    $('.profile').css({
        'width':'150px',
        'height': '210px',
        'position': 'absolute',
        'z-index':'-1',
        'right' :  '0',           
        'top': '-40px',
        'right':'10px',
        'font-weight': 'bold',
        'border-radius': '50px'
    }),$('.container div video').css({
        'width':'180%'
    }),$('.skills video').css({
        'width':'180%'
    }),$('.container h2').css({
        'font-size':'27px',
        'margin-left':'20px'
    }),$('.container span').css({
        'font-size':'22px',
    }),$('.container p').css({
        'font-size':'18px',
        'margin-left':'20px'
    }),
    $('.profile img').css({
        'width':'300%',
    }),$('.datas p').css({
        'font-size':'10px',
    }),$('.conected video').css({
        'width':'150%'
    }),$('.center').css({
        'font-size':'35px'
    })
  }else if( dw < 500 && dw >= 400){
    $('.logo').css({
        'marginTop': '5px',
        'font-size': '16px',
        'margin-left':'-20px'
    }),$('header div ul li').css({
        'margin':'-15px -12px 0 0 ',
        'fontSize':'10px'
    }),
    $('.profile').css({
        'width':'140px',
        'height': '140px',
        'position': 'absolute',
        'z-index':'-1',
        'right' :  '0',           
        'top': '-40px',
        'right':'10px',
        'font-weight': 'bold',
        'border-radius': '50%'
    }),$('.container div video').css({
        'width':'250%'
    }),$('.skills video').css({
        'width':'250%'
    }),$('.skills div').css({
        'width':'90%',
        'height': '25px',
        'left' :'12.5px'
        }),$('.progress span:last-child').css({
            'font-size':'16px',
            'margin-bottom':'8px'
        }),

    $('.container h2').css({
        'font-size':'22px',
        'margin-left':'15px'
    }),$('.container span').css({
        'font-size':'20px'
    }),$('.container p').css({
        'font-size':'16px',
        'margin-left':'15px'
    }),
    $('.profile img').css({
        'width':'310%'

    }),$('.center').css({
        'font-size':'25px'
    }),$('.datas p').css({
        'font-size':'9px',
    }),$('.conected video').css({
        'width':'150%'
    }),$('.scrool').css({
        'width':'30px',
        'height':'30px'
    }),$('.scrool i').css({
        'font-size':'20px'
    }),$('.center').css({
        'font-size':'32px'
    })
  }else if( dw < 400 && dw >= 310){
    $('#about-me').css({
        display:'none'
    }),
    $('.hiden-nav').fadeIn(),
        $('header').css({
            'height':'40px'
        }),
    $('.logo').css({
        'marginTop': '-5px',
        'font-size': '14px',
        'margin-left':'-20px'
    }),$('header div ul li').css({
        'margin':'22px 0 0 10px',
        'fontSize':'10px'
    }),
    $('.profile').css({
        'width':'200px',
        'height': '200px',
        'position': 'absolute',
        'z-index':'-1',
        'top': '-40px',
        'right':'calc(50% - 100px)',
        'font-weight': 'bold',
        'border-radius': '50%'
    }),$('.container div video').css({
        'width':'350%'
    }),$('.skills video').css({
        'width':'280%'
    }),$('.skills').css({
        'width':'calc(100% - 40px)',
        'height':'400px',
        'margin-bottom':'50px'
    }),$('.skills div').css({
        'width':'90%',
        'height': '25px',
        'left' :'12.5px'
        }),$('.progress span:last-child').css({
            'font-size':'16px',
            'margin-bottom':'8px'
        }),$('.container').css({
        'width':'calc(100% - 40px)',
        'height':'430px',
        'line-height': '45px',
        'margin-top':'30px'
    }),$('.container h2').css({
        'font-size':'28px',
        'text-align':'center',
         'margin-top':'170px',
         'padding-left':'0',
    
    }),$('.container span').css({
        'font-size':'22px',
        // 'margin-left':'-70px'
        //'margin-left':'-30px'
        'padding-left':'0',
        'text-align':'center'
    }),$('.container p').css({
        'font-size':'15px',
        'margin-left':'0',
        'text-align':'center'
       
    }),
    $('.profile img').css({
        'width':'220%',
        margin:'20px 0 0 -135px',
        
    }),$('.datas p').css({
        'font-size':'8px',
        'font-weight':'100'
    }),$('.conected').css({
        'margin-top':'20px',
        'margin-botton':'150px'
    }),$('.conected video').css({
        'width':'150%'
    }),$('.scrool').css({
        'width':'30px',
        'height':'30px'
    }),$('.scrool i').css({
        'font-size':'20px'
    }),$('.center').css({
        'font-size':'30px'
    })
  }else if( dw < 310){
    $('#about-me').css({
        display:'none'
    }),
    $('.hiden-nav').fadeIn(),
        $('header').css({
            'height':'40px'
        }),
    $('.logo').css({
        'marginTop': '-10px',
        'font-size': '14px',
        'margin-left':'-20px'
    }),$('header div ul li').css({
        'margin':'22px 0 0 10px',
        'fontSize':'10px'
    }),
    $('.sacand-nav ul li a').css({
        fontSize:'8px'
    }),
    $('.profile').css({
        'width':'170px',
        'height': '170px',
        'position': 'absolute',
        'z-index':'-1',
        'top': '-30px',
        'right':'calc(50% - 85px)',
        'font-weight': 'bold',
        'border-radius': '50%'
    }),$('.container div video').css({
        'width':'450%'
    }),$('.skills video').css({
        'width':'450%'
    }),$('.skills').css({
        'width':'calc(100% - 40px)',
        'height':'400px',
        'margin-bottom':'50px'
    }),$('.skills div').css({
        'width':'90%',
        'height': '25px',
        'left' :'12.5px'
        }),$('.progress span:last-child').css({
            'font-size':'16px',
            'margin-bottom':'8px'
        }),$('.container').css({
        'width':'calc(100% - 40px)',
        'height':'430px',
        'line-height': '45px',
       
    }),$('.container h2').css({
        'font-size':'28px',
        'text-align':'center',
         'margin-top':'170px',
         'padding-left':'0',
    
    }),$('.container span').css({
        'font-size':'22px',
        // 'margin-left':'-70px'
        //'margin-left':'-30px'
        'padding-left':'0',
        'text-align':'center'
    }),$('.container p').css({
        'font-size':'13px',
        'margin-left':'0',
        'text-align':'center'
       
    }),
    $('.profile img').css({
        'width':'240%',
        margin:'20px 0 0 -135px',
        
    }),$('.datas').css({
        'bottom':'30px'
        }),$('.datas p').css({
        'font-size':'6px',
        'font-weight':'100',
       }),$('.conected').css({
        'max-height':'80px',
        'margin-top':'20px',
        'margin-botton':'150px'
    }),$('.conected video').css({
        'width':'180%'
    }),$('.scrool').css({
        'width':'30px',
        'height':'30px'
    }),$('.scrool i').css({
        'font-size':'20px'
    }),$('.center').css({
        'font-size':'28px'
    })
  }

   $(window).scroll(function(){
    if($(window).scrollTop() >= $('.container').offset().top){
        $('.scrool').fadeIn()
    }
    else{
        $('.scrool').fadeOut()
    }
   });
   $('.scrool').click(function(){
    $('html, body').animate({
        scrollTop : 0
    })
   });
   $(window).scroll(function(){
    if($(window).scrollTop() >= 800){
        
            $('.fa-yahoo, .fa-facebook, .fa-whatsapp').css({
                'font-size': '60px',
                'transition': '.7s'
                },1000),
                $('.fa-yahoo, .fa-facebook, .fa-whatsapp').css({
                    'transform': 'rotate(720deg)'
                    },1000)
                
                }else{
        $('.fa-yahoo, .fa-facebook, .fa-whatsapp').css({
            'font-size': '5px'
            }),
            $('.fa-yahoo, .fa-facebook, .fa-whatsapp').css({
                'transform': 'rotate(-720deg)'
                })
    }
   });
   $('.fa-yahoo, .fa-facebook, .fa-whatsapp').hover(function(){
    $(this).css({
        'transform': 'rotate(360deg)'
    })
   },function(){
    $(this).css({
        'transform': 'rotate(-360deg)'
    })
   })
console.log($('.conected').offset().top)
  
})

