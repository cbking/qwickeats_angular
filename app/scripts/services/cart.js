'use strict';

/**
 * @ngdoc service
 * @name qwickeatsApp.cart
 * @description
 * # cart
 * Factory in the qwickeatsApp.
 */
angular.module('qwickeatsApp')
  .factory('cart', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      addToCart: function () {
        return meaningOfLife;
      }
    };
  });
