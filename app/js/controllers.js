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
                'userName': 'Sandy Peters'},
                {
                        product_id: '123',
                        title: ' Baby Rattles',
                        price: 2,
                        userName: 'John Doe'
                    }

console.log($scope.product)
        }
    ])
.controller('AppCtrl', ['$scope', 'categoryService', 'Facebook', 'authService',
        function($scope, categoryService, Facebook, authService) {
            $scope.categories = categoryService.getCategories();
            $scope.user = {};
            $scope.shoppingBasket = [ ];
            console.log($scope.user)
            Facebook.getLoginStatus(function(response) {
console.log(response)
        if (response.status === 'connected') {
            authService.getUserInfo().then(function(data) {
                $scope.user = data;
            });
        } else {

            Facebook.login();
        };

    });
        }
]).controller('AddProductsCtrl', ['$scope', 'categoryService', 'authService', 'AWSservice',
    function($scope, categoryService, authService, AWSservice) {

        $scope.categories = categoryService.getCategories();

        $scope.newProduct = {};


        $scope.addProduct = function() {

            $scope.newProduct.userId = $scope.user.id;
            $scope.newProduct.userName = $scope.user.name;
            $scope.newProduct.picUrl = 'sw3/someURL';
AWSservice.saveProductData($scope.newProduct);

        }


    $scope.uploadImage = function(files) {
    AWSservice.uploadPic(files).then(
        function(data) {

            $scope.newProduct.picUrl = data;
            $scope.uploadedPicURL = "https://s3.amazonaws.com/garage-commerce/" + data;
        }, function(err) {
            $log.error(err);
        })
}
}
]);
