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
        //var d = $q.defer();

        var geocoder = new google.maps.Geocoder();

        var result = {
          type: 'not_defined',
          message: '',
          payload: 
            {
              lat: 0.0000,
              lon: 0.0000
            }
        };

        // Call to Google Geocoding API
        geocoder.geocode({ address : address }, function (result, status) {
          // Handle the response when the result valid
          if (status === google.maps.GeocoderStatus.OK) {
            result.type = 'Success';
            console.log(result);
          } 
          //Handle if response returns zero results
          else if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
        
          } 
          // Handle if we have hit the query limit
          else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                    
          } 
          // Handle if the request was denied
          else if (status === google.maps.GeocoderStatus.REQUEST_DENIED) {
      
          } 
          // Handle if the request was invalid
          else if (status === google.maps.GeocoderStatus.INVALID_REQUEST) {
   
          }
          // Return the result to the calling method
        });
      return result;
      }
    };
  });
