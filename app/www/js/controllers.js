angular.module('starter.controllers', [])


  .controller('HomeCtrl', function($scope,$http){
    $scope.courseId = "";

        $http({
          url: "/Handler/OnCourseHandler.ashx?action=learnshow",
          method: "post",
          params: ""
        }).success(function (result) {
          $scope.lessInfo = result;
        });
  })

//课程列表
.controller('ChatsCtrl', function($scope,$http) {

//			点击进入详情页
  $scope.listDetail = function (id) {
    window.location = "#/tab/study/"+id;
  }


  //请求专业列表
  $http({
    url:"/Handler/OfflineCourseHandler.ashx?action=getcategory",
    method:"post",
    //没有发送
    params:""
  }).success(function (result) {
    $scope.pro = result.data;
  });

  //请求价格列表
  $scope.priceList = [
    {"id":"0","title":"全部"},
    {"id":"1","title":"收费"},
    {"id":"2","title":"免费"}
  ];


  //请求课程列表
  $scope.searchText = "";
  $scope.CategoryId = "";
  $scope.CpriceId = "";
  //当前页
  $scope.nowPage = 0;
  $scope.course = [];
  $scope.moreData = true;

  $scope.goPage = function (pageStart) {

    var data = {
      searchText:$scope.searchText,
      CategoryTwo:$scope.CategoryId,
      CpriceId:$scope.CpriceId,
      pageStart:pageStart
    };
    $http({
      url:"/Handler/OfflineCourseHandler.ashx?action=courseshow",
      method:"post",
      params:data
    }).success(function (result) {
      $scope.totalPage = Math.ceil(result.data.count/result.data.pageSize);
      $scope.course = $scope.course.concat(result.data.list);
      $scope.nowPage = result.data.pageStart;
      if ($scope.nowPage>=$scope.totalPage){
        $scope.moreData = false;
      }
    });
  };

  //下拉刷新
  $scope.doRefresh = function(){
    $scope.nowPage = 0;
    $scope.course = [];
    $scope.moreData = true;
    $scope.doSearch('','','');
    $scope.$broadcast("scroll.refreshComplete");
  }
  //上拉加载
  $scope.loadMore = function () {
    $scope.goPage($scope.nowPage+1);
    $scope.$broadcast("scroll.infiniteScrollComplete");
  }

  //筛选课程
  $scope.doSearch = function (CategoryId,CpriceId,searchText) {
    $scope.searchText = searchText;
    $scope.CpriceId = CpriceId;
    $scope.CategoryId = CategoryId;
    $scope.nowPage = 0;
    $scope.course = [];
    $scope.moreData = true;
    $scope.profession = false;
    $scope.price = false;
    $scope.listColor = {'color':""};
    $scope.priceColor = {'color':""};
    $scope.$broadcast("scroll.infiniteScrollComplete");
    $scope.loadMore();
  }


  $scope.profession = false;
  $scope.professions = true;
  $scope.price = false;
  $scope.prices = false;
  //专业分类列表
  $scope.listShow = function () {
    $scope.profession = !$scope.profession;
    $scope.price = false;
    $scope.prices = false;
    $scope.professions = true;
    $scope.priceColor = {'color':""};
    if($scope.profession){
      $scope.listColor = {'color':"#00f"};
    }else {
      $scope.listColor = {'color':""};
    }
  };
  //价格
  $scope.priceShow = function () {
    $scope.price = !$scope.price;
    $scope.profession = false;
    $scope.professions = false;
    $scope.prices = true;
    $scope.listColor = {'color':""};
    if($scope.price){
      $scope.priceColor = {'color':"#00f"};
    }else {
      $scope.priceColor = {'color':""};
    }
  };
})



//自定义指令
.directive('hideTabs',function ($scope) {
    return {
      restrict:"A",           //A  属性attribute   E    元素Element    C    类名class     M   注释
      link:function (scope,jqLite,attr) {    //操作页面的具体元素
        //scope   和$scope功能差不多，控制当前函数里的作用域
      //  jqLite  可以控制当前元素的属性和样式
      //  attr    指代当前属性本身
      //   console.log(arguments);
        //相当于事件绑定     跳转是发生的事件
        $scope.$on("$ionicView.beforeEnter",function () {
          $rootScope.hideTabs = attr;
        })
        $scope.$on("$ionicView.beforeLeave",function () {
          $rootScope.hideTabs = false;
        })
      }
    }
})
//
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})




  //注册
.controller('LoginCtrl', function($scope,$http,$ionicPopup) {
  $scope.userName = "";
  $scope.userPwd = "";
  $scope.secPwd = "";
  $scope.email = "";
  $scope.phone   = "";
  $scope.userPic = "";
  $scope.nickname = "";


  $scope.complete = function (userName,userPwd,secPwd,email,phone,userPic,nickname) {
    var data = {
      userName: userName,
      userPwd: userPwd,
      secPwd: secPwd,
      email: email,
      phone: phone,
      userPic: userPic,
      nickname: nickname
    };
    if(userPwd===secPwd && userName!='' && email!='' && phone!='' && userPwd!=''){
      $http({
        url:"/Handler/UserHandler.ashx?action=add",
        method:"post",
        params:data
      }).success(function (result) {
        if(result.success){
          $ionicPopup.alert({
            title:"成功"
          })
          window.location = "#/tab/account";
        }
      });
    }/*else{
      $ionicPopup.alert({
        title:"密码不一致",
        // template:result.err
      })
    }*/

  }


})




