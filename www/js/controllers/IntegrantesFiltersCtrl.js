'use strict';

angular
	.module('app')
	.controller('IntegrantesFiltersCtrl',['$scope','$state','IntegrantesService','NacionalidadesService',function($scope,$state,IntegrantesService,NacionalidadesService){
		$scope.postIntegrante = function(integrante) {
			if(integrante.nombres == undefined) {
				$scope.errorText = "El campo de nombre es obligatorio";
				return false;
			} else if (integrante.apellidos == undefined) {
				$scope.errorText = "El campo de apellido es obligatorio";
				return false;
			} else if (integrante.idNacionalidad == undefined) {
				$scope.errorText = "El campo de nacionalidad es obligatorio";
				return false;
			} else {
				
				$scope.errorText = "";
				integrante.nombres = integrante.nombres;
				integrante.apellidos = integrante.apellidos;
				integrante.idNacionalidad = integrante.idNacionalidad;
				integrante.idInstrumento = integrante.idInstrumento || "";
				integrante.idTipoIntegrante = integrante.idTipoIntegrante || "";
				integrante.idTipoDirector = integrante.idTipoDirector || "";
				integrante.strNacionalidad = (integrante.idNacionalidad != "") ? NacionalidadesService.getStrNacionalidad(integrante.idNacionalidad) : "";
				
				if(integrante.id == undefined) {
					IntegrantesService.postIntegrante(integrante).then(function(response) {
						if(response.status==200) {
							console.log("Se agregó correctamente");
							$scope.cleanFields();
							$scope.reloadIntegrantes();
						}
					});
				} else {
					IntegrantesService.editIntegrante(integrante).then(function(response) {
						if(response.status==200) {
							console.log("Se editó correctamente");
							$scope.cleanFields();
							$scope.reloadIntegrantes();
						}
					});
				}

			}			
		}

		
	}]);