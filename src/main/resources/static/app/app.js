'use strict';
var itemApp = angular.module('itemApp',[
  'ngRoute',
  'controllersModule',
  'servicesModule'
]);

itemApp.config(['$routeProvider','$httpProvider', function($routeProvider, $httpProvider){
  $routeProvider.when('/', {
    templateUrl: 'partials/items.html',
    controller: 'ItemController'
  }).when('/login', {
    templateUrl:'partials/login.html',
    controller: 'LoginController'
  })
  .otherwise({
    redirectTo: '/'
  });
  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);
