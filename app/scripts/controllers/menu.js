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
    $scope.itemPrice = 0;

    $scope.getMenuItemOptions = function (categoryIndex, menuItemIndex ,menuItemName)
    {
			// Uses data from the view to get the correct data for the menu item    	
    	$scope.menuItemOptions = menu.data.categories[categoryIndex].menu_items[menuItemIndex].menu_item_options;
    	$scope.itemPrice = menu.data.categories[categoryIndex].menu_items[menuItemIndex].price;
    };
    
  }]);
