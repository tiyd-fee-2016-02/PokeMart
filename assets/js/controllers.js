pokeApp.controller("ItemsController", ['$scope', 'storeItems', function($scope, storeItems) {
  $scope.greeting = 'Hola!  Yo soy Items Controller';

  storeItems.success(function(data) {
      $scope.items = data;
  });
}]);//close controller

pokeApp.controller('DetailsController', ['$scope', function($scope){
  $scope.message = "This is the Details Controller"
}]);

pokeApp.controller('CartController', ['$scope', function($scope){
  $scope.message = "This is the Cart Controller"
}]);

pokeApp.controller('CreateController', ['$scope', function($scope){
  $scope.message = "This is the Create Controller"
}]);

pokeApp.controller('EditController',['$scope', function($scope){
  $scope.message = "This is the Edit Controller"
}]);
