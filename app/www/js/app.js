// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

    /*用于修改安卓tab居下 （在参数里要加入$ionicConfigProvider）*/
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    /*用于修改安卓tab居下 --结束*/

    $stateProvider

    //用的IonIC的路由
    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',  //当前页面路径
        abstract: true,  //只能作为父级页面加载  不能单独作为页面
        templateUrl: 'templates/tabs.html'    //
      })

      // Each tab has its own nav history stack:


      //主页
      .state('tab.dash', {
        url: '/dash',    //当前页面
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })

      .state('tab.chats', {
        url: '/chats',
        cache:false,
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })


      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        cache:false,
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

      .state('tab.login', {
        url: '/login',
        cache:false,
        views: {
          'tab-account': {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
          }
        }
      })

      .state('tab.success', {
        url: '/success',
        cache:false,
        views: {
          'tab-account': {
            templateUrl: 'templates/success.html',
            controller: 'siginCtrl'
          }
        }
      })

      .state('tab.course', {
        url: '/course',
        cache:false,
        views: {
          'tab-course': {
            templateUrl: 'templates/tab-course.html',
            controller: 'CourseCtrl'
          }
        }
      })


      .state('tab.homeStudy', {
        url: '/study/:id',
        cache:false,
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-study.html',
            controller: 'HomeCtrl'
          }
        }
      })


      .state('tab.Study', {
        url: '/study/:id',
        cache:false,
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-study.html',
            controller: 'HomeCtrl'
          }
        }
      })


      .state('tab.myStudy', {
        url: '/study/:id',
        cache:false,
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-study.html',
            controller: 'HomeCtrl'
          }
        }
      })



      .state('tab.account', {
        url: '/account',
        cache:false,
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

  });
