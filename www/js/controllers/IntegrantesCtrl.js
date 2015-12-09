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
			
			$scope.integranteSeleccionado = window._.filter($scope.integrantes,function(i){
				return 	i.id == $scope.params.id;
			})[0] || {};
			
			$scope.errorText = "";
			$scope.add = true;

			$scope.parseTipoDirector = function(str) {
				return TiposDirectorService.parseTipoDirector(str);
			}

			$scope.parseTipoIntegrante = function(str) {
				return IntegrantesService.parseTipoIntegrante(str);
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

			$scope.showDirector = function(idTipoIntegrante) {
			if(idTipoIntegrante == '2') {
				return true;
			} else {
				$scope.integranteSeleccionado.idTipoDirector = '';
				return false;
			}

			$scope.getStrNacionalidad = function(idNacionalidad) {
				return window._.filter($scope.nacionalidades,function(nacionalidad){
					if(nacionalidad.id == idNacionalidad) {
						return nacionalidad.codigoNacionalidad;
					}
				});
			}
        }
	}]);