'use strict';

/**
 * @ngdoc function
 * @name qwickeatsApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the qwickeatsApp
 */
angular.module('qwickeatsApp')
  .controller('SearchCtrl',['$scope','restaurantList', function ($scope, r) {

  	$scope.restaurantList = r.data;
  }]);
