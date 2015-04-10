(function() {
	'use strict';

	/**
	 *	Define all modules that the app uses
	 */
  angular.module('[appname]', [
    'ngRoute',
    'ngResource',

    'app.shared',
    'app.components'
  ]);
  
})();