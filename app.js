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

			scope.disabled = false; 
			if(attr.disable) {
				attr.$observe('disable', function(value) {
					scope.disabled = (value !== 'false');
				})
			}

			tabsetCtrl.addTab(scope);
		}
	}
})

.directive('tabset', function() {
	return {
		restrict: 'E',
		transclude: 'true',
		scope: {
			type: '@',
		},
		templateUrl: 'tabset.html',
		bindToController: 'true',
		controllerAs: 'tabset', // allows us to bind properties directly to controller. Removes dependency on $scope
		controller: function() {
			// using a controller allows us to inject the tabset controller instance into each of the tab link functions
			var self = this; // ES6???
			self.tabs = []

			self.classes = {}

			// can access type prop because of bindToController, otherwise would have to inject $scope
			if(self.type === 'pills') {
				self.classes['nav-pills'] = true;
			} else {
				// tabs by default
				self.classes['nav-tabs'] = true;
			}

			self.select = function(selectedTab) {
				// if disabled, don't do anything
				if(selectedTab.disabled) { return; }
				angular.forEach(self.tabs, function(tab) {
					if(tab.active && tab !== selectedTab) {
						tab.active = false;
					}
				})
				selectedTab.active = true; 
			}

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