myApp.service('modalService', function($uibModal, blockService, productsService){
	
	var options = {
		templateUrl: '../components/modal/template.html',
		controller: 'ModalCtrl',
		resolve: {}
	};

	function addResolveInfo(info) {
		options.resolve.info = function() {
			return info;
		}
	}

	function addResolveType(type) {
		options.resolve.type = function() {
			return type;
		}
	}

	function addResolveOperation(op) {
		options.resolve.operation = function() {
			return op;
		}
	}

	this.open = function(type, info, op) {
		addResolveType(type);
		addResolveInfo(info);
		addResolveOperation(op);
		$uibModal.open(options);
	}
	return this;

});