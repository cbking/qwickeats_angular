'use strict';

/**
 * @ngdoc function
 * @name qwickeatsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the qwickeatsApp
 */
angular.module('qwickeatsApp')
  .controller('MenuCtrl',['$scope','menuData',function ($scope, menu) {
    $scope.menu = menu.data;

    $scope.menuItemOptions = '';

    $scope.getMenuItemOptions = function (meneItemName)
    {
    	console.log(meneItemName);
    };
  }]);
