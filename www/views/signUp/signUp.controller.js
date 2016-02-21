(function(){
    'use strict';
    angular.module('ProjectClean.controllers')

    .controller('SignUpCtrl', function($scope, $state, SignUpServices, AppAlertServices, LoggerServices) {
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
      				AppAlertServices.showMessage('Signed Up Successfully', 'Congratulations! You have signed up successfully!')
      				.then(function(){
                LoggerServices.success('Signed Up successfully.', 'Success!', 'Success!');
      					console.log('Message Acknowledged by user.');
      					$state.go('login');
      				});
      			} else if(responseData.status === 400 || responseData.status === 404){
      				AppAlertServices.throwError('Invalid Details', responseData.data.message)
      				.then(function(){
                LoggerServices.error('Please fill correct details.', 'Invalid Details', 'Invalid Details');
      					console.log('Error Acknowledged by user.');
      				});
      			}
      		});
      	} else if(isValid === false) {
      		AppAlertServices.throwError('Invalid Details', 'Please fill correct details.')
      		.then(function(){
            LoggerServices.error('Please fill correct details.', 'Invalid Details', 'Invalid Details');
      			console.log('Error Acknowledged by user.');
      		});
      	}
      };


      this.goToSignIn = function(){
          $state.go('login');
      };

    });
})();