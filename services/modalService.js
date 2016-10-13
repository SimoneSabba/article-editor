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

	this.open = function(type, info) {
		addResolveType(type);
		addResolveInfo(info);
		$uibModal.open(options);
	}
	return this;

});