myApp.controller('ModalCtrl', function($scope, $uibModalInstance, type, blockService){

	$scope.save = function () {
		blockService.addBlock(type, $scope.info);
    	$uibModalInstance.close();
  	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
});