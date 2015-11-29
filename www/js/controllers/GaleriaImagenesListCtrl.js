'use strict'

angular
	.module('app')
	.controller('GaleriaImagenesListCtrl',['$scope', function($scope){
		$scope.edit = function(params) {
			$scope.cleanErrorText();
			$scope.onEdit();
			//console.log(params);
			$scope.imagenSeleccionada.path = params.imagen.path;
			$scope.imagenSeleccionada.codigoTexto = params.imagen.codigoTexto;
			$scope.imagenSeleccionada.texto = params.texto;
		}
	}]);