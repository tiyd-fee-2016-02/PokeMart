
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
            // controller  : 'newController'
        })
        .when('/edit', {
            templateUrl : 'pages/edit.html',
            // controller  : 'editController'
        })
        .when('/details', {
            templateUrl : 'pages/details.html',
            // controller  : 'detailsController'
        })
        .when('/cart', {
            templateUrl : 'pages/cart.html',
            // controller  : 'detailsController'
        })
        .when('/', {
            templateUrl : 'pages/login.html',
            // controller  : 'detailsController'
        })
        .otherwise({
      redirectTo: '/'
    });



    // pokeApp.factory('mainInfoFactory', function($http) {
    //
    //     var mainInfo = $http.get('/assets/json/pokemart.json').success(function(response) {
    //         console.log(response.data);
    //     });
    //
    //     var factory = {}; // define factory object
    //
    //     factory.getMainInfo = function() { // define method on factory object
    //
    //         return mainInfo; // returning data that was pulled in $http call
    //
    //     };
    //
    //     return factory; // returning factory to make it ready to be pulled by the controller
    //
    // });
});
// };
