'use strict';

/**
 * @ngdoc function
 * @name qwickeatsApp.controller:GeolocatorCtrl
 * @description
 * # GeolocatorCtrl
 * Controller of the qwickeatsApp
 */
angular.module('qwickeatsApp')
  .controller('GeolocatorCtrl',['$scope', 'geolocator', 'flash', function ($scope, geo, flashFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
    ];

    $scope.address = '';

    $scope.geocodeError = false;

    $scope.flash = flashFactory;

    $scope.geocodeAddress =  function (address)
    {
      var gResult = geo._geocodeAddress(address);

      gResult.then(function (success){
        console.log('Success');
        console.log(success);
      }, function(failure){
        flashFactory.setMessage('Could not geocode that address');
        console.log('failure');
        console.log(failure);
      });

      


    };
  }]);
