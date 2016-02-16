(function(){
    'use strict';
    angular.module('ProjectClean.controllers')

    .controller('SignUpCtrl', function($scope, $ionicModal, $timeout, $state) {


      this.registerUser = function(){

        // Upon successful registration take the user to login page
        $state.go('login');
      };

    });
})();