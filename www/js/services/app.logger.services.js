(function() {
    'use strict';

    function loggerServices($log, toastr) {

        function error(message, data, title) {
            toastr.error(message, title, {closeButton:true});
            $log.error('Error: ' + message, data);
        }

        function info(message, data, title) {
            toastr.info(message, title, {closeButton:true});
            $log.info('Info: ' + message, data);
        }

        function success(message, data, title) {
            toastr.success(message, title, {closeButton:true});
            $log.info('Success: ' + message, data);
        }

        function warning(message, data, title) {
            toastr.warning(message, title, {closeButton:true});
            $log.warn('Warning: ' + message, data);
        }

        return {
            showToasts: true,
            error: error,
            info: info,
            success: success,
            warning: warning
        }
    }

    angular.module('ProjectClean.services').factory('LoggerServices', loggerServices);

    loggerServices.$inject = ['$log', 'toastr'];
}());
