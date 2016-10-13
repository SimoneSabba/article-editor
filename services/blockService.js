myApp.service('blockService', function(productsService){
	
	var 
		blocks = [],
		index = 0,
		blockToAdd = {};

	this.addTextBlock = function(info) {
		blockToAdd = {};
		blockToAdd.id = index;
		blockToAdd.type = 'text';
		blockToAdd.title = info.title;
		blockToAdd.body = info.body;
		blocks.push(blockToAdd);
		index++;
	}

	this.addProdBlock = function(info) {
		blockToAdd = {};
		blockToAdd.id = index;
		blockToAdd.type = 'products';
		blockToAdd.products = info.products;
		blocks.push(blockToAdd);
		index++;
		productsService.initSelected();
	}

	this.addBlock = function(type, info) {
		if (this.isTextBlock(type)) {
			this.addTextBlock(info);
		} else if (this.isProdBlock(type)) {
			this.addProdBlock(info);
		}
	}

	this.removeBlock = function(id) {
		_.remove(this.getBlocks(), function(el) {
				  	return el.id === id;
				});
	}

	this.editBlock = function(block) {
		var blocks = this.getBlocks(),
			index = _.indexOf(blocks, _.find(blocks, {id: block.id}));

		blocks.splice(index, 1, block);
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
		return info.title && info.body || info.products && info.products.length>0;
	}
	return this;

});