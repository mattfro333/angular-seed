'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
  'ui.router',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ngAnimate',
  'facebook'
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
        $stateProvider.state('facebook', {
          url:'/facebook',
            templateUrl: 'facebook-check.html',
            controller: 'AppCtrl'
        })
}
]).config(['FacebookProvider',function(FacebookProvider){
    FacebookProvider.init('<232573657241399>');
}])
