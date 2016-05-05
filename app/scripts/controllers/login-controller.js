'use strict';
angular.module('angularFoodApplicationApp')
	.controller('LoginCtrl', function($scope, $location, errorService) {
	  	$scope.loginFormError = false;
	  	$scope.loginError = {};
	  	var regDB = JSON.parse(localStorage.getItem('userInfo'));
	  	// login
	  	$scope.loginSubmit = function() {
	  		if(regDB === null || regDB === '') {
	  			$scope.loginFormError = true;
	  			return;
	  		}
	  		$scope.loginError = errorService.loginCheck($scope.login, regDB);
	  		if($scope.loginError.status) {
	  			$scope.loginFormError = true;
	  		}
	  		else {
	  			$scope.loginFormError = false;
	  			alert('login success');
	  			$scope.goView('home');
	  		}
	  	};
	  });