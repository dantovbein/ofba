'use strict';

angular
	.module('app')
	.factory('IntegrantesService',['$http','config',function($http,config){
		var integrantesService = {};

		integrantesService.getIntegrantes = function() {
			return $http
				.get(config.path + 'service/manager/getIntegrantes.php')
				.then(function(response) {
					return response.data;
				}, function(error) {
					console.log('error: ' + error);
				});
		}

		integrantesService.postIntegrante = function(integrante) {
			return $http
		      	.get(config.path + 'service/manager/postIntegrante.php?nombres=' + integrante.nombres + '&apellidos=' + integrante.apellidos + '&idInstrumento=' + integrante.idInstrumento + '&idNacionalidad=' + integrante.idNacionalidad + '&idTipoDirector=' + integrante.idTipoDirector + '&idTipoIntegrante=' + integrante.idTipoIntegrante + '&idNacionalidad=' + integrante.idNacionalidad + '&strNacionalidad=' + integrante.strNacionalidad)
		      	.then(function (response) {
		      		console.log("pasa response");
		       		return response;
		      	},function(error){
		      		console.log('error: ' + error);
		      	});
	    }

		integrantesService.editIntegrante = function(integrante) {
			return $http
				.get(config.path + 'service/manager/editIntegrante.php?id=' + integrante.id + '&nombres=' + integrante.nombres + '&apellidos=' + integrante.apellidos + '&idInstrumento=' + integrante.idInstrumento + '&idNacionalidad=' + integrante.idNacionalidad + '&idTipoDirector=' + integrante.idTipoDirector + '&idTipoIntegrante=' + integrante.idTipoIntegrante + '&idNacionalidad=' + integrante.idNacionalidad + '&strNacionalidad=' + integrante.strNacionalidad)
				.then(function(response) {
					return response;
				},function(error) {
					console.log('error: ' + error);
				});
		}

		integrantesService.deleteIntegrante = function(id) {
			return $http({
					method: 'GET',
					url: config.path + 'service/manager/deleteIntegrante.php?id=' + id,
				}).error(function(error) {
					console.log('error: ' + error);
				});
		}

		integrantesService.getTiposIntegrante = function() {
			return $http
				.get(config.path + 'service/manager/getTiposIntegrante.php')
				.then(function(response) {
					return response.data;
				},function(error) {
					console.log('error: ' + error);
				});
		}

		integrantesService.parseTipoIntegrante = function(str) {
			return (str!=null) ? str.substring('TIPO_INTEGRANTE_'.length).replace(/_/g,' ').toLowerCase() : "";
		}

		return integrantesService;
	}]);