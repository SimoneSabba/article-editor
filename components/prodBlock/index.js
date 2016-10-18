myApp.directive('prodBlock', function() {
  return {
  	restrict: 'E',
  	replace: true,
  	scope: {
  		products: '='
  	},
    templateUrl: './components/prodBlock/template'
  };
});
