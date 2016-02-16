(function(){
    'use strict';
    angular.module('ProjectClean.controllers')

    .controller('LoginCtrl', function($scope, $ionicModal, $timeout, $state) {
      

      // Implementation Here
      this.loginUser = function(){
        console.log("Logging In...");
      };

      this.goToSignUp = function(){
        console.log("Sign Up Page");
        $state.go('signUp');
      };

    });
})();