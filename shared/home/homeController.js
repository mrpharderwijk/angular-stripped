(function() {
  'use strict';

  /**
   *  Fetches content en determines what type of template needs to be shown
   *  ! This is a workaround build for Wordpress page-templating and thus
   *  ! bringing extra routing to the game
   */
  angular.module('homeModule')
    .controller('homeController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    	$scope.init = function() {
    		console.log('test');
    	}();  
    }]);
})();