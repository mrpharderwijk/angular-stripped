(function() {
	'use strict';
 
	/**
	 *	Builds up the mainmenu
	 */
	angular.module('wdMainMenuModule')
		.directive('wdMainMenu', ['$rootScope', 'VIEWS_URL', function ($rootScope, VIEWS_URL) {
			return {
				restrict: 'E',
				templateUrl: VIEWS_URL + '/components/wdMainMenu/wdMainMenuView.html',
				link: function (scope, element, attrs) {}
			};
		}]);

})();