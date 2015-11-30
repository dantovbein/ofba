'use strict'

angular
	.module('app')
	.controller('GaleriaImagenesListCtrl',['$scope', function($scope){
		$scope.edit = function(imagen) {
			console.log(imagen);
			$scope.cleanErrorText();
			$scope.add(false);
			$scope.imagenSeleccionada.id = imagen.id;
			$scope.imagenSeleccionada.orden = imagen.orden;
			$scope.imagenSeleccionada.path = imagen.path;
			$scope.imagenSeleccionada.codigoTexto = imagen.codigoTexto;
			$scope.imagenSeleccionada.texto = imagen.texto;
		}
	}]);