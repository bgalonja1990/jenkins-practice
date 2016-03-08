var controllersModule = angular.module('controllersModule',[]);



controllersModule.controller('ItemController', ['$scope','Item', function($scope,Item){
    Item.query(function(response){
      $scope.items = response? response : [];
    });

    $scope.addItem = function(description){
      new Item({
        description: description,
        checked: false
      }).$save(function(item){
        $scope.items.push(item);
      });
      $scope.newItem = "";
    };

    $scope.updateItem = function(item){
      item.$update();
    };

    $scope.removeItem = function(item){
      item.$remove(function(){
        $scope.items.splice($scope.items.indexOf(item),1);
      });
    };
}]);

controllersModule.controller('LoginController',['$scope','$http','$rootScope','$location',
  function($scope,$http,$rootScope,$location){
     var authenticate = function(credentials, callback){
      var headers = credentials ? {
        authorization: "Basic " +
                btoa(credentials.username+":"+credentials.password)} : {};

                $http.get('items/user', {
          					headers : headers
          				}).success(function(data) {
          					if (data.name) {
          						$rootScope.authenticated = true;
          					} else {
          						$rootScope.authenticated = false;
          					}
          					callback && callback($rootScope.authenticated);
          				}).error(function() {
          					$rootScope.authenticated = false;
          					callback && callback(false);
          				});
    }
    authenticate();
    $scope.credentials={};
    $scope.login = function(){
      authenticate($scope.credentials, function(authenticated){
        if (authenticated) {
						console.log("Login succeeded")
						$location.path("/");
						self.error = false;
						$rootScope.authenticated = true;
					} else {
						console.log("Login failed")
						$location.path("/login");
						self.error = true;
						$rootScope.authenticated = false;
					}
      })
    };
    self.logout = function() {
				$http.post('logout', {}).finally(function() {
					$rootScope.authenticated = false;
					$location.path("/");
				});
			};
}]);
