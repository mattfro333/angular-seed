angular.module('myApp.services').factory('AWSservice', function($http, $q){
getProductsByCategory: function(category) {
    var d = $q.defer();
    var params = {
        'Limit': 100,
        'ScanFilter': {
            category: {
                AttributeValueList: [{
                    S: category
                }],
                ComparisonOperator: 'EQ'
            }
        }
    };
    dynamo.scan(params, function(err, data) {
        if (data) {
            d.resolve(data);
        } else if (err) {
            $log.error(err);
        }
    });
    return d.promise;
},
