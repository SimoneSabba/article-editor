myApp.controller('ButtonCtrl', function($scope, modalService, jsonService){
	
	$scope.JSONview = false;

	$scope.showJSON = function(val) {
		$scope.JSONview = val;
		$scope.json = jsonService.getBlocksToJSON();
	}
	
	$scope.addTextBlock = function() {
		modalService.open('text', {}, 'new');
	}

	$scope.addProdBlock = function() {
		modalService.open('products', {}, 'new');
	}
});