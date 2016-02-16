(function(){
	'use strict';
	function loginServices($http) {
	    'use strict';
	    // config for notification
	    this.baseUrl = '';

	    this.authenticateUser = function(){

	    };

	    return {
	        authenticateUser: this.authenticateUser
	    };
	}

	angular.module('ProjectClean.services')
	    .factory('LoginServices', loginServices);

	loginServices.$inject = ['$http'];

})();