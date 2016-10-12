myApp.controller('ButtonCtrl', function($scope, blockService){
	$scope.addTextBlock = function() {
		var block = {
				type: 'text',
				title: 'my title',
				body: 'this is body'
			};

		blockService.addBlock(block);
	}

	$scope.addProdBlock = function() {
		var block = {
				type: 'products',
				products: [167687, 168012]
			};

		blockService.addBlock(block);
	}
});