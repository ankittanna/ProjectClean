(function(){

    function infoServices($window, localStorageService){
        /* stores logged in user info */
        this.userInfoStorage = {
          userInfo:{
            set: function(obj){
              localStorageService.set('userInfoObject', obj);
            },
            get: function(){
              return localStorageService.get('userInfoObject');
            },
            remove: function(){
              localStorageService.set('userInfoObject');
            }
          }
        };

        return {
          userInfo: this.userInfoStorage
        };
    }

    angular.module('ProjectClean.services')
      .factory('InfoServices', infoServices);

      infoServices.$inject = ['$window', infoServices];
})();