//信息页面
.controller('siginCtrl', function($scope,$http,$ionicPopup) {

  $http({
    url: "/Handler/UserHandler.ashx?action=isLogin",
    method: "post",
    params: ""
  }).success(function (result) {
    if(result.success){
      $http({
        url: "/Handler/OnCourseHandler.ashx?action=returnuserinfo",
        method: "get",
        params: ""
      }).success(function (result) {
        $scope.info = result;
        /*$scope.email = result.email;
        $scope.name = result.userName;
        $scope.phone = result.phone;
        $scope.nickname = result.nickname;
        $scope.userPic = result.userPic;*/
      });
    }
  });

  //退出登录
  $scope.loginOut = function () {
    $http({
      url: "/Handler/UserHandler.ashx?action=quit",
      method: "post",
      params: ""
    }).success(function (result) {
      if(result.success){
        //弹出框
        $ionicPopup.alert({
          title:result.success,
          template:"欢迎下次登录!"
        });
        window.location = "#/tab/account";
      }
    });
  }

})




//我的课程
.controller('CourseCtrl', function($scope,$http) {
  $scope.myCourses = true;
  $scope.myCourse = false;
  $scope.collect = false;
  $scope.collects = false;
  //我的课程
  $scope.myCourShow = function () {
    $scope.myCourse = !$scope.myCourse;
    $scope.myCourses = true;
    $scope.collect = false;
    $scope.collects = false;
    $scope.collectColor = {'color':""};
    if($scope.myCourse){
      $scope.myCourColor = {'color':"#00f"};
    }else {
      $scope.myCourColor = {'color':""};
    }
  };


  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };

  $scope.listDetail = function (id) {
    window.location = "#/tab/study/"+id;
  }

  //收藏课程
  $scope.collectShow = function () {
    $scope.collect = !$scope.collect;
    $scope.myCourse = false;
    $scope.myCourses = false;
    $scope.collects = true;
    $scope.myCourColor = {'color':""};
    if($scope.collect){
      $scope.collectColor = {'color':"#00f"};
    }else {
      $scope.collectColor = {'color':""};
    }
  };

//我的课程
  $http({
    url: "/Handler/UserHandler.ashx?action=isLogin",
    method: "post",
    params: ""
  }).success(function (result) {
    if(result.success){
      $http({
        url:"/Handler/OnCourseHandler.ashx?action=mycourse",
        method:"get",
        params:""
      }).success(function (result) {
        $scope.myCour = result.data;
      });
    }

  })


//收藏课程
  $http({
    url:"/Handler/OnCourseHandler.ashx?action=mycollection",
    method:"get",
    params:""
  }).then(function (result) {
    $scope.collect = result.data;
  });

  /*$scope.data = {
    showDelete: false
  };*/

  /*$scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };*/
//  删除
  $scope.del = function (id) {
    $http({
      url:"/Handler/OnCourseHandler.ashx?action=deletecollection",
      method:"post",
      params:{
        courseId:id
      }
    }).success(function (result) {
      if(result.success){
        alert(result.success);
      }
    })
  }

})




//详情页
.controller('HomeCtrl', function($scope,$http) {

})




//  登录注册页面
.controller('AccountCtrl', function($scope,$http,$ionicPopup) {
  $scope.settings = {
    enableFriends: true
  };
  //登录
  $scope.userName = "";
  $scope.userPwd = "";

  $scope.Success = function (userName,userPwd) {
    var data = {
      userName: userName,
      userPwd: userPwd
    };
    $http({
      url:"/Handler/UserHandler.ashx?action=login",
      method:"post",
      params:data
    }).success(function (result) {
      if(result.success){
        window.location = "#/tab/success";
      }else {
        $ionicPopup.alert({
          title:"错误",
          template:result.err
        });
      }
    });
  }


  /*$scope.loginData = {
    userName: "",
    userPwd: ""
  }*/


})




//  首页
.controller('DashCtrl', function($scope,$http,$ionicSlideBoxDelegate) {
    /*$scope.get("","")
      .success(function () {

      });
  $scope.post("","")
    .success(function () {

    });*/
  /*$scope.post("/Handler/OfflineCourseHandler.ashx?action=indexshow","")
    .success(function (result) {
      $scope.banner = result.data;
      $ionicSlideBoxDelegate.$getByHandle("slide").update();
      $ionicSlideBoxDelegate.$getByHandle("slide").loop(true);
    });*/


  $scope.listDetail = function (id) {
    window.location = "#/tab/study/"+id;
  }

  $http({
    url:"/Handler/OfflineCourseHandler.ashx?action=indexshow",
    method:"POST",
    params:""
  }).success(function (result) {
    /*轮播图数据*/
    $scope.list = result.data;
    $ionicSlideBoxDelegate.$getByHandle("slide").update();
    $ionicSlideBoxDelegate.$getByHandle("slide").loop(true);
    // $scope.list = result.data;
    //好评榜
    $scope.goodList = [[result.data.goodList[0],result.data.goodList[1]],[result.data.goodList[2],result.data.goodList[3]]];

    //最新课程
    $scope.newList = [[result.data.newList[0],result.data.newList[1]],[result.data.newList[2],result.data.newList[3]]];

    //猜你喜欢
    $scope.checkList = result.data.chooseList;


    function reduceArray (arr,count) {
      var len,ar = Array(),k = 0;
      if (arr.length % count == 0) {
        len = parseInt(arr.length / count);
      } else{
        len = parseInt(arr.length / count) + 1;
      }
      for (var i = 0;i < len;i++) {
        if (ar[i]) {
          ar[i] = ar[i];
        }else{
          ar[i] = [];
        }
        for (var a = 0;a < count;a++) {
          ar[i][a] = arr[k];
          if (ar[i][a] == undefined) {
            ar[i].length = arr.length % count;
          }
          k++;
        }
      }
      var newAr = ar;
      return newAr;
      console.log(newAr);
    }
    reduceArray([1,2,3,4],2)

  });

});
