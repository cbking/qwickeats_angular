'use strict';

/**
 * @ngdoc service
 * @name qwickeatsApp.restaurants
 * @description
 * # restaurants
 * Factory in the qwickeatsApp.
 */
angular.module('qwickeatsApp')
  .factory('restaurants',[ '$http','$q',function ($http, $q) {

    // Public API here
    return {
      listRestaurants: function (location) {

        var deferred = $q.defer();

        console.log(location);

        var request = $http({
            method: 'get',
            url: 'http://localhost:8888/api/v1/restaurants?location=%7B%22lat%22:18.0159925,%22lng%22:-76.76255650000002%7D'
        });

        request.then(function (success) {
            deferred.resolve(success);
          }, function (failure){
            deferred.reject(failure);
          });

        return deferred.promise;
      }
    };
  }]);
