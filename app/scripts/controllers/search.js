'use strict';

/**
 * @ngdoc function
 * @name qwickeatsApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the qwickeatsApp
 */
angular.module('qwickeatsApp')
  .controller('SearchCtrl',['$scope','restaurantList', '$location',function ($scope, r, location) {

  	$scope.showRestaurant = function (restId)
  	{
  		location.path('/restaurants/menu?id=' + restId);
  	};

  	$scope.restaurantList = r.data;
  }]);
