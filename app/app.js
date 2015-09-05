'use strict';

// Declare app level module which depends on views, and components
angular
    .module('obrApp', [
        'ngRoute',
        'obrApp.landingPage',
        'obrApp.donate',
        'ui.bootstrap',
        'restangular'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/landing-page'});
    }]);
