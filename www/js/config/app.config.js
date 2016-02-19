/* (function(){
	// Config HTTP Error Handling
	angular.module('ProjectClean.config').config(function($httpProvider){
				$httpProvider.interceptors.push(function($q, $location){
							return {
					          responseError: function (rejection) {
					            switch (rejection.status) {
					              case 401:
					                // Deauthenticate the global user
					                console.log('401 ----->');
					                break;
					              case 403:
					                // Add unauthorized behaviour
					                console.log('403 ----->');
					                break;
					            }

					            return $q.reject(rejection);
					          }
					        };
						});
			});
})(); */