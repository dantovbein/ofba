'use strict';

angular
	.module('app')
	.controller('IntegrantesCtrl',[ '$scope','$stateParams','$http','_','IntegrantesService','TiposDirectorService','NacionalidadesService','integrantes','tiposIntegrante','instrumentos','tiposDirector','nacionalidades',
		function($scope, $stateParams, $http, _ ,IntegrantesService,TiposDirectorService,NacionalidadesService,integrantes,tiposIntegrante,instrumentos,tiposDirector,nacionalidades ){
			$scope.params = $stateParams;
			$scope.integrantes = integrantes;
			$scope.instrumentos = instrumentos;
			$scope.tiposDirector = tiposDirector;
			$scope.tiposIntegrante = tiposIntegrante;
			$scope.nacionalidades = nacionalidades;

			console.log($scope.integrantes);
			console.log($scope.tiposDirector);
			
			$scope.integranteSeleccionado = window._.filter($scope.integrantes,function(i){
				return 	i.id == $scope.params.id;
			})[0] || {};
			
			$scope.errorText = "";
			$scope.add = true;

			/*$scope.parseTipoDirector = function(str) {
				return TiposDirectorService.parseTipoDirector(str);
			}*/

			/*$scope.parseTipoIntegrante = function(str) {
				return IntegrantesService.parseTipoIntegrante(str);
			}*/

			$scope.getInstrumento = function(idInstrumento) {
				if(idInstrumento == "" || idInstrumento == null) {
					return "";
				} else {
					return window._.filter($scope.instrumentos,function(instrumento){
						return instrumento.id === idInstrumento;
					})[0].codigoTexto;
				}				
			}

			$scope.getTipoIntegrante = function(idTipoIntegrante) {
				if(idTipoIntegrante == "" || idTipoIntegrante == null) {
					return "";
				} else {
					return IntegrantesService.parseTipoIntegrante(window._.filter($scope.tiposIntegrante,function(tipoIntegrante){
						return tipoIntegrante.id === idTipoIntegrante;
					})[0].codigoTexto);
				}				
			}

			$scope.getTipoDirector = function(idTipoDirector) {
				console.log(idTipoDirector)
				if(idTipoDirector == "" || idTipoDirector == null || idTipoDirector == 0) {
					return "";
				} else {
					return TiposDirectorService.parseTipoDirector(window._.filter($scope.tiposDirector,function(tipoDirector){
						return tipoDirector.id === idTipoDirector;
					})[0].codigoTipo);
				}				
			}

			$scope.delete = function(id) {
				$scope.idToDelete = id;
				
				IntegrantesService.deleteIntegrante(id).success(function(response) {
					$scope.integrantes = window._.reject($scope.integrantes, function(integrante){
			 			return integrante.id == $scope.idToDelete;
					});
				});
			}

			$scope.reloadIntegrantes = function() {
				IntegrantesService.getIntegrantes().then(function(response){
					$scope.integrantes = response;
				});
			}

			$scope.cleanFields = function() {
				$scope.integranteSeleccionado = {};
				$scope.add = true;
			}

			$scope.onEdit = function() {
				$scope.add = false;
			}

			$scope.disabledTipoDirector = function(idTipoIntegrante) {
				if(idTipoIntegrante != '2') {
					$scope.integranteSeleccionado.idTipoDirector = '';
					return true;
				} else {
					return false;
				}
			}

			$scope.disabledInstrumentos = function(idTipoIntegrante) {
				if(idTipoIntegrante == '2' || idTipoIntegrante == '9') {
					$scope.integranteSeleccionado.idInstrumento = '';
					return true;
				} else {
					return false;
				}
			}

			$scope.getStrNacionalidad = function(idNacionalidad) {
				return window._.filter($scope.nacionalidades,function(nacionalidad){
					if(nacionalidad.id == idNacionalidad) {
						return nacionalidad.codigoNacionalidad;
					}
				})[0].codigoNacionalidad;
			}
        }
	]);