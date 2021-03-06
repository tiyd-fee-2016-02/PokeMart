pokeApp.controller("ItemsController", ['$scope', 'storeItems', '$http', 'cartItems', function($scope, storeItems, $http, cartItems) {
  $scope.greeting = 'Hola!  Yo soy Items Controller';

  storeItems.success(function(data) {
      $scope.items = data;
  });


  $scope.cartValues = function(item){
    console.log(item);
    item.id=0;
    return $http.post('http://localhost:3000/cart', item).then(
      $http.get("http://localhost:3000/cart").success(function(data){
          $scope.cart = data;
      }));
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

  cartItems.success(function(data){
    $scope.cart = data;
  });

  $scope.searchItem = function(item){
    console.log(item.name);
    $scope.search = item.name;
  }


}]);//end of items controller



pokeApp.controller('DetailsController', ['$scope', function($scope){
  $scope.message = "This is the Details Controller"
}]);




pokeApp.controller('CartController', ['$scope', '$http', function($scope, $http){

  $http.get("http://localhost:3000/cart").success(function(data){
      $scope.items = data;
  })


  var total
  $scope.cartTotal = function(){
     total = 0;
    var len = $scope.items.length
    for (var i = 0; i < len; i++){
      var price = $scope.items[i].price.substring(1, $scope.items[i].price.length);
      priceInt = parseInt(price);
      total += priceInt;
    }
    return total;
    console.log(total)
    };

  $scope.totalItems = function(){
    totalItems = $scope.items.length;
    return totalItems;
  }

  $scope.cartDelete = function(item){
    console.log(item.id)
    $http.delete('http://localhost:3000/cart/'+item.id).then(
      $http.get("http://localhost:3000/cart").success(function(data){
          $scope.items = data;
      }));
    };


  $scope.receiptValues = function(){
    $scope.dynamicClass = 'showing';
    $scope.totalItems = 'You Bought ' + $scope.items.length + ' items!';
    $scope.totalPrice = 'For a total of ₹'+ total;
  };





  $scope.returnToStore = function(){
    $scope.dynamicClass = '';
    for (var i=0; i <= $scope.items.length; i++){
      $http.delete('http://localhost:3000/cart/'+$scope.items[i].id).then(
        $http.get("http://localhost:3000/cart").success(function(data){
            $scope.items = data;
        }));
    };


  };




}]);//end of cart controller

pokeApp.controller('CreateController', ['$scope', 'storeItems', '$http', function($scope, storeItems, $http){
  var reviews
  storeItems.success(function(data) {
      $scope.items = data;
      console.log($scope.items[editId].name);
      $('.edit-name-input').val($scope.items[editId].name);
      $('.edit-price-input').val($scope.items[editId].price);
      $('.edit-description-input').val($scope.items[editId].description);
      $('.edit-image-url').val($scope.items[editId].picture_url);
  })

  $scope.saveItem = function(){
    $http.put('http://localhost:3000/items/'+editId,
    {id: editId,
    name: $('.edit-name-input').val(),
    price: $('.edit-price-input').val(),
    description: $('.edit-description-input').val(),
    picture_url: $('.edit-image-url').val()}).then(
      $http.get("http://localhost:3000/items/").success(function(data){
          $scope.items = data;
      }));
  };

  $scope.deleteItem = function(){
    console.log('delete clicked');
    $http.delete('http://localhost:3000/items/'+editId).then(
      $http.get("http://localhost:3000/items/").success(function(data){
          $scope.items = data;
      }));
  };



// in controller

}]);

pokeApp.controller('EditController',['$scope', '$http', function($scope, $http){

  $scope.message = "This is the Edit Controller"
  $scope.saveItem = function(){
    $http.post('http://localhost:3000/items',
    {id: 0,
    name: $('.edit-name-input').val(),
    price: $('.edit-price-input').val(),
    description: $('.edit-description-input').val(),
    picture_url: $('.edit-image-url').val(),
    reviews: []}).then(
      $http.get("http://localhost:3000/items/").success(function(data){
          $scope.items = data;
      }));
    ;
  };
}]);



var editId
pokeApp.controller('AdminController',  ['$scope', 'storeItems', '$http', function($scope, storeItems, $http){
  $scope.message = 'Hola! Yo Soy Admin Controller!'
  $http.get("http://localhost:3000/items").success(function(data){
      $scope.items = data;
  });

  $scope.editItem = function(item){
    editId = item.id;
  }

  $scope.searchItem = function(item){
    console.log(item.name);
    $scope.search = item.name;
  }
}]);
