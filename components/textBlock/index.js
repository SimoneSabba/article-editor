myApp.directive('textBlock', function() {
  return {
  	restrict: 'E',
  	replace: true,
  	scope: {
  		info: '='
  	},
    templateUrl: './components/textBlock/template'
  };
});
