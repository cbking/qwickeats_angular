'use strict';

/**
 * @ngdoc function
 * @name qwickeatsApp.controller:GeolocatorCtrl
 * @description
 * # GeolocatorCtrl
 * Controller of the qwickeatsApp
 */
angular.module('qwickeatsApp')
  .controller('GeolocatorCtrl',['$scope', 'geolocator', function ($scope, geo) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
    ];

    $scope.address = '';

    $scope.geocodeError = false;

    $scope.geocodeAddress =  function (address)
    {
      console.log(geo._geocodeAddress(address));
    };
  }]);
