'use strict';

angular
	.module('app')
	.factory('TextosService',['$http','config',function($http,config){
		var textosService = {};

		textosService.getTextos = function(){
			return $http
						.get(config.path + 'service/manager/getTextos.php')
						.then(function(response){
							return response.data;
						},function(error){
							console.log(error);
						});
		}

		textosService.getTexto = function(codigo){
			return $http
						.get(config.path + 'service/manager/getTexto.php?codigo=' + codigo)
						.then(function(response){
							return response.data;
						},function(error){
							console.log(error);
						});
		}



		return textosService;
	}]);