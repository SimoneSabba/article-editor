myApp.service('modalService', function($uibModal, blockService, productsService){
	
	var options = {
		templateUrl: '../components/modal/template.html',
		controller: 'ModalCtrl',
		resolve: {}
	};

	function addResolveInfo() {
		options.resolve.info = function() {
			return info;
		}
	}

	function addResolveType(type) {
		options.resolve.type = function() {
			return type;
		}
	}

	this.open = function(type) {
		addResolveType(type);
		$uibModal.open(options);
	}
	return this;

});