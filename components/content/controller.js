myApp.controller('ContentCtrl', function($scope, blockService){
	$scope.blocks = blockService.getBlocks();
});