myApp.service('jsonService', function(blockService){
	
	var json = [];

	function init() {
		json = [];
	}

	function prepareJson(blocks) {
		_.each(blocks, function(b){
			if(b.type === 'text') {
				json.push(formatTextBlock(b));
			} else {
				json.push(formatProductsBlock(b));
			}
		})
	}

	function formatTextBlock(data) {
		return {
			type: 'text',
			title: data.title,
			body: data.body
		}
	}

	function formatProductsBlock(data) {
		var block = {
			type: 'products',
			products: []
		}
		_.each(data.products, function(b){
			block.products.push(b.id);
		});

		return block;
	}


	this.getBlocksToJSON = function() {
		init();
		var blocks = blockService.getBlocks();
		prepareJson(blocks);
		return JSON.stringify(json, null, 4);
	}

	return this;

});