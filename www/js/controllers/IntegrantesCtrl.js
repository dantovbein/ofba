angular.module('app')
	.controller('IntegrantesCtrl',['$scope',function($scope){
		$scope.currentMember = {};
		$scope.resetCurrentMember = function() {
			$scope.currentMember = {};
		}
	}]);