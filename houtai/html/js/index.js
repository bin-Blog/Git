/**
 * Created by PENGBIN on 2017/3/29.
 */
$(function () {

  $('#loginBtn').click(function () {
    login();

  })
  $(document).keypress(function (e) {
    // var ev = ev||event;
    if(e.keyCode=='13'){
      login();
    }
  })
  function login() {
    /*var user = $('#loginId').val(),
      pwd = $('#userPwd').val();*/

    var data = {
      userName:$('#loginId').val(),
      password:$('#userPwd').val()
    };

    $.ajax({
      /*路径*/
      url:"/Handler/AdminLoginAndRegHandler.ashx?action=login",
      /*
       * ajax传输方式*/
      type:"post",
      /*
       * 同步 false/异步 true */
      async:false,
      /*
       * 数据类型*/
      dataType:"json",
      /*
       * 数据*/
      data:data
      /*
       * 完成执行的函数*/
    }).done(function (result) {
      if(result.success){
        window.location = "header.html";
      }
    });
  }


});
