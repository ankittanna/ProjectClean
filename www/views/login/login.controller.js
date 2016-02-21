(function(){
    'use strict';
    angular.module('ProjectClean.controllers')

    .controller('LoginCtrl', function($scope, $state, LoginServices, AppAlertServices, LoggerServices) {
      this.existingUser = {};
      // login the user
      this.loginUser = function(isValid){
        /* this.existingUser has username and password */
        if(isValid === true)
        {
          LoginServices.authenticateUser(this.existingUser)
          .then(function(responseData){
            if(responseData.status === 200)
            {
              LoggerServices.success('Signed In successfully.', 'Success!', 'Success!');
              $state.go('app.userHomePage');
            } else
            {
              AppAlertServices.throwError('Invalid Username or Password', JSON.stringify(responseData))
              .then(function(){
                LoggerServices.error('Please fill correct details.', 'Invalid Username or password', 'Invalid Username or password');
                console.log('Error Acknowledged by user.');
              });
            }
          });
        } else if(isValid === false)
        {
          AppAlertServices.throwError('Invalid Username or password', 'Please fill correct details.')
          .then(function(){
            LoggerServices.error('Please fill correct details.', 'Invalid Username or password', 'Invalid Username or password');
            console.log('Error Acknowledged by user.');
          });
        }
      };

      this.goToSignUp = function(){
        $state.go('signUp');
      };

    });
})();