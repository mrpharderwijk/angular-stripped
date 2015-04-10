(function() {
  'use strict';

  /**
   *  This config determines all routes of the app
   */
  angular.module('[appname]')
    .config(['$routeProvider', '$locationProvider', 'VIEWS_URL', function($routeProvider, $locationProvider, VIEWS_URL ) {
      $routeProvider.when('/', {
        templateUrl : VIEWS_URL + 'shared/content/contentHomeView.html',
        controller: 'contentController'
      });

      $routeProvider.otherwise({
        redirectTo : '/'
      });

      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
  }]);
})();