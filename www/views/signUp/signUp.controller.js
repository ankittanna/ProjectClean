(function(){
    'use strict';
    angular.module('ProjectClean.controllers')

    .controller('SignUpCtrl', function($scope, $ionicModal, $timeout, $state) {

      this.signUp = function(isValid){
      	if(isValid === true)
      	{
      		alert("Its Valid");
      		$state.go('login');
      	} else if(isValid === false) {
      		alert("Its invalid");
      	}
        // Upon successful registration take the user to login page
      };

    });
})();