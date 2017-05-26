'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
value('version', '0.1').factory("categoryService", [function() {
        return {

            getCategories: function() {
                var categories = ['Toys', 'Electronics', 'Books', 'Furniture', 'Collectibles'];
                return categories;
            }
        }

    }
]).factory('authService', ['$q', 'Facebook',
    function($q, Facebook) {
        return {

getUserInfo: function() {
                var d = $q.defer();
                Facebook.api('/me', function(response) {
                    d.resolve(response);
                });
                return d.promise;
            },
        };
    }
]);
