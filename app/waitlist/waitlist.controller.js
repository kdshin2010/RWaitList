(function() {
	angular
		.module('app.waitlist')
		.controller('WaitListController', WaitListController)

	WaitListController.$inject = ['$firebaseArray']

	function WaitListController($firebaseArray) {
		console.log('here')
		var vm = this;
		var fireParties = firebase.database().ref('parties');
		var fireTextMessages = firebase.database().ref('textMessagese')


		function Party() {
			this.name = '';
			this.phone = '';
			this.size = '';
			this.done = false;
			this.notified = false;
		}


		//create Party constructor


		vm.newParty = new Party();
		vm.parties = $firebaseArray(fireParties);
		vm.addParty = addParty;
		vm.removeParty = removeParty;
		vm.sendTextMessage = sendTextMessage;
		vm.toggleDone = toggleDone


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

		function sendTextMessage(party) {
			console.log('calling')
			// takes party parameter 
			//construct textMEssage object
			var newTextMessage = {
				phoneNumber: party.phone,
				size: party.size,
				name: party.name
			};
			fireTextMessages.push(newTextMessage);
			party.notified = true;
			vm.parties.$save(party);
		}

		function toggleDone(party) {
			console.log('calling')
			//grab vm.parties.$save(party) //saves local changes to firebase
			vm.parties.$save(party)
		}

		//define add function party
	}

})()