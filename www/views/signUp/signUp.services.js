function signUpServices($http) {
    'use strict';
    // config for notification
    this.baseUrl = '';

    this.registerUser = function(){

    };

    return {
        registerUser: this.registerUser
    };
}

angular.module('ProjectClean.services')
    .factory('SignUpServices', signUpServices);

signUpServices.$inject = ['$http'];