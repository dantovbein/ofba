'use strict';

angular.module('app')
	.controller('IntegrantesCtrl',['$scope','IntegrantesService','$http',function($scope,IntegrantesService,$http){
		
		$http({
		  	method: 'GET',
		  	url: 'http://localhost/ofba_service/service/manager/getIntegrantes.php'
		}).then(function(callback){
			//console.log("Integrantes: ", callback.data);
			$scope.integrantes = callback.data;
		},function(callback){
			console.log("Error:" + callback);
		});

		$http({
		  	method: 'GET',
		  	url: 'http://localhost/ofba_service/service/manager/getInstrumentos.php'
		}).then(function(callback){
			//console.log("Instrumentos: ", callback.data);
			$scope.instrumentos = callback.data;
		},function(callback){
			console.log("Error:" + callback);
		});

		$http({
		  	method: 'GET',
		  	url: 'http://localhost/ofba_service/service/manager/getTiposDirector.php'
		}).then(function(callback){
			//console.log("Directores: ", callback.data);
			$scope.tiposDirector = callback.data;
		},function(callback){
			console.log("Error:" + callback);
		});

		$http({
		  	method: 'GET',
		  	url: 'http://localhost/ofba_service/service/manager/getTiposIntegrante.php'
		}).then(function(callback){
			//console.log("Tipos integrante: ", callback.data);
			$scope.tiposIntegrante = callback.data;
		},function(callback){
			console.log("Error:" + callback);
		});

		$scope.instrumentos = [];
		$scope.tiposDirector = [];
		$scope.tiposIntegrante = [];
		$scope.nacionalidades = [{
			idNacionalidad: 1,
			strNacionalidad: 'Argentino'
		},{
			idNacionalidad: 2,
			strNacionalidad: 'Extranjero'
		}];

		$scope.integranteSeleccionado = {};

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

		$scope.resetIntegranteSeleccionado = function() {
			$scope.integranteSeleccionado = {};
		}
	}]);