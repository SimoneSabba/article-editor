myApp.directive('title', function() {
  return {
  	restrict: 'E',
  	replace: true,
    templateUrl: './components/title/template'
  };
});
