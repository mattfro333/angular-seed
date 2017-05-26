'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.router',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ngAnimate'
]).
config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('add', {
        	url:'/add',
            templateUrl: 'partials/add-products.html',
            controller: 'AddProductsCtrl'
        });
        $stateProvider.state('category', {
        	url:'/:category',
            templateUrl: 'partials/products.html',
            controller: 'ProductsCtrl'
        });
       	$stateProvider.state('category.products', {
        	url:'/:id',
            templateUrl: 'partials/products.details.html',
            controller: 'ProductDetailsCtrl'
        });
}
])
