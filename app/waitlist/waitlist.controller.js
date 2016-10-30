(function() {
	angular
		.module('app.waitlist')
		.controller('WaitListController', WaitListController)

	// WaitListController.$inject = []

	function WaitListController() {
		console.log('here')
		var vm = this;
		vm.addParty = addParty

		vm.parties = [1,2,4];
		function addParty() {
			vm.parties.push('another');
		}

		//define add function party
	}

})()