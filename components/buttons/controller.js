myApp.controller('ButtonCtrl', function($scope, modalService){
	
	$scope.addTextBlock = function() {
		modalService.open('text', {}, 'new');
	}

	$scope.addProdBlock = function() {
		modalService.open('products', {}, 'new');
	}
});