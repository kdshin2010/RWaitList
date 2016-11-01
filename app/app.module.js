(function() {
	'use strict';
	angular
		.module('app', [
				'ngRoute',
				'firebase',

				//Third Party Module

				//custom module
				'app.landing',
				'app.waitlist',
				'app.auth'
		]);
})();

