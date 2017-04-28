/**
 * Created by admin on 2017/2/8.
 */
$(function () {
    var jie = 0;
    $('.start').css({height:$(window).height()});
    var timer = null;
    clearTimeout(timer);
    timer = setTimeout(function () {
        $('.img').animate({top:0},1000);
        $('.text').animate({top:400},1000).fadeIn(1000);
    },2000);
    timer = setTimeout(function () {
        $('.start').animate({top:-1000},600);
        jie=1;
    },5000);

    $('.start').click(function () {
        
    })

    var $h = $(window).height()-50;
    $('.zhangxue_conn,.roll_wrap').css({height:$h});
    $(window).resize(function () {
        $h = $(window).height()-50;
        $('.zhangxue_conn,.roll_wrap').css({height:$h});
        clearTimeout(timer);
        timer = setTimeout(function () {

            dong();
        },200);

    });
    var timer = null;
    var n=0,m=0;
    var len = $('.zhangxue_conn .roll').length;
    var lis = $('.header ul li');
    var w = $('.zhangxue_conn .roll').height();
    var b = true;
   /*function me() {
       $('.zhangxue_conn').bind('DOMMouseScroll',function (e) {
           if (e.originalEvent.detail > 0) {
               // scroll down
               if(b==true){
                   b=false;
                   n++;
                   if(n>len-1){n=1;$('.zhangxue_conn .roll_wrap').animate({top:0},0);}
                   m++;
                   if(m>len-2){m=0;}
                   zhangxueAnimate();
               }

           } else {
               // scroll up
               if(b==true){
                   b=false;
                   n--;
                   if(n<0){n=len-2;$('.zhangxue_conn .roll_wrap').animate({top:-w*n},0);}
                   m--;
                   if(m<0){
                       m=len-2;
                   }
                   zhangxueAnimate();
               }
           }

           // prevent page fom scrolling
           return false;
       }).bind('mousewheel', function(e) {

           if (e.originalEvent.wheelDelta < 0) {
               // scroll down
               if(b==true){
                   b=false;
                   n++;
                   if(n>len-1){n=1;$('.zhangxue_conn .roll_wrap').animate({top:0},0);}
                   m++;
                   if(m>len-2){m=0;}
                   zhangxueAnimate();
               }

               // console.log(n);
           } else {
               // scroll up
               if(b==true){
                   b=false;
                   n--;
                   if(n<0){n=len-2;$('.zhangxue_conn .roll_wrap').animate({top:-w*n},0);}
                   m--;
                   if(m<0){
                       m=len-2;
                   }
                   zhangxueAnimate();
               }

           }

           // prevent page fom scrolling
           return false;
       });
       function zhangxueAnimate() {
           $('.zhangxue_conn .roll_wrap').animate({top:-w*n},600,function () {
               b=true;
           });
           lis.removeClass('now').eq(m).addClass('now');
       }
       lis.click(function () {
           n = $(this).index();
           m=n;
           if(b==true){
               b=false;
               zhangxueAnimate();
           }

       });
   }
    me();*/
    /*监听鼠标滚轮事件   IE和谷歌ommousewheel   /   火狐DOMMouseScroll*/
    /*火狐*/
    if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',fnMouseRoll,false);//默认为false，可以省略
    }
    /*ie 和谷歌*/
    window.onmousewheel = document.onmousewheel=fnMouseRoll;
    /*监听滚轮，判断是向上还是向下*/
    function fnMouseRoll(e) {
        e = e||window.event;
        /*IE 谷歌*/
        if(e.wheelDelta>0){
            down();
        }else if(e.wheelDelta<0){

            if(jie==1){
                up();
            }
        }
        /*火狐*/
        else if(e.detail<0){
            down();
        }else if(e.detail>0){
            if(jie==1){
                up();
            }
        }
    }
    var q=0;
    function down() {
        if(b==true){
            b=false;
            q--;
            if(q<0){q=0;}

            dong();
        }

    }
    function up() {
        if(b==true){
            b=false;
            q++;
            if(q>len-1){q=len-1}
            if(q==5){
                q=4;
            }
            dong();
        }

    }
    function dong() {
        if(q==1){
            $('.zhangxue_conn .roll_wrap').animate({top:-w*q},600,function () {
                b=true;
            });
            lis.removeClass('now').eq(q-1).addClass('now');
        }else if(q==0){
            $('.zhangxue_conn .roll_wrap').animate({top:-w*q},600,function () {
                b=true;
            });
            lis.removeClass('now').eq(q).addClass('now');
        }else if(q==4){
            $('.zhangxue_conn .roll_wrap').animate({top:-w*(q)},600,function () {
                b=true;
            });
            lis.removeClass('now').eq(q-1).addClass('now');
            lis.eq(q).addClass('now');

        }else{
            $('.zhangxue_conn .roll_wrap').animate({top:-w*q},600,function () {
           b=true;
        });
            lis.removeClass('now').eq(q-1).addClass('now');
        }
    }
    lis.click(function () {
        if(b==true){
            b=false;
            q=$(this).index();
            if(q==4){
                q=3;
            }
            if(q==0){
                $('.zhangxue_conn .roll_wrap').animate({top:-w*(q+1)},600,function () {
                    b=true;
                });
                lis.removeClass('now').eq(q).addClass('now');
            }else if(q==3){
                $('.zhangxue_conn .roll_wrap').animate({top:-w*(q+1)},600,function () {
                    b=true;
                });
                lis.removeClass('now').eq(q).addClass('now');lis.eq(q+1).addClass('now');

            }else {
                $('.zhangxue_conn .roll_wrap').animate({top:-w*(q+1)},600,function () {
                    b=true;
                });
                lis.removeClass('now').eq(q).addClass('now');
            }

        }
    });
    /*$('.toHome').click(function () {
        window.open('index.html');
    });*/
    var datastr = window.location.hash.substr(1);
    console.log(datastr);
    if(datastr==2||datastr==3||datastr==4||datastr==1){
        $('.start').slideUp(0);
        jie=1;
        q=datastr;
        dong();
    }
});
$(function () {
    var wt =$(window).width();
    $(".roll2,.roll2 .roll2_conn>div").css({width:wt,overflow:'hidden'});
    $(".roll2 .roll2_conn").css({width:wt*3});
    var next=$(".roll2_next");
    var prev=$(".roll2_prev");
    var p=0;
    var lens=$(".roll2 .roll2_conn>div").length;
    next.click(function(){
        p++;
        if(p>lens-1){
            p=lens-1;
            /* uL.animate({
             left:0
             },0)*/
        }
        $(".roll2 .roll2_conn").animate({
            left:-wt*p
        },600)
    })
    prev.click(function(){
        p--;
        if(p<0){
            p=0;
            /* uL.animate({
             left:-(lens-1)*ulLis
             },0)*/
        }
        $(".roll2 .roll2_conn").animate({
            left:-wt*p
        },600);
    });
    

});
$(function () {
    $('.roll3 .roll3_conn .opt').fadeOut(600).fadeIn(400)
})
$(function () {
    var rfw =$(window).width();
    $('.roll4,.roll4 .roll4_wrap>div').css({width:rfw,overflow:'hidden'});
    $('.roll4 .roll4_wrap').css({width:rfw*2});
    var h=0;
    $('.roll4 .lr .prev').click(function () {
        $('.roll4 .lr .next').find('span').animate({left:-78},300,function () {
            $('.roll4 .lr .prev').find('span').stop().animate({left:0},300)
        });
        
        h--;
        if(h<0){h=0;}
        $('.roll4 .roll4_wrap').animate({left:-rfw*h},600);
    });
    $('.roll4 .lr .next').click(function () {
        $('.roll4 .lr .prev').find('span').animate({left:78},300,function () {
            $('.roll4 .lr .next').find('span').stop().animate({left:0},300)
        });
        h++;
        if(h>1){h=1;}
        $('.roll4 .roll4_wrap').animate({left:-rfw*h},600);
    });
});
$(function () {


});
/*$(function () {
    /!*if($('.start').top()==0){
        /!*火狐*!/
        if(document.removeEventListener()){
            document.removeEventListener('DOMMouseScroll',fnMouseRoll,false);//默认为false，可以省略
        }
        /!*ie 和谷歌*!/
        window.onmousewheel = document.onmousewheel=null;
    }else if($('.start').top()==-1000){
        if(document.addEventListener){
            document.addEventListener('DOMMouseScroll',fnMouseRoll,false);//默认为false，可以省略
        }
        /!*ie 和谷歌*!/
        window.onmousewheel = document.onmousewheel=fnMouseRoll;
    }*!/
    
})*/


/*jQuery循环*/
/*$('ul li').each(function (i) {
    var that = $(this);
    setTimeout(function () {
        that.style.display = "block";
    },800*i);
});*/
$(function(){
    //返回顶部效果（判断是否在顶部以隐藏显示按钮）
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#scrollTop_wrap').fadeIn();
        } else {
            $('#scrollTop_wrap').fadeOut(0);
        }
    });

    // 点击返回顶部滚动
    $('#scrollTop').click(function () {

        $(this).parent().animate({"bottom":1000,"opacity":0},400,function(){
            $('#scrollTop_wrap').css("opacity",1).fadeOut(0).css("bottom",200);
        });
        $('body,html').animate({
            scrollTop: 0
        }, 400);
    });



})


