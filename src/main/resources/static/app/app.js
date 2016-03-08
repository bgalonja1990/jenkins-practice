'use strict';
var itemApp = angular.module('itemApp',[
  'ngRoute',
  'controllersModule',
  'servicesModule'
]);

itemApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/app/items', {
    templateUrl: 'partials/items.html',
    controller: 'ItemController'
  }).otherwise({
    redirectTo: '/app/items'
  });
}]);
