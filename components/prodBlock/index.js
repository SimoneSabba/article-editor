myApp.directive('prodBlock', function() {
  return {
  	restrict: 'E',
  	replace: true,
  	controller: 'ProdBlockCtrl',
  	scope: {
  		products: '='
  	},
    templateUrl: './components/prodBlock/template'
  };
});
