myApp.controller('ModalCtrl', function($scope, $uibModalInstance, type, blockService){

	$scope.save = function () {
		if(blockService.isTextBlock(type)) {
			blockService.addTextBlock($scope.title, $scope.model);	
		} else if (blockService.isProdBlock(type)) {
			blockService.addProdBlock();
		}
		
		console.log(blockService.getBlocks());
    	$uibModalInstance.close();
  	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
});