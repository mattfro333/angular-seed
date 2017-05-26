'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).directive('facebookCheck', ['Facebook',
    function(Facebook) {

        return {
            link: function(scope, elements, attrs) {

                scope.login = function() {

                    Facebook.login();
                };
                scope.logout = function() {
                    Facebook.logout();
                };
            },

            templateUrl: 'partials/facebook-check.html'
        };
    }
]);
