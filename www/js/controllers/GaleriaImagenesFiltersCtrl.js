'use strict'

angular
	.module('app')
	.controller('GaleriaImagenesFiltersCtrl',['$scope','GaleriaImagenesService',function($scope,GaleriaImagenesService){
		$scope.postImagen = function() {
			if($scope.imagenSeleccionada.id == undefined) {
				if($scope.imagenSeleccionada.imagenAgregada == undefined) {
      				$scope.errorText = "Se debe cargar alguna imágen";
      				return false;
      			} else if($scope.imagenSeleccionada.texto == undefined) {
      				$scope.errorText = "Se debe escribir alguna descripción de la imágen";
      				return false;
      			} else {
      				$scope.uploadImagen();
				}
			} else {
				if($scope.imagenSeleccionada.texto == undefined || $scope.imagenSeleccionada.texto == "") {
      				$scope.errorText = "Se debe escribir alguna descripción de la imágen";
      				return false;
      			} else {
      				GaleriaImagenesService.editImagen($scope.imagenSeleccionada).then(function(response) {
						if(response.status==200) {
							console.log("Se editó correctamente");
							$scope.resetFormFields();
							//$scope.reloadIntegrantes();
						}
					});
      			}
			}
		}
	}]);