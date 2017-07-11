(function () {
    'use strict'
    angular.module('app').factory('bookService', bookService);

    function bookService($http, appSettings) {
        var service = {
            book: book,
            cancel: cancel
        }

        return service;

        function book(book) {
            console.log(book);
            return $http.post(appSettings + 'v1/book', book)
                .then((result) => {

                }).error((error) => {

                });
        }

        function cancel(id) {
            return $http.delete(appSettings + 'v1/book/' + id)
                .then((result) => {

                }).error((error) => {

                });
        }
    }
})();