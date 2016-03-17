// ;(function(){
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){

  console.log('an angular app is you');

var pokeApp = angular.module("pokeApp", ['ngRoute']);

 pokeApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/items.html',
            // controller  : 'mainController'
        })
        .when('/create', {
            templateUrl : 'create.html',
            // controller  : 'newController'
        })
        .when('/edit', {
            templateUrl : 'edit.html',
            // controller  : 'editController'
        })
        .when('/details', {
            templateUrl : 'details.html',
            // controller  : 'detailsController'
        })
        .otherwise({
      redirectTo: '/'
    });

});
// };
// });
