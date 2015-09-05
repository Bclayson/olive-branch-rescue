/**
 * Created by administrator on 9/4/15.
 */

angular
    .module('obrApp.landingPage', [])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: '/landing-page.html',
            controller: 'LandingPageController',
            controllerAs: 'lpc'
        });
    }])

    .service('LandingPageService', [function () {
        var self = this;

    }])


    .controller('LandingPageController', [function () {
        var self = this;

    }]);
