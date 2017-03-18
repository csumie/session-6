var app = angular.module('foodApp', ['ngRoute']);


app.controller('NavController', function($scope, $location){
	$scope.isActive = function(viewLocation) {
		let active = (viewLocation === $location.path())
		return active
	}
})