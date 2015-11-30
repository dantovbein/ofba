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
      				$scope.editImagen();
      			}
			}
		}
	}]);