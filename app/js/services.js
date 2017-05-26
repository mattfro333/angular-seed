'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).factory("categoryService", [function() {
        return {

            getCategories: function() {
                var categories = ['Toys', 'Electronics', 'Books', 'Furniture', 'Collectibles'];
                return categories;
            }
        }

    }
]);
