'use strict';

angular
	.module('app')
	.factory('LocacionesService',['$http','config',function($http,config){
		var locacionesService = {};

		locacionesService.getLocaciones = function() {
			return $http
				.get(config.path + 'service/manager/getLocaciones.php')
				.then(function(response) {
					return response.data;
				},function(error) {
					console.log('error: ' + error);
				});
		}

		return locacionesService;
	}]);