'use strict';

/**
 * @ngdoc service
 * @name qwickeatsApp.cart
 * @description
 * # cart
 * Factory in the qwickeatsApp.
 */
angular.module('qwickeatsApp')
  .factory('cart', function (localStorageService) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      addToCart: function (cartItem) {
        // Need to grab the old cart here
        return meaningOfLife;
      }
    };
  });
