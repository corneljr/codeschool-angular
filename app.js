(function(){
	var app = angular.module('store', [])

	app.controller('StoreController', function($scope){
		$scope.products = gems
	});

	app.controller('PanelController', function($scope){
		$scope.tab = 1

		$scope.selectTab = function(setTab) {
			$scope.tab = setTab
		};

		$scope.isSelected = function(checkTab) {
			return $scope.tab === checkTab;
		}
	});

	app.controller('ReviewController', function($scope) {
		$scope.review = {};
		$scope.addReview = function(product) {
			product.reviews.push($scope.review);
			$scope.review = {};
		}
	});

	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'This is a truly amazing gem',
			canPurchase: true,
			soldOut: false,
			reviews: [
				{
					stars: 5,
					body: 'I love this product!',
					author: 'joe@thomas.com'
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'This gem is absolutely gorgeous',
			canPurchase: true,
			soldOut: false,
			reviews: [
				{
					stars: 4,
					body: 'Not a bad product!',
					author: 'jim@jones.com'
				}
			]
		}
	];

})();
