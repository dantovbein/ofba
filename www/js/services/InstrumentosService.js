'use strict';

angular
	.module('app')
	.factory('InstrumentosService',['$http','config',function($http,config){
		var instrumentosService = {};

		instrumentosService.getInstrumentos = function() {
			return $http
				.get(config.path + 'service/manager/getInstrumentos.php')
				.then(function(response) {
					return response.data;
				},function(error) {
					console.log('error: ' + error);
				});
		}		

		return instrumentosService;
	}])


