(function() {
	'use strict';
	angular
		.module('app.waitlist')
		.config(configFunction)
	
		configFunction.$inject = ['$routeProvider'];

		function configFunction($routeProvider) {
			$routeProvider.when('/waitlist', {
				templateUrl: 'app/waitlist/waitlist.html'
			});

		}

})();