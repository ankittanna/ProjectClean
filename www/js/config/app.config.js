(function(){
	// Config HTTP Error Handling
	angular.module('ProjectClean.config').config(['$httpProvider',
			function($httpProvider){
				$httpProvider.interceptors.push(['$q', '$location',
						function($q, $location){
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
						}
					]);
			}
		]);
})();