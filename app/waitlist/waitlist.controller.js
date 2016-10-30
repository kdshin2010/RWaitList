(function() {
	angular
		.module('app.waitlist')
		.controller('WaitListController', WaitListController)

	// WaitListController.$inject = []

	function WaitListController() {
		console.log('here')
		var vm = this;

		vm.parties = [1,2,4]
	}

})()