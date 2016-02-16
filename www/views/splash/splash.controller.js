(function(){
  'use strict';
    angular.module('ProjectClean.controllers')
    .controller('SplashCtrl', function($scope, $ionicModal, $timeout, $state) {
        $timeout(function() {
            $state.go('login');
        }, 2000);
    });
})();