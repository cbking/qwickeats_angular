'use strict';

/**
 * @ngdoc service
 * @name qwickeatsApp.cart
 * @description
 * # cart
 * Factory in the qwickeatsApp.
 */
angular.module('qwickeatsApp')
  .factory('cart', function ($localStorage) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      addToCart: function (item) {
        return meaningOfLife;
      }
    };
  });
