;(function(window) {

angular.module('app', [])

.directive('tab', function() {
	return {  // This is a DDO, directive definition object
		restrict: 'E',
		transclude: true,
		template: '<div role="tabpanel" ng-show="active" ng-transclude></div>',
		require: '^tabset', // instructs directive to move up the scope hierarchy one level and look for controller
		scope: {
			heading: '@' // scope prop should be string
		}, // isolated scope
		link: function(scope, elem, attr, tabsetCtrl) {
			scope.active = false; 
			tabsetCtrl.addTab(scope);
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

			self.addTab = function addTab(tab) {
				self.tabs.push(tab);

				if(self.tabs.length === 1) {
					tab.active = true; 
				}
			}
		}
	}
})

})(window);