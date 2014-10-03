'use strict';

/**
 * @ngdoc function
 * @name qwickeatsApp.controller:GeolocatorCtrl
 * @description this is the controller associated with the geocoding directive 
 * depends on the geolocator service
 * # GeolocatorCtrl
 * Controller of the qwickeatsApp
 */
angular.module('qwickeatsApp')
  .controller('GeolocatorCtrl',['$scope', 'geolocator', '$q', function ($scope, geo , q) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
    ];

    $scope.address = '';

    $scope.errorMessage = '';

    $scope.geocodeError = false;

    $scope.addAddress = function (address)
    {
      geo.pushAddressToQueue(address);
    };


    $scope.geocodeAddresses =  function ()
    {

       var promises = geo.geocodeAddresses();

       q.all(promises).then(function(data) {
          console.log('promises are all finished');
          console.log(data);
            // called when all promises have been resolved successully
        });
      };
    //   geo.geocodeAddresses.then(function (success)
    //   {
    //     console.log(success);
    //   }, function (failure)
    //   {
    //     console.log(failure);
    //   });
    // };
  }]);
