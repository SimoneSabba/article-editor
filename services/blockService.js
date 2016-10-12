myApp.service('blockService', function($http){
	
	var 
		blocks = [],
		index = 0;

	this.addBlock = function(block) {
		block.id = index;
		blocks.push(block);
		index++;
	}

	this.removeBlock = function() {

	}

	this.getBlocks = function() {
		return blocks;
	}
	return this;

});