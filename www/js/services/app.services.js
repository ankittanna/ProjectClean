function appServices($http) {
    'use strict';
    // config for notification
    this.baseUrl = '';

    this.registerUser = function(){

    };

    return {
        registerUser: this.registerUser
    };
}

angular.module('ProjectClean.services', [])
    .factory('AppServices', appServices);

appServices.$inject = ['$http'];