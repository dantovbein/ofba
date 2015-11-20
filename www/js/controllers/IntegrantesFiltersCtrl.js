angular.module('app')
	.controller('IntegrantesFiltersCtrl',['$scope',function($scope){
		$scope.onCleanFields = function(){
			//$scope.currentUser = {};
			$scope.resetCurrentUser();
		}
	}]);