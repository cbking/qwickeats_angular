'use strict';

/**
 * @ngdoc overview
 * @name qwickeatsApp
 * @description
 * # qwickeatsApp
 *
 * Main module of the application.
 */
angular
  .module('qwickeatsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider, $locationProvider, localStorageServiceProvider) {
    $locationProvider.html5Mode(false);

    localStorageServiceProvider
    .setPrefix('qwickeatsApp')
    .setStorageType('sessionStorage')
    .setNotify(true, true);


    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl'
      })
      .when('/restaurants:location', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        resolve : {
          restaurantList : function (restaurants)
          {
            return restaurants.listRestaurants(location);
          }
        }
      })
      .when('/restaurants/menu:id', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl',
        resolve : {
          menuData : function (restaurants)
          { 
            return restaurants.showRestaurant(location);
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
