'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
// Deal with the hash routes like #/view2
// Tells the app which controller to use for each route
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/example', {templateUrl: 'partials/example.html', controller: 'MyExample'});
  $routeProvider.otherwise({redirectTo: '/view1'}); // add a default
}]);
