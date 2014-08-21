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
      .otherwise({
        redirectTo: '/'
      });
  });
