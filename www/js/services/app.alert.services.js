(function(){
	'use strict'

	function appAlertServices($http, $ionicPopup) {
	    'use strict';

	    this.throwError = function(errorTitle, errorDescription){
	    	var alertError = $ionicPopup.show({
			    title: errorTitle,
			    template: '<div class="textAlignCenter"><p><i class="icon ion-close-circled errorCross"></i></p>' + errorDescription + '</div>',
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
			    template: '<div class="textAlignCenter"><p><i class="icon ion-checkmark-circled successCheck"></i></p>' + messageDescription + '</div>',
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

	angular.module('ProjectClean.services')
	    .factory('AppAlertServices', appAlertServices);

	appAlertServices.$inject = ['$http', '$ionicPopup'];
})();