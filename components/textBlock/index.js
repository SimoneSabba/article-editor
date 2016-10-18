myApp.directive('textBlock', function() {
  return {
  	restrict: 'E',
  	replace: true,
  	//controller: 'TextBlockCtrl',
  	scope: {
  		info: '='
  	},
    templateUrl: './components/textBlock/template'
  };
});
