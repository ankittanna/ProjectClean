(function(){
	'use strict';
	function signUpServices($http) {
	    'use strict';
	    // config for notification
	    var baseUrl = 'http://localhost:3000/api';

	    this.registerUser = function(userData){
	    	console.log("Sign Up Data " + JSON.stringify(userData));
	    	var url = baseUrl + '/auth/signup'
	    	return $http({
	            method: 'POST',
	            url: url,
	            headers: {
	                'Content-Type': 'application/json'
	            },
	            data: userData
	        }).then(function(response) {
	        	response.data.status = 200;
	            return response.data;
	        },
	        function(error){
	        	return error;
	        });
	    };

	    return {
	        registerUser: this.registerUser
	    };

	}

	angular.module('ProjectClean.services')
	    .factory('SignUpServices', signUpServices);

	signUpServices.$inject = ['$http'];

})();