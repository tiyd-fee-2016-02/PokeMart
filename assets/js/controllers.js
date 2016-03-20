pokeApp.controller("ItemsController", ['$scope', 'storeItems', function($scope, storeItems) {
  $scope.greeting = 'Hola!  Yo soy Items Controller';
  storeItems.success(function(data) {
      $scope.items = data;
  });
  // $(".items-card-holder").on('click', '.card-add-to-cart-button', function(){
  //   console.log($this);
  // });

  $scope.cartValues = function(item){
    console.log(item);
  };

  $scope.detailValues = function(item){
    console.log(item);
    $scope.dynamicClass = 'showing';
    $scope.myTextName = item.name + ":";
    $scope.myTextPrice = item.price;
    $scope.myTextDescription = "Description: " +item.description;
    $scope.myTextReviews = item.reviews;
  };

  $scope.returnToStore = function(){
    $scope.dynamicClass = '';
  };
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
