myApp.controller('ModalCtrl', function($scope, $uibModalInstance, type, info, operation, blockService){

	$scope.info = info;

	function isNew() {
		return operation === 'new';
	}

	$scope.isEdit = function() {
		return operation === 'edit';
	}

	function closeModal() {
		$uibModalInstance.close();
	}

	$scope.save = function () {
		if (isNew()) {
			blockService.addBlock(type, $scope.info);
		} else if ($scope.isEdit()) {
			blockService.editBlock($scope.info);
		}
		closeModal();
  	};

  	$scope.isValidBlock = function() {
  		return blockService.isValidBlock($scope.info);
  	}

  	$scope.delete = function() {
  		blockService.removeBlock($scope.info.id);
  		closeModal();
  	}

	$scope.close = function () {
		$scope.info = info;
		closeModal();
	};
});