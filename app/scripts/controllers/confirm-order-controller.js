'use strict';
angular.module('angularFoodApplicationApp')
 .controller('confirmOrderCtrl', function($scope, shopFactory) {
  	$scope.finalItems = [], $scope.details = {};
  	$scope.details = shopFactory.getDetails();
  	$scope.finalItems = JSON.parse(localStorage.getItem('checkoutItems'));
  });