'use strict';

/**
 * @ngdoc overview
 * @name angularFoodApplicationApp
 * @description
 * # angularFoodApplicationApp
 *
 * Main module of the application.
 */
angular
  .module('angularFoodApplicationApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/menuItem/:shopName', {
        templateUrl: 'views/menu-item.html',
        controller: 'MenuItemCtrl'
      })
      .when('/confirmOrder', {
        templateUrl: 'views/confirm-order.html',
        controller: 'confirmOrderCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
