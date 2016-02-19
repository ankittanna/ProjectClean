(function(){
	'use strict'

	function appAlertServices($http, $ionicPopup) {
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

	    this.showMessage = function(messageTitle, messageDescription){
	    	var alertError = $ionicPopup.show({
			    title: messageTitle,
			    template: messageDescription,
			    buttons: [
			      { 
			      	text: 'Ok', 
			      	type: 'button-balanced'
			  	  }
			    ]
			  });

	    	return alertError;
	    };

	    return {
	        throwError: this.throwError,
	        showMessage: this.showMessage
	    };
	}

	angular.module('ProjectClean.services', [])
	    .factory('AppAlertServices', appAlertServices);

	appAlertServices.$inject = ['$http', '$ionicPopup'];
})();