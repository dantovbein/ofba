'use strict';

angular
	.module('app')
	.controller('IntegrantesCtrl',[ '$scope','$stateParams','$http','_','IntegrantesService','integrantes','instrumentos','tiposDirector','tiposIntegrante', 'nacionalidades',
		function($scope, $stateParams, $http, _ ,IntegrantesService,integrantes,instrumentos,tiposDirector,tiposIntegrante,nacionalidades ){

			$scope.params = $stateParams;

			$scope.integrantes = integrantes.data;
			$scope.instrumentos = instrumentos.data;
			$scope.tiposDirector = tiposDirector.data;
			$scope.tiposIntegrante = tiposIntegrante.data;
			$scope.nacionalidades = nacionalidades;

			$scope.integranteSeleccionado = window._.filter($scope.integrantes,function(i){
				return 	i.id == $scope.params.id;
			})[0] || {};

			$scope.getInstrumento = function(idInstrumento) {
				if(idInstrumento === null || idInstrumento === undefined)  {
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
				if(idTipoDirector === null || idTipoDirector === undefined) {
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
				if(idTipoIntegrante === null || idTipoIntegrante === undefined) {
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

			$scope.deleteIntegrante = function(id) {
				$scope.idToDelete = id;
				
				IntegrantesService.deleteIntegrante(id).success(function(response) {
					$scope.integrantes = window._.reject($scope.integrantes, function(integrante){
			 			return integrante.id == $scope.idToDelete;
					});
				});
			}
	}]);