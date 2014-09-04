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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl'
      })
      .when('/restaurants/:location', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        resolve : {
          restaurantList : function (restaurants)
          {
            return restaurants.listRestaurants(location);
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
