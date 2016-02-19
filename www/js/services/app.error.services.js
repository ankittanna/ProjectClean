(function(){
	'use strict'

	function appErrorServices($http, $ionicPopup) {
	    'use strict';

	    this.throwError = function(errorTitle, errorDescription){
	    	var alertError = $ionicPopup.show({
			    title: errorTitle,
			    template: errorDescription,
			    buttons: [
			      { 
			      	text: 'Ok', 
			      	type: 'button-assertive'
			  	  }
			    ]
			  });

	    	return alertError;
	    };

	    return {
	        throwError: this.throwError
	    };
	}

	angular.module('ProjectClean.services', [])
	    .factory('AppErrorServices', appErrorServices);

	appErrorServices.$inject = ['$http', '$ionicPopup'];
})();