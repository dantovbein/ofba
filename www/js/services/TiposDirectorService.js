'use strict';

angular
	.module('app')
	.factory('TiposDirectorService',['$http','config', function($http,config){
		var tiposDirectorService = {};

		tiposDirectorService.getTiposDirector = function() {
			return $http
				.get(config.path + 'service/manager/getTiposDirector.php')
				.then(function(response) {
					return response.data;
				},function(error) {
					console.log('error: ' + error);
				});
		},
		
		tiposDirectorService.parseTipoDirector = function(str) {
			return (str!=null) ? str.substring('TIPO_DIRECTOR_'.length).replace(/_/g,' ').toLowerCase() : "";
		}

		return tiposDirectorService;
	}])