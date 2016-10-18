myApp.controller('ModalCtrl', function($scope, $uibModalInstance, type, info, operation, blockService, productsService){

	$scope.info = info;
	$scope.type = type;

	if(blockService.isProdBlock(type)) {
		$scope.prods = productsService.getProducts();
		$scope.info.products = info.products ? info.products : [];
		productsService.initSelected($scope.info.products);
	}

	$scope.isSelected = function(prod) {
		return !_.isUndefined(productsService.isSelected(prod.id));
	}

	$scope.select = function(prod) {
		productsService.select(prod);
		$scope.info.products = productsService.getSelectedProds();
	}

	$scope.isNew = function() {
		return operation === 'new';
	}

	$scope.isEdit = function() {
		return operation === 'edit';
	}

	function closeModal() {
		$uibModalInstance.close();
	}

	$scope.save = function () {
		if ($scope.isNew()) {
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