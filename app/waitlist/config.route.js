(function() {
	'use strict';
	angular
		.module('app.waitlist')
		.config(configFunction)
	
		configFunction.$inject = ['$routeProvider'];

		//controller
		//controllerAs property

		function configFunction($routeProvider) {
			$routeProvider.when('/waitlist', {
				templateUrl: 'app/waitlist/waitlist.html',
				controller: 'WaitListController',
				controllerAs: 'vm'
			});

		}

})();