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

    $scope.selectedMenuItem = '';
    $scope.selectedmenuItemOptions = '';
    $scope.selecteditemPrice = 0;

    $scope.getMenuItemOptions = function (categoryIndex, menuItemIndex ,menuItemName)
    {
			// Uses data from the view to get the correct data for the menu item and sets it in the scope
			// Do I need the digest loop here?
    	$scope.selectedMenuItem = menuItemName;
    	$scope.selectedmenuItemOptions = menu.data.categories[categoryIndex].menu_items[menuItemIndex].menu_item_options;
    	$scope.selecteditemPrice = menu.data.categories[categoryIndex].menu_items[menuItemIndex].price;
    };

  }]);
