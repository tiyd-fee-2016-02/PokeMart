pokeApp.controller("ItemsController", ['$scope', function($scope) {
  $scope.greeting = 'Hola!  Yo soy Items Controller';
}]);

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
