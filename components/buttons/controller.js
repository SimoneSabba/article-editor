myApp.controller('ButtonCtrl', function($scope, modalService){
	
	$scope.JSONview = false;

	$scope.showJSON = function(val) {
		$scope.JSONview = val;
	}
	
	$scope.addTextBlock = function() {
		modalService.open('text', {}, 'new');
	}

	$scope.addProdBlock = function() {
		modalService.open('products', {}, 'new');
	}
});