'use strict';

angular.module('app')
	.controller('IntegrantesCtrl',['$scope','IntegrantesService','$http','_',function($scope,IntegrantesService,_){
		
		$scope.integranteSeleccionado = {};

		$scope.integrantes = [];
		$scope.instrumentos = [];
		$scope.tiposDirector = [];
		$scope.tiposIntegrante = [];

		IntegrantesService.getIntegrantes().success(function(response) {
			$scope.integrantes = response;
    	});

		IntegrantesService.getInstrumentos().success(function(response) {
			$scope.instrumentos = response;
    	});

    	IntegrantesService.getTiposDirector().success(function(response) {
			$scope.tiposDirector = response;
    	});

    	IntegrantesService.getTiposIntegrante().success(function(response) {
			$scope.tiposIntegrante = response;
    	});

    	$scope.nacionalidades = IntegrantesService.getNacionalidades();

    	
		

		$scope.getInstrumento = function(idInstrumento) {
			if(idInstrumento === null || idInstrumento === undefined || $scope.instrumentos.length == 0)  {
				return "";
			} else {
				var instrumento = "";
				$scope.instrumentos.forEach(function(ins){ 
					if(ins.id === idInstrumento) {
						instrumento = ins.codigoTexto;
					}
				});
			}
			return instrumento;
		}

		$scope.getTipoDirector = function(idTipoDirector) {
			if(idTipoDirector === null || idTipoDirector === undefined || $scope.tiposDirector.length == 0) {
				return "";
			} else {
				var tipoDirector = "";
				$scope.tiposDirector.forEach(function(d){ 
					if(d.id === idTipoDirector) {
						tipoDirector = d.codigoTipo;
					}
				});
			}

			return $scope.parseTipoDirector(tipoDirector);
		}

		$scope.parseTipoDirector = function(str) {
			return str.substring('TIPO_DIRECTOR_'.length).replace(/_/g,' ').toLowerCase();;
		}

		$scope.getTipoIntegrante = function(idTipoIntegrante) {
			if(idTipoIntegrante === null || idTipoIntegrante === undefined || $scope.tiposIntegrante.length == 0) {
				return "";
			} else {
				var tipoIntegrante = "";
				$scope.tiposIntegrante.forEach(function(d){ 
					if(d.id === idTipoIntegrante) {
						tipoIntegrante = d.codigoTexto;
					}
				});
			}
			return $scope.parseTipoIntegrante(tipoIntegrante);
		}

		$scope.parseTipoIntegrante = function(str) {
			return str.substring('TIPO_INTEGRANTE_'.length).replace(/_/g,' ').toLowerCase();
		}

	}]);