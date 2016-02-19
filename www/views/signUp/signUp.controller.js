(function(){
    'use strict';
    angular.module('ProjectClean.controllers')

    .controller('SignUpCtrl', function($scope, $state, SignUpServices, AppErrorServices) {
      /* Sign Up form properties */
      this.newUser = {};
      this.newUser.firstName = '';
      this.newUser.lastName = '';
      // this.newUser.mobileNumber = '';
      this.newUser.email = '';
      this.newUser.password = '';

      /* username is exact replica of mobile number and must be unique */
      this.newUser.username = '';

      /* Sign Up Error */
      this.signUpError = '';

      this.signUp = function(isValid){
      	if(isValid === true)
      	{
      		this.newUser.username = this.newUser.mobileNumber.toString();

      		SignUpServices.registerUser(this.newUser)
      		.then(function(responseData){
      			if(responseData.status === 200)
      			{
      				/* On successful login take the user to login page */
      				$state.go('login');
      			} else {
      				AppErrorServices.throwError('Invalid Details', responseData.data.message)
      				.then(function(){
      					console.log('Error Acknowledged by user.');
      				});
      			}
      		});
      	} else if(isValid === false) {
      		AppErrorServices.throwError('Invalid Details', 'Please fill correct details.')
      		.then(function(){
      			console.log('Error Acknowledged by user.');
      		});
      	}
      };

    });
})();