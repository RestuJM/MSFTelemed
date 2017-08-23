var sample = angular.module('sample', ['ngRoute', 'ngAnimate','sdk']);

sample.config(function ($routeProvider, $httpProvider) {
    $routeProvider.when('/dashboard', {
        controller: 'sampleController',
        templateUrl: 'resources/angular/partials/index.html'
    })


    $routeProvider.otherwise({
        redirectTo: '/dashboard',
        templateUrl: 'resources/angular/partials/index.html'
    })
});