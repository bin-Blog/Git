/**
 * Created by admin on 2017/1/10.
 */
$(function () {
    $('.header_nav div').hover(function () {
        $(this).find('.subnav').stop().slideDown(400,'elasticOut');
        $(this).find('h1').find('i').addClass('now').siblings().removeClass('now');
    },function () {
        $(this).find('.subnav').stop().slideUp(200,"elasticOut");
        $(this).find('h1').find('i').removeClass('now');
        $('.header_nav div:first').find('h1').find('i').addClass('now')
    });
    $('.subnav li').hover(function () {
        $(this).css({"background":"#009FEE"});
        $(this).find('.subnav_ico').show();
    },function () {
        $(this).css({"background":"#36264A"});
        $(this).find('.subnav_ico').hide();
    });
    /*$('.nav .subnav .gaishu').delegate(".gaishu","click",function () {
        window.open("zhangxue.html#2");
    });*/
    
    
})