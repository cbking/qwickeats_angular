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

        console.log(decodeURI(location.pathname.replace('%3F','?')));


        var request = $http({
            method: 'get',
            url: 'http://localhost:8888/api/v1' + decodeURI(location.pathname.replace('%3F','?'))
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
