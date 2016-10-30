(function() {
	angular
		.module('app.waitlist')
		.controller('WaitListController', WaitListController)

	WaitListController.$inject = ['$firebaseArray']

	function WaitListController($firebaseArray) {
		console.log('here')
		var vm = this;
		vm.addParty = addParty

		//https://waitlist-ed21f.firebaseio.com

		var fireParties = firebase.database().ref('parties');
		vm.parties = $firebaseArray(fireParties);

		function addParty() {
			//use firebase method
			vm.parties.$add('another');
		}

		//define add function party
	}

})()