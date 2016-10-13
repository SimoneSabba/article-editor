myApp.controller('ContentCtrl', function($scope, blockService, modalService){
	
	$scope.blocks = blockService.getBlocks();

	$scope.toJSON = function() {
		return blockService.getBlocksToJSON();
	}

	$scope.edit = function(block) {
		modalService.open(block.type, block, 'edit');
	}
});