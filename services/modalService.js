myApp.service('modalService', function($uibModal){
	
	var options = {
		templateUrl: '../components/modal/template.html',
		controller: 'ModalCtrl',
	};

	this.open = function(type) {
		options.resolve = {
			type: function() {
				return type;
			}
		}

		$uibModal.open(options);
	}
	return this;

});