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
      // Return a listing of the restaurants based on the search
      listRestaurants: function (location) {

        var deferred = $q.defer();

        console.log(location.hash.substring(2));
        console.log(decodeURI(location.pathname.replace('%3F','?')));


        var request = $http({
            method: 'get',
            url: 'http://localhost:8888/api/v1/' + decodeURI(location.hash.substring(2).replace('%3F','?'))
        });

        request.then(function (success) {
            deferred.resolve(success);
          }, function (failure){
            deferred.reject(failure);
          });

        return deferred.promise;
      },
      // Get the data related to a specific restaurant
      showRestaurant: function (location) {

        var deferred  = $q.defer();
        // Grab the id from the passed restId
        var id = location.hash.substring(2).replace('%3F','?').match(/\?(.*)/)[0].substring(4);

        var request = $http({
          method: 'get',
          url: 'http://localhost:8888/api/v1/restaurants/' + id
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
