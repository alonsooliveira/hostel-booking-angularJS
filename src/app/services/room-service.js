(function () {
    'use strict'
    angular.module('app').factory('roomService', roomService);

    function roomService($http, appSettings) {
        var service = {
            getAll: getAll
        }

        return service;

        function getAll() {
            return $http.get(appSettings.apiServiceBaseUri + '/v1/rooms')
                .then(function (response) {
                    return response.data.data;
                });
        }
    }
})();