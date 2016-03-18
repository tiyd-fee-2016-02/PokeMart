// ;(function(){
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){

  console.log('an angular app is you');

var pokeApp = angular.module("pokeApp", ['ngRoute']);

 pokeApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/items.html',
            // controller  : 'ItemsController'
        })
        .when('/create', {
            templateUrl : 'create.html',
            // controller  : 'CreateController'
        })
        .when('/edit', {
            templateUrl : 'edit.html',
            // controller  : 'EditController'
        })
        .when('/details', {
            templateUrl : 'details.html',
            // controller  : 'DetailsController'
        })
        .when('/cart', {
            templateUrl : 'cart.html',
            // controller  : 'CartController'
        })
        .otherwise({
      redirectTo: '/'
    });

});
// };
// });
