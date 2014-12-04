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
    $scope.required = {};
    $scope.optional = {};
    $scope.formData = {};

    $scope.cleanUpOptional = function ()
    {
        for (var item in $scope.optional)
        {
            if ($scope.optional[item] === false)
            {
              delete $scope.optional[item];
            } 
        }
    };

    $scope.cleanUpRequired = function (itemName, itemPrice)
    {
        $scope.required = {}
        $scope.required[itemName] = itemPrice;
        console.log(itemName);
        console.log(itemPrice);
    }

    $scope.getMenuItemOptions = function (categoryIndex, menuItemIndex ,menuItemName)
    {
    	// Uses data from the view to get the correct data for the menu item and sets it in the scope
    	// Do I need the digest loop here?
    	$scope.selectedMenuItem = menuItemName;
    	$scope.selectedmenuItemOptions = menu.data.categories[categoryIndex].menu_items[menuItemIndex].menu_item_options;
    	$scope.selecteditemPrice = menu.data.categories[categoryIndex].menu_items[menuItemIndex].price;
        $scope.required = {};
        $scope.optional = {};
        $scope.formData = {};
    };

  }]);
