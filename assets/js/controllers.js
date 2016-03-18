pokeApp.controller("ItemsController", ['$http', '$scope', function($http, $scope) {
  $scope.greeting = 'Hola!  Yo soy Items Controller';

  $http.get('http://localhost:3000/items').success(function(data){
    // for (var i=0; i<data.length; i++){
    // console.log(data);
    for (var i=0; i<data.length; i++){
    console.log(data[i].picture_url);
    $scope.items = data[i].picture_url
  }

    });//close get
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
