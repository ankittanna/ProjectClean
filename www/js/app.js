// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('ProjectClean', [
  // Main Module
  'ionic', 
  
  // AngularJS Modules

  // Custom Modules
  'ProjectClean.controllers', 
  'ProjectClean.services', 
  'ProjectClean.directives',

  // Third Party Modules
  'LocalStorageModule',
  'toastr'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('splash', {
    url: '/splash',
    templateUrl: 'views/splash/splash.html',
    controller: 'SplashCtrl',
    controllerAs: 'splash'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'views/login/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('signUp', {
    url: '/signUp',
    templateUrl: 'views/signUp/signUp.html',
    controller: 'SignUpCtrl',
    controllerAs: 'signUp'
  })
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/menu/menu.html',
    controller: 'MenuCtrl'
  })
  .state('app.userHomePage', {
      url: '/userHomePage',
      views: {
        'menuContent': {
          templateUrl: 'views/userHome/userHome.html'
        }
      }
    })
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'views/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/splash');
});
