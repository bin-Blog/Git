/**
 * Created by PENGBIN on 2017/2/9.
 */
$(function () {
    $('.list_title .pens').click(function () {
        $('.list_title .penLine').animate({width:320},0,function () {
            $('.list_title .penLine').animate({width:1049},1000);
        });
        $('.list_title .pens').animate({right:650},0,function () {
            $('.list_title .pens').animate({right:0},1000);
        });
    });
    
    var $article = $('.articles');
    $article.hover(function () {
        $(this).find('.sanJiao').stop().animate({left:50},500);
        $(this).find('.art_wrap').stop().animate({top:-3},500);
    },function () {
        $(this).find('.sanJiao').stop().animate({left:0},0);
        $(this).find('.art_wrap').animate({top:0},0);
    });
});






/*模板*/