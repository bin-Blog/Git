/**
 * Created by admin on 2017/1/13.
 */
/*============banner Js=========*/
$(function () {
    var n = 0;
    var len =$('.btn li').length;
    $('.btn li').click(function () {
        var i = $(this).index();
        $(this).addClass('now1').siblings().removeClass('now1');
        $('.banner').eq(i).fadeIn(400).siblings('.banner').fadeOut(100);
        n=i;
        bannerAnimated();
    });

    $('.prev').click(function () {
        n--;
        if(n<0){n=len-1;}
        $(this).siblings('.btn').find('li').removeClass('now1').eq(n).addClass('now1');
        $('.banner').eq(n).fadeIn(400).siblings('.banner').fadeOut(100);
        bannerAnimated();
    });
    $('.next').click(function () {
        n++;
        if(n>len-1){n=0;}
        $(this).siblings('.btn').find('li').removeClass('now1').eq(n).addClass('now1');
        $('.banner').eq(n).fadeIn(400).siblings('.banner').fadeOut(100);
        bannerAnimated();
    });
    function bannerAnimated() {
        $('.banner').eq(n).find('.banner_02').removeClass('animated fadeInLeft').addClass('animated fadeInLeft');
        $('.banner').eq(n).find('.banner_01').removeClass('animated fadeInRight').addClass('animated fadeInRight');
    }
    // bannerAnimated();
    function playauto() {
        n++;
        if(n>len-1){n=0;}
        $('.next').siblings('.btn').find('li').removeClass('now1').eq(n).addClass('now1');
        $('.banner').eq(n).fadeIn(400).siblings('.banner').fadeOut(100);
        bannerAnimated();
    }
    var timer = setInterval(playauto,3000);
    $('.banner').hover(function () {
        clearInterval(timer);
    },function () {
        timer = setInterval(playauto,3000);
    });
    $('.banner_btn').hover(function () {
        clearInterval(timer);
    },function () {
        timer = setInterval(playauto,3000);
    });




});
/*============zhangxue Js=======*/
$(function () {

    var len =$('.linePoint li').length;
    $('.linePoint li').click(function () {
        var i = $(this).index();
        $(this).find('em').addClass('show').parent().siblings().find('em').removeClass('show');
        var j = i>m?'fadeInRight':'fadeInLeft';
        m=i;
        Animate(j);
    });
    var m=0;
    $('.conn_prev').click(function () {
        m--;
        if(m<0){m=len-1;}
        $(this).parent('.conn_btn').siblings().find('li').find('em').removeClass('show').eq(m).addClass('show');
        Animate('fadeInLeft');
    });
    $('.conn_next').click(function () {
        m++;
        if(m>len-1){m=0;}
        $(this).parent('.conn_btn').siblings().find('li').find('em').removeClass('show').eq(m).addClass('show');
        Animate('fadeInRight');
    });
    function Animate(fangxiang) {
        $('.content').fadeOut(100).eq(m).fadeIn(400);
        $('.content').eq(m).removeClass('animated fadeInLeft fadeInRight').addClass('animated '+fangxiang);

    }

});
/*============scope Js==========*/
$(function () {
    $('.scope_ico').click(function () {
        $(this).parent().parent().siblings('ul').slideToggle();
        $(this).parent().parent().parent().siblings('.scope').find('ul').slideUp();
        $(this).parent().parent().siblings('i').toggleClass('scope_now');
        $(this).parent().parent().parent().siblings('.scope').find('i').removeClass('scope_now');

    })
    $('.scope i').click(function () {
        $(this).toggleClass('scope_now');
        $(this).parent().siblings().find('i').removeClass('scope_now');
        $(this).siblings('ul').slideToggle();
        $(this).parent().siblings('.scope').find('ul').slideUp();
    })
});
/*============team Js   1 */
// $(function () {
//     var n = 0;
//     var len =$('.team_btns li').length;
//     $('.team_btns li').click(function () {
//         var i = $(this).index();
//         n=i;
//         if(i>n){
//             teamAnimated('bounceInRight'/*,{left:100}*/);
//             // teamAnimated('bounceInRight'/*,{left:0}*/);
//         }else{
//             teamAnimated('bounceInLeft'/*,{right:100}*/);
//             // teamAnimated('bounceInLeft'/*,{right:0}*/);
//         }
//     });
//     $('.team_prev').click(function () {
//         n--;
//         if(n<0){n=len-1;}
//         leftTeam('bounceInLeft'/*,{left:100}*/);
//         // teamAnimated('bounceInLeft'/*,{left:0}*/);
//     });
//     $('.team_next').click(function () {
//         n++;
//         if(n>len-1){n=0;}
//         teamAnimated('bounceInRight'/*,{left:100}*/);
//         // teamAnimated('bounceInRight'/*,{left:0}*/);
//     });
//     function leftTeam(fangxiang) {
//         $('.team_btns li').removeClass('team_now').eq(n).addClass('team_now');
//         $('.team_bottom').eq(n).fadeIn(400).siblings('.team_bottom').fadeOut(100);
//         $('.team_bottom').eq(n).animate({left:-1100*n},600,'backOut',function () {
//             $('.team_bottom').animate({left:0},0);
//         }).removeClass('animated bounceInLeft bounceInRight').addClass('animated '+fangxiang);
//     }
//     function teamAnimated(fangxiang/*,zuoyou*/) {
//         $('.team_btns li').removeClass('team_now').eq(n).addClass('team_now');
//         $('.team_bottom').eq(n).fadeIn(400).siblings('.team_bottom').fadeOut(100);
//         $('.team_bottom').eq(n).animate({left:-1100*n},600,'backIn',function () {
//             $('.team_bottom').animate({left:0},0);
//         }).removeClass('animated bounceInLeft bounceInRight').addClass('animated '+fangxiang);
//     }
//     function play() {
//         n++;
//         if(n>len-1){n=0;}
//         $('.team_next').siblings('.team_btns').find('li').removeClass('team_now').eq(n).addClass('team_now');
//         teamAnimated('bounceInRight'/*,{left:100}*/);
//         // teamAnimated('bounceInRight'/*,{left:0}*/);
//     }
//     var timer = setInterval(play,4000);
//     $('.team_bottom').hover(function () {
//         clearInterval(timer);
//     },function () {
//         timer = setInterval(play,4000);
//     });
//     $('.team_btn').hover(function () {
//         clearInterval(timer);
//     },function () {
//         timer = setInterval(play,4000);
//     });
// })
/*============team Js   2 */
$(function(){
    var next = $(".team_next");
    var prev = $(".team_prev");
    var ulLis = $(".box>ul>li");
    var olLis = $(".box>ol li");
    var ul = $(".box ul");
    var w  = ulLis.eq(0).width();
    var k=0;
    var j = 0;
    var len = ulLis.length;
    var tugou=1;
    var feilvbintugou=0;
    var bojian=tugou;

    olLis.click(function(){
        var i = $(this).index();
        ul.animate({left:-w*i},600,"backIn");
        j=i;
        k=i;
        olLis.removeClass("team_now").eq(j).addClass("team_now");
    });

    next.click(function(){
        if(bojian==tugou){
            bojian=feilvbintugou;
            autoRight();
        }

    });
    function autoLeft(){
        k--;
        j--;
        if(j<0){
            j=len-2;
        }
        if(k==-1){
            ul.animate({left:-w*(len-1)},0);
            k=len-2;
            ul.animate({left:-w*k},600,"backOut",function(){
                if(k==0){
                    k=len-1;
                    ul.animate({left:-w*k},0)
                }
                bojian=tugou;
            });
        }else{
            olLis.removeClass("team_now").eq(j).addClass("team_now");
            ul.animate({left:-w*k},600,"backOut",function(){
                if(k==0){
                    k=len-1;
                    ul.animate({left:-w*k},0)
                }
                bojian=tugou;
            })
        }

    }
    function autoRight(){
        k++;
        j++;
        if(j>len-2){
            j=0;
        }
        olLis.removeClass("team_now").eq(j).addClass("team_now");
        ul.animate({left:w*-k},600,"backIn",function(){
            if(k==len-1){
                k=0;
                ul.animate({left:0},0)
            }
            bojian=tugou;
        });
    }
    prev.click(function(){
        if(bojian==tugou){
            bojian=feilvbintugou;
            autoLeft();
        }
    });

    var timer = setInterval(autoRight,4000);
    $('.team_bottom').hover(function () {
        clearInterval(timer);
    },function () {
        timer = setInterval(autoRight,4000);
    });
    $('.team_btn').hover(function () {
        clearInterval(timer);
    },function () {
        timer = setInterval(autoRight,4000);
    });
    $('.team_btns').hover(function () {
        clearInterval(timer);
    },function () {
        timer = setInterval(autoRight,4000);
    });

    /* next.click(function(){
     k++;
     if(k==len){
     k=0
     }
     olLis.removeClass("col").eq(k).addClass("col")
     ul.animate({left:-w},600,"backIn",function(){
     ul.append($(".box ul li:first-child"));
     ul.animate({left:0},0);
     });
     });

     prev.click(function(){
     $(".box ul li:last-child").insertBefore($(".box ul li:first-child"));
     console.log(ul);
     ul.animate({left:-w},0,function(){
     ul.animate({left:0},600,"backOut")
     })
     });*/
});
/*============footer js    */
/*$(function () {
    $('.footer .yinyue p').click(function () {
        var index = $(this).index();
        if(navigator.userAgent.indexOf('Chrome')>=0){
            $('.footer').append('<embed src="music/sound0'+index+'.mp3" type="" autoplay="true" loop="false" hidden="true">');
        }else if(navigator.userAgent.indexOf('Firefox')>=0){
            $('.footer').append('<object data="../music/sound0'+index+'.mp3" type="">'+'<param name="src" value="../music/sound0'+index+'.mp3">'+'<param name="autoplay" value="1">'+'<param name="playcount" value="0">'+'</object>');
        }else {
            $('.footer').append('<bgsound src="music/sound0'+ index +'.mp3" autoplay="true" loop= "false"></bgsound>');
        }
    });
});*/

