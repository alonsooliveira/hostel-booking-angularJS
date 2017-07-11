(function () {
    'use strict'
    angular.module('app').factory('roomService', roomService);

    function roomService($http, appSettings) {
        var service = {
            getAll: getAll
        }

        return service;

        function getAll() {

            var rooms = [
                { id: 1, image: '', description: 'description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.' },
                { id: 2, image: '', description: 'description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.' },
                { id: 3, image: '', description: 'description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.' },
                { id: 4, image: '', description: 'description, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.' }];

            return rooms;
        }
    }
})();