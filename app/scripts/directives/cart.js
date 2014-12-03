'use strict';

/**
 * @ngdoc directive
 * @name qwickeatsApp.directive:cart
 * @description
 * # cart
 */
angular.module('qwickeatsApp')
  .directive('cart', function () {
    return {
      templateUrl: 'views/cart.html',
      restrict: 'E',
      link: function postLink() {
      	// scope, element, attrs
        //element.text('this is the cart directive');
      }
    };
  });
