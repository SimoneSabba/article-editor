myApp.directive('content', function() {
  return {
  	restrict: 'E',
  	replace: true,
  	controller: 'ContentCtrl',
    templateUrl: './components/content/template'
  };
});
