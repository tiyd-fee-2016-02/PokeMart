
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){

  console.log('an angular app is you');

var pokeApp = angular.module("pokeApp", ['ngRoute']);

 pokeApp.config(function($routeProvider) {
    $routeProvider
        .when('/items', {
            templateUrl : 'pages/items.html',
            controller  : 'ItemsController'
        })
        .when('/create', {
            templateUrl : 'pages/create.html',
            controller  : 'NewController'
        })
        .when('/edit', {
            templateUrl : 'pages/edit.html',
            controller  : 'EditController'
        })
        .when('/details', {
            templateUrl : 'pages/details.html',
            controller  : 'DetailsController'
        })
        .when('/cart', {
            templateUrl : 'pages/cart.html',
            controller  : 'CartController'
        })
        .when('/', {
            templateUrl : 'pages/login.html',
            // controller  : 'DetailsController'
        })
        .when('/admin', {
          templateUrl: 'pages/admin.html',
          controller: 'AdminController'
        })
        .otherwise({
      redirectTo: '/'
    });
});


    pokeApp.factory('storeItems', function ($q, $http) {

      return $http.get('http://localhost:3000/items');
    });

    pokeApp.factory('cartItems', function ($q, $http) {

      return $http.get('http://localhost:3000/cart');
    });
