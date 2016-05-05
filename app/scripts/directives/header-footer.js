'use strict';
angular.module('angularFoodApplicationApp')
	.directive('headerSection', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/templates/header.html'
		};
	})
	.directive('footerSection', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/templates/footer.html'
		}
	})