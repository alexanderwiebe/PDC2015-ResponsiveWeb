'use strict';

/**
 * @ngdoc overview
 * @name pdc2015ResponsiveWebApp
 * @description
 * # pdc2015ResponsiveWebApp
 *
 * Main module of the application.
 */
angular
  .module('pdc2015ResponsiveWebApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
