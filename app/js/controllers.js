'use strict';
angular.module('myApp.controllers', []).controller('ProductsCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {
            $scope.category = $stateParams.category
            $scope.productsListing = [{
                    product_id: '123',
                    title: ' Baby Rattles',
                    price: 2,
                    userName: 'John Doe'
                }, {
                    product_id: '456',
                    title: ' Kiddy Laptop',
                    price: 12,
                    userName: 'Sandy Peters'
                }

            ]

        }
    ])
    .controller('ProductDetailsCtrl', ['$scope', '$stateParams',function($scope, $stateParams) {
            $scope.id = $stateParams.id;
            $scope.product = {
                'title': 'Kiddy Laptop',
                'description': 'lorem lipsum do re me.',
                'price': 12,
                'userName': 'Sandy Peters'

            }

        }
    ])
.controller('AppCtrl', ['$scope', 'categoryService', 'Facebook', 'authService',
        function($scope, categoryService, Facebook, authService) {
            $scope.categories = categoryService.getCategories();
            $scope.user = {};
            $scope.shoppingBasket = [ ];
            Facebook.getLoginStatus(function(response) {

        if (response.status === 'connected') {
            authService.getUserInfo().then(function(data) {
                $scope.user = data;
            });
        } else {
            Facebook.login();
        };

    });
        }
]);
