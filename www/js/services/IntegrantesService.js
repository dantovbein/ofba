'use strict';

angular
	.module('app')
	.factory('IntegrantesService',['$http',function($http){
		var integrantesService = {};

		integrantesService.getIntegrantes = function() {
			return $http({
				url: 'http://localhost/ofba_service/service/manager/getIntegrantes.php'
			}).success(function(response) {
				return response;
			}).error(function(error){
				console.log('error: ' + error);
			});
		}

		integrantesService.postIntegrante = function(integrante) {
			return $http({
				method: 'GET',
				url: 'http://localhost/ofba_service/service/manager/postIntegrante.php?nombres=' + integrante.nombres + '&apellidos=' + integrante.apellidos + '&idInstrumento=' + integrante.idInstrumento + '&idNacionalidad=' + integrante.idNacionalidad + '&idTipoDirector=' + integrante.idTipoDirector + '&idTipoIntegrante=' + integrante.idTipoIntegrante + '&idNacionalidad=' + integrante.idNacionalidad
			}).error(function(error) {
				console.log('error: ' + error);
			});
		}

		integrantesService.editIntegrante = function(integrante) {
			return $http({
				method: 'GET',
				url: 'http://localhost/ofba_service/service/manager/editIntegrante.php?id=' + integrante.id + '&nombres=' + integrante.nombres + '&apellidos=' + integrante.apellidos + '&idInstrumento=' + integrante.idInstrumento + '&idNacionalidad=' + integrante.idNacionalidad + '&idTipoDirector=' + integrante.idTipoDirector + '&idTipoIntegrante=' + integrante.idTipoIntegrante + '&idNacionalidad=' + integrante.idNacionalidad
			}).error(function(error) {
				console.log('error: ' + error);
			});
		}

		integrantesService.deleteIntegrante = function(id) {
			return $http({
					method: 'GET',
					url: 'http://localhost/ofba_service/service/manager/deleteIntegrante.php?id=' + id,
				}).error(function(error) {
					console.log('error: ' + error);
				});
		}

		integrantesService.getInstrumentos = function() {
			return $http({
				url: 'http://localhost/ofba_service/service/manager/getInstrumentos.php'
			}).success(function(response) {
				return response;
			}).error(function(error){
				console.log('error: ' + error);
			});
		}

		integrantesService.getTiposDirector = function() {
			return $http({
				url: 'http://localhost/ofba_service/service/manager/getTiposDirector.php'
			}).success(function(response) {
				return response;
			}).error(function(error){
				console.log('error: ' + error);
			});
		}

		integrantesService.getTiposIntegrante = function() {
			return $http({
				url: 'http://localhost/ofba_service/service/manager/getTiposIntegrante.php'
			}).success(function(response) {
				return response;
			}).error(function(error){
				console.log('error: ' + error);
			});
		}

		integrantesService.getNacionalidades = function() {
			return [{ idNacionalidad: 1, strNacionalidad: 'Argentino' },
					{ idNacionalidad: 2, strNacionalidad: 'Extranjero' }];
		}

		return integrantesService;
	}]);