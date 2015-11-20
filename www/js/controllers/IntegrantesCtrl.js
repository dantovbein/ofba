angular.module('app')
	.controller('IntegrantesCtrl',['$scope',function($scope){
		$scope.currentUser = {};
		$scope.resetCurrentUser = function() {
			$scope.currentUser = {};
		}
	}]);