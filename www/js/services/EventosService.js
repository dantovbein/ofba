'use strict';

angular
	.module('app')
	.factory('EventosService',['$http','config',function($http,config){
		var eventosService = {};

		eventosService.getEventos = function() {
			return $http
				.get(config.path + 'service/manager/getEventos.php')
				.then(function(response) {
					return response.data;
				}, function(error) {
					console.log('error: ' + error);
				});
		}

		eventosService.postEvento = function(ev) {
			return $http
		      	.get(config.path + 'service/manager/postEvento.php?'+'titulo='+ev.titulo+'&imagen='+ev.imagen+'&ciclo='+ev.ciclo+'&locacion='+ev.locacion+'&ciudad='+ev.ciudad+'&desc='+ev.desc+'&director='+ev.director+'&extra='+JSON.stringify(ev.extra)+'&fechas='+JSON.stringify(ev.fechas)+'&nacionalidad='+ev.nacionalidad+'&temporada='+ev.temporada)
		      	.then(function (response) {
		      		console.log(response);
		      		return response;
		      	},function(error){
		      		console.log('error: ' + error);
		      	});
		}
		
		eventosService.deleteEvento = function(uidEvento) {
			return $http({
					method: 'GET',
					url: config.path + 'service/manager/deleteEvento.php?uidEvento=' + uidEvento,
				}).error(function(error) {
					console.log('error: ' + error);
				});
		}

		return eventosService;
	}]);