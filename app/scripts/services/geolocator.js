'use strict';

/**
 * @ngdoc service
 * @name qwickeatsApp.geolocator
 * @description
 * # geolocator
 * Factory in the qwickeatsApp.
 */
angular.module('qwickeatsApp')
  .factory('Geolocator', function () {
    // Service logic
    // ...
    
    var meaningOfLife = 42;
    // Public API here
    return {
      geocodeAddress: function () {
        var geocoder = new google.maps.Geocoder();
        geocoder = 1;
        return meaningOfLife;
      }
    };
  });
