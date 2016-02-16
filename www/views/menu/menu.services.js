(function(){
	'use strict';
	function menuServices($http) {
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
	    .factory('MenuServices', menuServices);

	menuServices.$inject = ['$http'];
})();	