(function() {
  'use strict';

  /**
   *	The app constants
   */
	angular.module('mrpharderwijk')
		.constant('APP_URL', 'wp-content/themes/[project-name]/build/app/')
		.constant('SHARED_URL', 'wp-content/themes/[project-name]/build/app/shared/')
		.constant('COMPONENTS_URL', 'wp-content/themes/[project-name]/build/app/components/')
		.constant('VIEWS_URL', 'wp-content/themes/[project-name]/build/app/views/');

})();