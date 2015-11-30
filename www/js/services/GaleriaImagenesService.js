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
		      	.get(config.path + 'service/manager/postImagen.php?path=' + imagen.imagenAgregada + '&texto=' + imagen.texto + '&orden=' + imagen.orden)
		      	.then(function (response) {
		      		console.log(response);
		      		return response;
		      	},function(error){
		      		console.log('error: ' + error);
		      	});
	    }

		galeriaImagenesService.editImagen = function(imagen) {
			console.log(imagen);
			return $http
				.get(config.path + 'service/manager/editImagen.php?id=' + imagen.id + '&orden=' + imagen.orden + '&path=' + imagen.path + '&texto=' + imagen.texto + '&codigoTexto=' + imagen.codigoTexto)
				.then(function(response) {
					return response;
				},function(error) {
					console.log('error: ' + error);
				});
		}

		galeriaImagenesService.deleteImagen = function(id) {
			return $http({
					method: 'GET',
					url: config.path + 'service/manager/deleteImagen.php?id=' + id,
				}).error(function(error) {
					console.log('error: ' + error);
				});
		}

		return galeriaImagenesService;
	}]);