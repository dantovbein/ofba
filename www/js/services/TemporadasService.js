'use strict';

angular
	.module('app')
	.factory('TemporadasService',['$http','config',function($http,config){
		var temporadasService = {};

		temporadasService.getTemporadas = function() {
			return $http
				.get(config.path + 'service/manager/getTemporadas.php')
				.then(function(response) {
					return response.data;
				},function(error) {
					console.log('error: ' + error);
				});
		}
		temporadasService.postTemporadas = function(temporada) {}
		temporadasService.deleteTemporadas = function(idTemporada) {} 

		return temporadasService;
	}]);