'use strict';

angular
	.module('app')
	.factory('ObrasService',['$http','config',function($http,config){
		var obrasService = {};

		obrasService.getObras = function() {
			return $http
				.get(config.path + 'service/manager/getObras.php')
				.then(function(response) {
					console.log(response);
					return response.data;
				}, function(error) {
					console.log('error: ' + error);
				});
		}

		return obrasService;
	}]);