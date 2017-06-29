/**
 *实现页面中的banner轮播
 */
$(function(){
      var page = -1; //设置开始轮播的图片下标
      var stop = true; //设置轮播是否停止，true 不停止  false停止

      //实现图片轮播
    function slide(){
        if(stop){
            page++; //每次轮播，让图片下标加1（下一个图片显示）
            if(page==5){
                page = 0; //当轮播到最后一张图片的时候，再从头第一张开始
            }
            //所有的图片都先隐藏起来，所有按钮也都先不高亮
            $("#page-con li").css({"background":"#3e3e3e"});
            $("#focus img").fadeOut(200);
            //让下标为page的那张图片显示出来
            //让相应的按钮高亮
            $("#page-con li").eq(page).css({"background":"#b61b1f"});
            $("#focus img").eq(page).fadeIn();
        }
        setTimeout(slide,1500);
    }

    slide();

    /*鼠标悬停上去以后，轮播停止，鼠标移开后，轮播继续*/
    $("#focus").mouseover(function(){
        stop = false;//停止轮播
    }).mouseout(function(){
        stop = true; //继续轮播
    });
 });