/*scrollTop  js*/
$(function () {
    $(window).scroll(function () {  //窗口监听事件
        if($(window).scrollTop()>400){
            $('.scroll_top').fadeIn();
        }else {
            $('.scroll_top').fadeOut();
        }
    });
    $('.scroll_top').click(function () {
        $('html,body').animate({scrollTop:0},800);
        $('.scroll_top').animate({top:-10+'%'},800,function () {
            $(this).animate({top:70+'%'},0);
        });
    })
});

$(function () {
    $('.our_partner .partner_ico>p').hover(function () {
        $(this).find('span').fadeIn(400);
    },function () {
        $(this).find('span').fadeOut(100);
    })
});
/*===========baidu Map Js*/
    //创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMarker();//向地图中添加marker
    }

//创建地图函数：
function createMap(){
    var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
    var point = new BMap.Point(116.356251,40.091996);//定义一个中心点坐标
    map.centerAndZoom(point,16);//设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map;//将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent(){
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    // map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    // map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard();//启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl(){
    //向地图中添加缩放控件
    var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(ctrl_nav);
    //向地图中添加缩略图控件
    var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
    map.addControl(ctrl_ove);
    //向地图中添加比例尺控件
    var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    map.addControl(ctrl_sca);
}

//标注点数组
var markerArr = [{title:"1",content:"我的备注",point:"116.355946|40.094811",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
];
//创建marker
function addMarker(){
    for(var i=0;i<markerArr.length;i++){
        var json = markerArr[i];
        var p0 = json.point.split("|")[0];
        var p1 = json.point.split("|")[1];
        var point = new BMap.Point(p0,p1);
        var iconImg = createIcon(json.icon);
        var marker = new BMap.Marker(point,{icon:iconImg});
        var iw = createInfoWindow(i);
        var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
        marker.setLabel(label);
        map.addOverlay(marker);
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        label.setStyle({
            borderColor:"#808080",
            color:"#333",
            cursor:"pointer"
        });

        (function(){
            var index = i;
            var _iw = createInfoWindow(i);
            var _marker = marker;
            _marker.addEventListener("click",function(){
                this.openInfoWindow(_iw);
            });
            _iw.addEventListener("open",function(){
                _marker.getLabel().hide();
            })
            _iw.addEventListener("close",function(){
                _marker.getLabel().show();
            })
            label.addEventListener("click",function(){
                _marker.openInfoWindow(_iw);
            })
            if(!!json.isOpen){
                label.hide();
                _marker.openInfoWindow(_iw);
            }
        })()
    }
}
//创建InfoWindow
function createInfoWindow(i){
    var json = markerArr[i];
    var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
    return iw;
}
//创建一个Icon
function createIcon(json){
    var icon = new BMap.Icon("http://map.baidu.com/image/us_cursor.gif", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
    return icon;

}

initMap();//创建和初始化地图
