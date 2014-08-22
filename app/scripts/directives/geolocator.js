'use strict';

/**
 * @ngdoc directive
 * @name qwickeatsApp.directive:geolocator
 * @description
 * # geolocator
 */
angular.module('qwickeatsApp')
  .directive('geolocator', function () {
    return {
      templateUrl: 'views/geolocator.html',
      restrict: 'E',
      link: function postLink(scope, element) {
      	//element.text('This link function overrides the templateUrl injection');
      }
    };
  });




