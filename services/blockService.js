myApp.service('blockService', function($http){
	
	var 
		blocks = [],
		index = 0,
		blockToAdd = {};

	this.addTextBlock = function(info) {
		blockToAdd = {};
		blockToAdd.type = 'text';
		blockToAdd.title = info.title;
		blockToAdd.body = info.body;
		
		blocks.push(blockToAdd);
	}

	this.addProdBlock = function(info) {
		blockToAdd = {};
		blockToAdd.type = 'products';
		blockToAdd.products = [167687, 168012];

		blocks.push(blockToAdd);
	}

	this.addBlock = function(type, info) {
		if (this.isTextBlock(type)) {
			this.addTextBlock(info);
		} else if (this.isProdBlock(type)) {
			this.addProdBlock(info);
		}
	}

	this.removeBlock = function() {

	}

	this.getBlocks = function() {
		return blocks;
	}

	this.isTextBlock = function(type) {
		return type === 'text';
	}

	this.isProdBlock = function(type) {
		return type === 'products';
	}

	this.isValidBlock = function(info) {
		return info.title && info.body ;
	}
	return this;

});