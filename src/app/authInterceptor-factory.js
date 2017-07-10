(function () {
    'use strict';
    angular
		.module('app')
		.factory('authInterceptorFactory', authInterceptorFactory);


    function authInterceptorFactory(localStorageService) {
        var service = {
            request: request,
        };

        return service;

        function request(config) {
            config.headers = config.headers || {};
            var authData = localStorageService.get('authorizationData');
            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            }

            return config;
        }
    }

})();

