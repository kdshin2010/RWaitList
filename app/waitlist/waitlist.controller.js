(function() {
	angular
		.module('app.waitlist')
		.controller('WaitListController', WaitListController)

	WaitListController.$inject = ['$firebaseArray']

	function WaitListController($firebaseArray) {
		console.log('here')
		var vm = this;
		var fireParties = firebase.database().ref('parties');


		function Party() {
			this.name = '';
			this.phone = '';
			this.size = '';
			this.done = false;
			this.notified = false;
		}

		vm.addParty = addParty;
		vm.removeParty = removeParty

		//create Party constructor


		vm.newParty = new Party();
		vm.parties = $firebaseArray(fireParties);

		//modify to add new party
		function addParty() {
			//use firebase method
			vm.parties.$add(vm.newParty);
			//to clear form set vm.newParty to party constructor
			vm.newParty = new Party() 
		}

		//remove party method

		function removeParty(party) {
			//referenced by the ng-repeat
			vm.parties.$remove(party);

		}

		//define add function party
	}

})()