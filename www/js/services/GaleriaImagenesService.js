'use strict';

angular
	.module('app')
	.factory('GaleriaImagenesService',['$http','config',function($http,config){
		var galeriaImagenesService = {};

		galeriaImagenesService.getImagenes = function() {
			return $http
						.get(config.path + 'service/manager/getImagenes.php')
						.then(function(response){
							return response.data;
						},function(error){
							console.log("Error " + error);
						});		
		}

		galeriaImagenesService.postImagen = function(imagen) {
			return $http
		      	.get(config.path + 'service/manager/postImagen.php?path=' + imagen.imagenAgregada + '&texto=' + imagen.texto + '&codigoTexto=' + imagen.codigoTexto + '&orden=' + imagen.orden)
		      	.then(function (response) {
		      		return response;
		      	},function(error){
		      		console.log('error: ' + error);
		      	});
	    }

		galeriaImagenesService.editImagen = function(imagen) {
			/*return $http
				.get(config.path + 'service/manager/editImagen.php?id=' + integrante.id + '&nombres=' + integrante.nombres + '&apellidos=' + integrante.apellidos + '&idInstrumento=' + integrante.idInstrumento + '&idNacionalidad=' + integrante.idNacionalidad + '&idTipoDirector=' + integrante.idTipoDirector + '&idTipoIntegrante=' + integrante.idTipoIntegrante + '&idNacionalidad=' + integrante.idNacionalidad + '&strNacionalidad=' + integrante.strNacionalidad)
				.then(function(response) {
					return response;
				},function(error) {
					console.log('error: ' + error);
				});*/
		}

		return galeriaImagenesService;
	}]);