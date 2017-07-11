(function(){
    'use strict'
    angular.module('app').config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'accountController',
                controllerAs: 'ctrl',
                templateUrl: 'pages/login.html',
                authorize: false
            })
            .when('/login', {
                controller: 'accountController',
                controllerAs: 'ctrl',
                templateUrl: 'pages/login.html',
                authorize: false
            })
            .when('/register', {
                controller: 'accountController',
                controllerAs: 'ctrl',
                templateUrl: 'pages/register.html',
                authorize: false
            })
            .when('/home', {
                controller: 'roomController',
                controllerAs: 'ctrl',
                templateUrl: 'pages/home.html',
                authorize: false
            });
    });
})();