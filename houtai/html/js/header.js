/**
 * Created by PENGBIN on 2017/3/29.
 */
$(function () {
  var len = $('.nav_wrap div').length;
  var i =0;
  $('.h50 .nav_wrap').hover(function () {
    $('nav .nav_conn').show();
  },function () {
    $('nav .nav_conn').hide();
  });
  $('.nav_wrap>div').hover(function () {
    i = $(this).index();
    $('.nav_conn ul').hide().eq(i).show();
    $('.nav_conn').mouseover(function () {
      $(this).show().find("ul").eq(i).show();
    });
    $('.nav_conn').mouseout(function () {
      $(this).hide()
    })
  },function () {
    $('.nav_conn ul').eq(i).hide();
  });



  function hashPage(){
    if(window.location.hash){
      var hash=window.location.hash.substring(0); //从零截取  也有#号
      if(hash.length>0){
        $(hash).trigger('click')                //这里能读到#号
      }else{
        loadPage('main.html','')
      }
    }else{
      loadPage('main.html','')
    }
  }

  hashPage();

  function loadPage(iLink,id){
    var h=$(window).height()-100;
    $('#ifrmaeId').html('<iframe width="100%" height='+h+' src='+iLink+' frameborder="0"></iframe>')
    window.location.hash=id
  }


//  trigger  绑定事件，记录下当前事件的状态，直到执行下一次事件才会取消当前事件
//  delegate   处理动态数据

$('.nav_conn ul').delegate('li','click',function () {
  if($(this).attr('iLink')){
    var iLink = $(this).attr('iLink');
    var Id = $(this).attr('id');
    // alert(Id);
    loadPage(iLink,Id)
  }
});









})
