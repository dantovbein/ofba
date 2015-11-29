'use strict';

angular
	.module('app')
	.controller('IntegrantesListCtrl',['$scope',function($scope){
		
		$scope.edit = function(integrante) {
			console.log(integrante);
			$scope.integranteSeleccionado.id = integrante.id;
			$scope.integranteSeleccionado.nombres = integrante.nombres;
			$scope.integranteSeleccionado.apellidos = integrante.apellidos;
			$scope.integranteSeleccionado.idInstrumento = integrante.idInstrumento;
			$scope.integranteSeleccionado.idNacionalidad = integrante.idNacionalidad;
			$scope.integranteSeleccionado.idTipoDirector = integrante.idTipoDirector;
			$scope.integranteSeleccionado.idTipoIntegrante = integrante.idTipoIntegrante;
			$scope.integranteSeleccionado.strNacionalidad = integrante.strNacionalidad;
		}
		
	}]);