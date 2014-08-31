'use strict';

/**
 * @ngdoc service
 * @name qwickeatsApp.geolocator
 * @description
 * # geolocator
 * Factory in the qwickeatsApp.
 */
angular.module('qwickeatsApp')
  .factory('flash', function() {
  var queue = [];
  var currentMessage = '';

  // $rootScope.$on('$routeChangeSuccess', function() {
  //   currentMessage = queue.shift() || '';
  // });

  return {
    setMessage: function(message) {
      queue.push(message);
    },
    getMessage: function() {
      return currentMessage;
    }
  };
});
