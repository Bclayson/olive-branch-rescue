'use strict';

angular
    .module('obrApp.donate', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/donate', {
            templateUrl: '/donate.html',
            controller: 'DonateController',
            controllerAs: 'dc'
        });
    }])

    .service('DonateService', [function () {
        var self = this;

    }])

    .controller('DonateController', [function () {
        var self = this;

    }]);