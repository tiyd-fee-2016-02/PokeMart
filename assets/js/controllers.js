pokeApp.controller("ItemsController", ['$http', '$scope', function($http, $scope) {
  $scope.greeting = 'Hola!  Yo soy Items Controller';
  $http.get('http://localhost:3000/items').success(function(data){$scope.items = data[0].picture_url});//close get
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
