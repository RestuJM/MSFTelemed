var starter = angular.module('starter', [
  'ngRoute',
  'ngAnimate'
]);
starter.config(function (r, a) {
  r.when('/dashboard', {
    controller: 'sampleControlle',
    templateUrl: 'resources/angular/partials/index.html'
  }), r.otherwise({
    redirectTo: '/dashboard',
    templateUrl: 'resources/angular/partials/index.html'
  });
});
starter.controller('sampleControlle', function (r) {
  r.welcome = 'Laravel 5.4 with Angularjs';
});