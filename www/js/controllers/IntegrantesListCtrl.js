angular.module('app')
	.controller('IntegrantesListCtrl',['$scope',function($scope){
		$scope.users = [
			{ id:'1', name: 'Alfija', lastname: 'Gubaidulina' },
			{ id:'1', name: 'Mariano', lastname: 'Rey' },
			{ id:'1', name: 'Matías', lastname: 'Tchicourel' },
			{ id:'1', name: 'Eduardo', lastname: 'Ihidoype' }
		];
		$scope.onClickUser = function(user) {
			$scope.currentUser.name = user.name;
			$scope.currentUser.lastname = user.lastname;
		}
	}]);
