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
						.get(config.path + 'service/manager/postImagen.php') 
						.then(function(response){
							debugger;
						},function(error){
							console.log("Error " + error);
						});
		}

		return galeriaImagenesService;
	}]);