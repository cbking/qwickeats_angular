'use strict';

/**
 * @ngdoc service
 * @name qwickeatsApp.geolocator
 * @description
 * # geolocator
 * Factory in the qwickeatsApp.
 */
angular.module('qwickeatsApp')
  .factory('geolocator', function ($q) {
    // Service logic
    // ...
    
    // Public API here
    return {
      _geocodeAddress: function (address) {
        //var d = $q.defer();
        var deferred = $q.defer();
        var geocoder = new google.maps.Geocoder();


        // Call to Google Geocoding API
        geocoder.geocode({ address : address }, function (result, status) {
          // Handle the response when the result valid
          if (status === google.maps.GeocoderStatus.OK) {
              var latLng = {
                lat: result[0].geometry.location.lat(),
                lng: result[0].geometry.location.lng()
              };
              deferred.resolve(latLng);
            } 
          //Handle if response returns zero results
          else if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
            deferred.reject({
              type: 'zero',
              message: 'Zero results for geocoding address ' + address
            });
          } 
          // Handle if we have hit the query limit
          else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
          } 
          // Handle if the request was denied
          else if (status === google.maps.GeocoderStatus.REQUEST_DENIED) {
            deferred.reject({
              type: 'denied',
              message: 'Request denied for geocoding address ' + address
            });
          } 
          // Handle if the request was invalid
          else if (status === google.maps.GeocoderStatus.INVALID_REQUEST) {
            deferred.reject({
              type: 'invalid',
              message: 'Invalid request for geocoding address ' + address
            });
          }
          // Return the result to the calling method
        });
      // Return the promise object
      return deferred.promise;
      }
    };
  });
