;(function(window) {

angular.module('app', [])

.directive('tab', function() {
	return {  // This is a DDO, directive definition object
		restrict: 'E',
		transclude: true,
		template: '<h2>Hello world!</h2> <div role="tabpanel" ng-transclude></div>',
		require: '^tabset', // instructs directive to move up the scope hierarchy one level and look for controller
		scope: {}, // isolated scope
		link: function(scope, elem, attr, tabsetCtrl) {

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
			// using a controller allows us to inject the tabset controller instance into each of the tab link functions
			var self = this; // ES6???
			self.tabs = []
		}
	}
})

})(window);