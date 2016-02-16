(function(){
	'use strict'

	function appServices($http) {
	    'use strict';
	    return {
	        registerUser: this.registerUser
	    };

	    // config for notification
	    this.baseUrl = '';

	    this.registerUser = function(){

	    };
	}

	angular.module('ProjectClean.services', [])
	    .factory('AppServices', appServices);

	appServices.$inject = ['$http'];
})();