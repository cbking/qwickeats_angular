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
  .controller('GeolocatorCtrl',['$scope', 'geolocator',  function ($scope, geo) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
    ];

    $scope.address = '';

    $scope.errorMessage = '';

    $scope.geocodeError = false;


    $scope.geocodeAddress =  function (address)
    {
      var gResult = geo._geocodeAddress(address);

      gResult.then(function (success){
        $scope.geocodeError = false;
        $scope.errorMessage = '';
        console.log('Success');
        console.log(success);
      }, function(failure){
        $scope.geocodeError = true;
        $scope.errorMessage = 'Could not geocode that address, please try again';
        console.log('failure');
        console.log(failure);
      });
    };
  }]);
