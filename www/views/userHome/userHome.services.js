(function(){
	'use strict';
	function userHomePageServices($http) {
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
	    .factory('UserHomePageServices', userHomePageServices);

	userHomePageServices.$inject = ['$http'];

})();