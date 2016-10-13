myApp.controller('ModalCtrl', function($scope, $uibModalInstance, type, info, blockService){

	$scope.info = {};

	$scope.save = function () {
		if (blockService.isValidBlock($scope.info)) {
			blockService.addBlock(type, $scope.info);
			$uibModalInstance.close();
		}
		
  	};

  	$scope.delete = function() {
  		$uibModalInstance.close();
  	}

	$scope.close = function () {
		$scope.info = info;
		$uibModalInstance.close();
	};
});