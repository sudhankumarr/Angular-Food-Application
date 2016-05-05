'use strict';
angular.module('angularFoodApplicationApp')
 .controller('RegisterCtrl', function($scope, errorService, storeDataService) {
  	//register
  	$scope.regSubmit = function() {
      var userRegInfo = {};
      $scope.regError = {};
      // Registration user data
  		userRegInfo = {
  			firstname: $scope.reg.firstname,
  			lastname: $scope.reg.lastname,
  			username: $scope.reg.username,
  			password: $scope.reg.password
  		};
      //errorCheck
      $scope.regError = errorService.registerCheck(userRegInfo);
      if($scope.regError.status !== true) {
        alert('succesfully registered');
        //store user data
        storeDataService.storeInfo(userRegInfo);
        $scope.regFormError = false;
        $scope.goView('login');
      }
      else {
        $scope.regFormError = true;
      }
  	};

  });