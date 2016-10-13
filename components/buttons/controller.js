myApp.controller('ButtonCtrl', function($scope, modalService){
	
	$scope.addTextBlock = function() {
		modalService.open('text');
	}

	$scope.addProdBlock = function() {
		modalService.open('products');
	}
});