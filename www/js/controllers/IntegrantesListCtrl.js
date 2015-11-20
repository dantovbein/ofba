angular.module('app')
	.controller('IntegrantesListCtrl',['$scope',function($scope){
		$scope.integrantes = [
			{ id:'1', nombres: 'Alfija', apellidos: 'Gubaidulina', idTipoIntegrante:'', idInstrumento:'', idNacionalidad:'', idTipoDirector:'', str_nacionalidad:'' },
			{ id:'1', nombres: 'Mariano', apellidos: 'Rey', idTipoIntegrante:'', idInstrumento:'', idNacionalidad:'', idTipoDirector:'', str_nacionalidad:'' },
			{ id:'1', nombres: 'Matías', apellidos: 'Tchicourel', idTipoIntegrante:'', idInstrumento:'', idNacionalidad:'', idTipoDirector:'', str_nacionalidad:'' },
			{ id:'1', nombres: 'Eduardo', apellidos: 'Ihidoype', idTipoIntegrante:'', idInstrumento:'', idNacionalidad:'', idTipoDirector:'', str_nacionalidad:'' }
		];

		$scope.onClickIntegrante = function(integrante) {
			$scope.integranteSeleccionado.nombres = integrante.nombres;
			$scope.integranteSeleccionado.apellidos = integrante.apellidos;
		}
	}]);