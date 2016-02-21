(function(){
	'use strict';
	function loginServices($http) {
	    'use strict';
	    // config for notification
	    var baseUrl = 'http://localhost:3000/api';

	    this.authenticateUser = function(userData){
	    	userData.username = userData.username.toString();
	    	console.log("Sign In Data " + JSON.stringify(userData));
	    	var url = baseUrl + '/auth/signin'
	    	return $http({
	            method: 'POST',
	            url: url,
	            headers: {
	                'Content-Type': 'application/json'
	            },
	            data: userData
	        }).then(function(response) {
	        	response.status = 200;
	            return response;
	        },
	        function(error){
	        	return error;
	        });
	    };

	    return {
	        authenticateUser: this.authenticateUser
	    };
	}

	angular.module('ProjectClean.services')
	    .factory('LoginServices', loginServices);

	loginServices.$inject = ['$http'];

})();