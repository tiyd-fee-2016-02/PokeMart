pokeApp.controller("ItemsController", ['$scope', 'storeItems', '$http', function($scope, storeItems, $http) {
  $scope.greeting = 'Hola!  Yo soy Items Controller';
  storeItems.success(function(data) {
      $scope.items = data;
  });
  // $(".items-card-holder").on('click', '.card-add-to-cart-button', function(){
  //   console.log($this);
  // });

  $scope.cartValues = function(item){
    console.log(item);
    item.id=0;
    return $http.post('http://localhost:3000/cart', item);
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

pokeApp.controller('CartController', ['$scope', '$http', function($scope, $http){

  $http.get("http://localhost:3000/cart").success(function(data){
      $scope.items = data;
  })

  $scope.cartTotal = function(){
    var total = 0;
    // console.log($scope.items.length);
    for (var i = 0; i < $scope.items.length; i++){
      var price = $scope.items[i].price.substring(1, $scope.items[i].price.length);
      priceInt = parseInt(price);
      total += priceInt;
    }
    return total;
    console.log(total)
    };

  $scope.cartDelete = function(item){
    console.log(item.id)
    $.ajax({
            url: 'http://localhost:3000/cart/'+item.id,
            traditional: true,
            success: function(data){},
            type: 'DELETE'
            });
    $(this).remove();
  }

}]);

pokeApp.controller('CreateController', ['$scope', function($scope){
  $scope.message = "This is the Create Controller"
}]);

pokeApp.controller('EditController',['$scope', function($scope){
  $scope.message = "This is the Edit Controller"
}]);
