'use strict';

/**
 * @ngdoc service
 * @name qwickeatsApp.geolocator
 * @description
 * # geolocator
 * Factory in the qwickeatsApp.
 */
angular.module('qwickeatsApp')
  .factory('geolocator', function () {
    // Service logic
    // ...
    
    // Public API here
    return {
      _geocodeAddress: function (address) {
        var geocoder = new google.maps.Geocoder();
        // Call to Google Geocoding API
        geocoder.geocode({ address : address }, function (result, status) {
          console.log(result);
          console.log(status);
        });
      }
    };
  });
