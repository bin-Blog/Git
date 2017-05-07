/**
 * Created by PENGBIN on 2017/3/30.
 */
$(function () {

  /*
  * 获取用户信息*/
  function userInfo() {
    $.ajax({
      url:"/Handler/AdminHandler.ashx?action=returnuserinfo",
      type:"post",
      dataType:"json",
      async:false,
      data:""
    }).done(function (result) {
      if(result.success){
        $('#userName span').text(result.turename);
      }
    })
  };
  userInfo();
  function quit() {
    $.ajax({
      url:"/Handler/AdminHandler.ashx?action=quit",
      type:"get",
      dataType:"json",
      data:"",
      async:false
    }).done(function (result) {
      if(result.success){
        window.location = "index.html";
      }
    })

  };
  var GLOBAL = GLOBAL || {};
  function checkPwd() {

    GLOBAL.pwdWin=new Ext.custom.basicWindow({
      title:"修改密码",
      width:500,
      height:340,
      items:[
        new Ext.custom.middletextfield({
          margin:"50 0 0 50",
          fieldLabel:"当前密码",
          itemId:"nowPwd",
          beforeLabelTextTpl:required,
        }),
        new Ext.custom.middletextfield({
          margin:"20 0 0 50",
          fieldLabel:"新密码",
          itemId:"newPwd",
          emptyText:"请输入新密码",
          beforeLabelTextTpl:required,
        }),
        new Ext.custom.middletextfield({
          margin:"20 0 0 50",
          fieldLabel:"确认密码",
          itemId:"secondPwd",
          beforeLabelTextTpl:required,
        }),
        {
          layout:"hbox",
          margin:"20 0 0 100",
          items:[{
            xtype:"button",
            width:100,
            height:34,
            margin:"0 0 0 40",
            text:"确定",
            handler:function () {
              var nowPwd = GLOBAL.pwdWin.down('#nowPwd').getValue(),
                newPwd = GLOBAL.pwdWin.down('#newPwd').getValue(),
                secondPwd = GLOBAL.pwdWin.down('#secondPwd').getValue();
              if(nowPwd!=''&&newPwd==secondPwd&&newPwd!=''&&secondPwd!=''&&nowPwd!=newPwd){
                $.ajax({
                  url:"/Handler/AdminHandler.ashx?action=updatepass",
                  type:"post",
                  dataType:"json",
                  data:{
                    userPwd:nowPwd,
                    newPwd:newPwd
                  },
                  async:false
                }).done(function (result) {
                  if(result.success){
                    alert(result.success);
                    GLOBAL.pwdWin.hide();
                  }
                });
              }else {
                alert("信息不完整");
              }
            }
          },{
            xtype:"button",
            width:100,
            margin:"0 0 0 20",
            style:"background:green",
            height:34,
            text:"取消",
            handler:function () {
              GLOBAL.pwdWin.hide();
            }
          }]
        }

      ]
    }).show();


  }
  $('#quit').click(function () {
    quit();
  });
  $('#lock').click(function () {
    checkPwd();
  });
});
