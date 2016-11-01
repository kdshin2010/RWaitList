(function() {
	'use strict';
	angular
		.module('app.auth')
		.config(configFunction)
	
		configFunction.$inject = ['$routeProvider'];

		function configFunction($routeProvider) {
			console.log('here')
			$routeProvider.when('/register', {
				templateUrl: 'app/auth/register.html',
				controller: 'AuthController',
				controllerAs: 'vm'
			});

		}

})()