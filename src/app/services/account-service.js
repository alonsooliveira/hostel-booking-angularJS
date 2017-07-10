(function () {
    'use strict'
    angular.module('app').factory('accountService', accountService);

    function accountService($http, appSettings,) {
        var service = {
            login: login,
            register: register
        }

        return service;

        function login(model) {
            var data = "grant_type=password&email=" + model.email + "&password=" + model.password;           
            return $http.post(appSettings.apiServiceBaseUri + 'v1/authenticate', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then(function (response) {
                localStorage.setItem('authorizationData', { token: response.data.access_token, userName: response.data.nome, refreshToken: "", useRefreshTokens: false });
                return response;
            },
            function (error) {
               console.error('erro no login');
            });
        }

        function register(model) {
            return $http.post(appSettings.apiServiceBaseUri + 'v1/register', model)
                .then(function (success) {
                    console.log('success');
                })
                .error(function (error) {
                    console.log('error');
                });
        }
    }
})();