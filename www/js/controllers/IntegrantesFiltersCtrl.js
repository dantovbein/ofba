'use strict';

angular
	.module('app')
	.controller('IntegrantesFiltersCtrl',['$scope','$state','IntegrantesService',function($scope,$state,IntegrantesService){
		$scope.postIntegrante = function(integrante) {
			console.log(integrante)
			if(integrante.id == undefined) {
				console.log("entra post")
				IntegrantesService.postIntegrante(integrante).success(function(response) {
					console.log("integrante agregado: " + response);
					//$state.go("main.integrantes",{id:Number(response)});
					$state.go("main.integrantes");
				});
			} else {
				console.log("entra edit", console.log(integrante.id))
				IntegrantesService.editIntegrante(integrante).success(function(response) {
					console.log("integrante editado: " + response);
					$state.go("main.integrantes",{id:response});
				});
			}
		}


		$scope.onCleanFields = function() {
			$scope.integranteSeleccionado = {};
		}

	}]);