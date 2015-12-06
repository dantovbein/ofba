'use strict';

angular
	.module('app')
	.factory('CiclosService',['$http','config',function($http,config){
		var ciclosService = {};

		ciclosService.getCiclos = function() {
			return $http
				.get(config.path + 'service/manager/getCiclos.php')
				.then(function(response) {
					return response.data;
				},function(error) {
					console.log('error: ' + error);
				});
		}
		ciclosService.postCiclo = function(ciclo) {}
		ciclosService.deleteCiclo = function(idCiclo) {} 

		return ciclosService;
	}]);