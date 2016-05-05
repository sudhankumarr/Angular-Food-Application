'use strict';
angular.module('angularFoodApplicationApp')
	.controller('MenuItemCtrl', function($scope, $routeParams, shopFactory) {
  	var dupShopItems = {}, totalPrice = 0;
  	$scope.totalPrice = 0;
  	$scope.shopName = $routeParams.shopName.replace(/-/g,' ');
    //call Factory method
  	shopFactory.load($routeParams.shopName).then(function(data) {
  		$scope.shopItems = angular.copy(data.items);
  		dupShopItems = angular.copy(data.items);
      //Logic for generating qtyArray based on qty vlue
  		angular.forEach($scope.shopItems, function(shopItem, index) {
  			shopItem['qtyArray'] = [];
  			shopItem['selectQty'] = 0;
  			var j = 0;
  			for(var i=0; i<shopItem.qty; i++) {
  				j = i;
  				if(i===0) {
  					shopItem['qtyArray'][i] = 'Quantity';
  				}
  				else {
  					shopItem["qtyArray"][i] = --j;
  				}
  			}

  		});
	})
	$scope.initMenuItems = function(item) {
		// Getting the price of items from stored object
		angular.forEach(dupShopItems, function(shopItem) {
			if(shopItem.name === item.name) {
				item.price = shopItem.price;
			}
		});
	};
	$scope.selectItems = function(item,selectQty) {
		totalPrice = 0;
		angular.forEach($scope.shopItems, function(shopItem) {
			if(shopItem.name === item.name) {
				shopItem.selectQty = selectQty;
				//Updating price of items
				if(typeof(selectQty)==='number'){
					item.price = (shopItem.price)*(selectQty);
				}
				else{
					item.price = 0;
				}
			}
		});

		$scope.calculateTotal(item,selectQty);
	};
	$scope.calculateTotal = function(item,selectQty) {
		// Getting price of items from current object and total price calculation
		angular.forEach($scope.shopItems, function(shopItem,index) {
			if(shopItem.name === item.name) {
				shopItem['selectedItemQty'] = selectQty; // storing num of quantity selected for particular item
			}
			if(shopItem.selectQty > 0) {
				totalPrice = totalPrice+shopItem.price;
			}
		});
		$scope.totalPrice = totalPrice;
	};
	$scope.storeOrder = function() {
		shopFactory.store($scope.shopItems);
		shopFactory.setDetails($scope.shopName, $scope.totalPrice);
		$scope.goView('confirmOrder');
	};
  })