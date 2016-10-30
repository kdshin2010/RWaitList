(function() {
	angular
		.module('app.waitlist')
		.controller('WaitListController', WaitListController)

	WaitListController.$inject = ['$firebaseArray']

	function WaitListController($firebaseArray) {
		console.log('here')
		var vm = this;
		vm.addParty = addParty;

		//create Party constructor
		function Party() {
			this.name = '';
			this.phone = '';
			this.size = '';
			this.done = false;
			this.notified = false;
		}

		vm.newParty = new Party();
		var fireParties = firebase.database().ref('parties');
		vm.parties = $firebaseArray(fireParties);

		//modify to add new party
		function addParty() {
			//use firebase method
			vm.parties.$add(vm.newParty);
		}

		//define add function party
	}

})()