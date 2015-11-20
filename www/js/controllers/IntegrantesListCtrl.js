angular.module('app')
	.controller('IntegrantesListCtrl',['$scope',function($scope){
		$scope.users = [
			{ id:'1', nombres: 'Alfija', apellidos: 'Gubaidulina', idTipoIntegrante:'', idInstrumento:'', idNacionalidad:'', idTipoDirector:'', str_nacionalidad:'' },
			{ id:'1', nombres: 'Mariano', apellidos: 'Rey', idTipoIntegrante:'', idInstrumento:'', idNacionalidad:'', idTipoDirector:'', str_nacionalidad:'' },
			{ id:'1', nombres: 'Matías', apellidos: 'Tchicourel', idTipoIntegrante:'', idInstrumento:'', idNacionalidad:'', idTipoDirector:'', str_nacionalidad:'' },
			{ id:'1', nombres: 'Eduardo', apellidos: 'Ihidoype', idTipoIntegrante:'', idInstrumento:'', idNacionalidad:'', idTipoDirector:'', str_nacionalidad:'' }
		];
		$scope.onClickUser = function(user) {
			$scope.currentUser.name = user.name;
			$scope.currentUser.lastname = user.lastname;
		}
	}]);