'use strict';

/**
 * @ngdoc function
 * @name angularFoodApplicationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFoodApplicationApp
 */
angular.module('angularFoodApplicationApp')
  .controller('MainCtrl', function($scope, $location) {
  	$scope.greeting = "Hello World";
    $scope.goView = function(view) {
  		$location.path(view);
  	};
  })
