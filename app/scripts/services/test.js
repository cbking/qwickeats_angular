'use strict';

/**
 * @ngdoc service
 * @name tripleLiftSnippet.geolocator
 * @description This angularjs service will geocode fullfils the criteria of the 
 * application questions as follows:
 *
 *  Criteria 1: Execute any number of asynchronous functions:
 *
 *  This code calls the google maps geocoding API (the asynchronous function).
 *  It stores the addresses to be called in an array and whenever a response is 
 *  received from the google API we store the result in an array
 * 
 *  Criteria 2: Waits for the completion of all asynchronous functions that have been called, 
 *  but have not yet completed:
 *
 *  Each asynchronous call is resolved before moving on to the next. Note that I have set a 
 *  requirement of 250 ms per request. If the request takes longer than this we assume the response 
 *  will not be completed.
 *
 *  Criteria 3: When all the initiated functions complete, apply these function
 *  results to a callback.
 *
 *  The $q object that I inject at the top of the function gives me access to AngularJS's
 *  promise API. This API makes dealing with asynchronous functions a lot more manageable
 *  by exposes success and failure callbacks to the calling entity. 
 *
 *  By using the .resolve and .reject functions on the $q.defer() object, I am passing back
 *  success and failure results.
 *
 * 
 * # geolocator
 * Factory in the tripleLiftSnippet.
 */
 angular.module('qwickeatsApp')
 .factory('geolocator', function ($q) {
    // The promise API defer object
    // This stores the address to be geocoded 
    var addressQueue = [];
    // Geocode the next address in the queue
    var promises = [];


    var geocodeNext = function ()
    {
     // Grab the next address to be Geocoded
     var deferred = $q.defer();
     var address = addressQueue.shift();
     console.log(address);
     var geocoder = new google.maps.Geocoder();
     var resultForPromise;
       // Call to Google Geocoding API
       geocoder.geocode({ address : address }, function (result, status) {
         // Handle the response when the result valid
         if (status === google.maps.GeocoderStatus.OK) {
            resultForPromise = {
             status: 'Success',
             address : address,
             lat: result[0].geometry.location.lat(),
             lng: result[0].geometry.location.lng()
           };
           deferred.resolve(resultForPromise);
           console.log(promises);
           promises.push(deferred.promise);
           return deferred.promise;
         } 
         //Handle if response returns zero results
         else if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
            resultForPromise = {
             status: 'No Results Found',
             address: address
           };
           deferred.reject(resultForPromise);
           return deferred.promise;

         } 
         // Handle if the request was denied
         else if (status === google.maps.GeocoderStatus.REQUEST_DENIED) {
            resultForPromise = {
             status: 'Google denied this request',
             address: address
           };
           deferred.reject(resultForPromise);
           return deferred.promise;

//           promises.push(deferred.promise);
         } 
         // Handle if the request was invalid
         else if (status === google.maps.GeocoderStatus.INVALID_REQUEST) {
            resultForPromise = {
             status: 'Invalid Request',
             address: address
           };
           deferred.reject(resultForPromise);
           return deferred.promise;

           //promises.push(deferred.promise);
         }
       });
    };

    // Functions available to modules that inject this service
    return {
       // Geocodes all addresses and returns it to the promise
      geocodeAddresses: function () {
        var promises = [];

        if (addressQueue.length === 0) 
        { // No addresses in the addressQueue to geocode
          console.log('No Address in Queue');

          var deferred = $q.defer();

          deferred.reject({
            status: 'No addresses in the geocoding addressQueue'
          });

          promises.push(deferred);

        } else {
          while (addressQueue.length > 0) {
            promises.push(geocodeNext());
          }  
          // Set the results onto the promise object
        } 
        return promises;
      },
      // Pushes an address to be geocoded in the future after 
      pushAddressToQueue: function (address) {
        addressQueue.push(address);
        console.log(addressQueue);
      }
     
    };
});
