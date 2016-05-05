'use strict';
angular.module('angularFoodApplicationApp')
	.controller('HomeCtrl', function($scope) {
  	$scope.shopDetails = [
  		{imageUrl:'images/pics-1.jpg', linkUrl: '#/menuItem/paratha-corner'},
  		{imageUrl:'images/pics-2.jpg', linkUrl: '#/menuItem/pavitra-juice-center'},
  		{imageUrl:'images/pics-1.jpg', linkUrl: '#/menuItem/chat-corner'},
  		{imageUrl:'images/pics-2.jpg', linkUrl: '#/menuItem/dosa-corner'}
	];
  });