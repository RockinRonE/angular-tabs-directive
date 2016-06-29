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

.directive('tabset', function() {
	return {
		restrict: 'E',
		transclude: 'true',
		scope: {},
		templateUrl: 'tabset.html',
		bindToController: 'true',
		controllerAs: 'tabset', // allows us to bind properties directly to controller. Removes dependency on $scope
		controller: function() {
			var self = this; // ES6???
			self.tabs = []
		}
	}
})

})(window);