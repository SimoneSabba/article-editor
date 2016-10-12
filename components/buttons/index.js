myApp.directive('addButtons', function() {
  return {
  	restrict: 'E',
  	replace: true,
  	controller: 'ButtonCtrl',
    templateUrl: './components/buttons/template'
  };
});
