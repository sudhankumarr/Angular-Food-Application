'use strict';
angular.module('angularFoodApplicationApp')
  .service('errorService', function() {
  		this.registerCheck = function(regObj) {
  			var namePattern = /^[a-zA-z0-9\.]{3,8}$/,
  				passwdPattern = /(?=.*\d)(?=.*[a-zA-z])(?=.*[\\!@#%\$\^\*\+\?\(\)_\.\|]).{8,}/,
  				fnameTest = false, lnameTest = false, unameTest = false, passwdTest = false;
			fnameTest = namePattern.test(regObj.firstname);
			lnameTest = namePattern.test(regObj.lastname);
			unameTest = namePattern.test(regObj.username);
			passwdTest = passwdPattern.test(regObj.password);
			if(fnameTest == false) {
				return {
					status: true,
					message: 'firstname must be 3-8 characters long'
				}
			}
			if(lnameTest == false) {
				return {
					status: true,
					message: 'lastname must be 3-8 characters long'
				}
			}
			if(unameTest == false) {
				return {
					status: true,
					message: 'username must be 3-8 characters long'
				}
			}
			if(passwdTest == false) {
				return {
					status: true,
					message: 'password must be atleast an alphabet, a number and a special character and should have minimum 8 characters'
				}
			}
			return { status: false, message: '' };
  		};

  		this.loginCheck = function(loginObj, regDB) {
  			var checkUser = false;
  			angular.forEach(regDB, function(obj){
				if((loginObj.username === obj.username) && (loginObj.password === obj.password)) {
					checkUser = true;
				}
		  	});

		  	if(checkUser) {
		  		return {
					status: false,
					message: ''
				};
		  	}
		  	return { status: true, message: 'Authentication Failed: Incorrect Username or Password'};
  		};

  })