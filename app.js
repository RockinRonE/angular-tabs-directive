;(function(window) {

angular.module('app', [])

.directive('tab', function() {
	return {  // This is a DDO, directive definition object
		restrict: 'E',
		transclude: true,
		template: '<h2>Hello world!</h2> <div role="tabpanel" ng-transclude></div>',
		scope: {}, // isolated scope
		link: function(scope, elem, attr) {
			
		}
	}
})

})(window);