(function() {
	'use strict';
	angular
		.module('app.landing')
		.config(configFunction)
	
		configFunction.$inject = ['$routeProvider'];

		function configFunction($routeProvider) {
			console.log('here')
			$routeProvider.when('/', {
				templateUrl: 'app/landing/landing.html'
			});

		}

})()