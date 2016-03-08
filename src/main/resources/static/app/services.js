
var servicesModule = angular.module('servicesModule',['ngResource']);

servicesModule.factory('Item', ['$resource', function($resource){
  return $resource('/items/:itemId',{
      id:'@id'
    },
    {
      update:{
        method: 'PUT'
      },
      remove:{
        method:'DELETE'
      }

  });
}]);
