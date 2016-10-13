myApp.controller('ButtonCtrl', function($scope, modalService, $uibModal){
	
	$scope.addTextBlock = function() {
		modalService.open('text');
	}

	$scope.addProdBlock = function() {
		modalService.open('products');
	}
});