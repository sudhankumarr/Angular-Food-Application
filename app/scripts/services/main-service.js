'use strict';
angular.module('angularFoodApplicationApp')
	//storing Registration data into localStorage
	.service('storeDataService', function() {
		this.storeInfo = function(userRegInfo) {
	  		//alert('store info');
	  		if(localStorage.getItem('userInfo')) {
	  			var retrieveUserInfo = JSON.parse(localStorage.getItem('userInfo'));
	  			retrieveUserInfo.push(userRegInfo)
	  			localStorage.setItem('userInfo',JSON.stringify(retrieveUserInfo));
	  		}
	  		else {
	  			localStorage.setItem('userInfo',JSON.stringify([userRegInfo]));
	  		}
	  	};
	})

	.factory('shopFactory', function($http) {
		var checkoutInfo = {};
		return {
			load: function(shopName) {
				//console.log('into load func');
				return $http.get('data/'+shopName+'.json').then(function(response) {
					console.log('success'+response.data.items[0].name+ ' '+JSON.stringify(response.data));
					return response.data;
				});
			},
			store: function(shopItems) {
				var orderedItems = [], totalItems = [];
				// Filtering out unselected items
				angular.forEach(shopItems, function(shopItem) {
					if(shopItem.selectQty > 0) {
						orderedItems.push({
								name: shopItem.name,
								qty: shopItem.selectedItemQty,
								price: shopItem.price
							});
					}
				});
				if(localStorage.getItem('checkoutItems')) {
					totalItems = JSON.parse(localStorage.getItem('checkoutItems'));
					totalItems.push(orderedItems);
					localStorage.setItem('checkoutItems', JSON.stringify(totalItems));
				}
				else {
					localStorage.setItem('checkoutItems', JSON.stringify(orderedItems));
				}
				return;
			},
			setDetails: function(shopName, totalPrice) {
				checkoutInfo['shopName'] = shopName;
				checkoutInfo['totalPrice'] = totalPrice;
			},
			getDetails: function() {
				return checkoutInfo;
			}
		};
	})