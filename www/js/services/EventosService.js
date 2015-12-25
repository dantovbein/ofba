'use strict';

angular
	.module('app')
	.factory('EventosService',['$http','config',function($http,config){
		var eventosService = {};

		eventosService.getEventos = function() {}
		eventosService.postEvento = function(ev) {
			return $http
		      	//.get(config.path + 'service/manager/postEvento.php?'+'titulo='+ev.titulo+'&imagen='+ev.imagen+'&ciclo='+ev.ciclo+'&locacion='+ev.locacion+'&ciudad='+ev.ciudad+'&desc='+ev.desc+'&director='+ev.director+'&extra='+JSON.stringify(ev.extra)+'&compositores='+JSON.stringify(ev.extra.compositores)+'&directores='+JSON.stringify(ev.extra.directores)+'&solistas='+JSON.stringify(ev.extra.solistas)+'&textos='+JSON.stringify(ev.extra.textos)+'&fechas='+JSON.stringify(ev.fechas)+'&nacionalidad='+ev.nacionalidad+'&temporada='+ev.temporada)
		      	//.get(config.path + 'service/manager/postEvento.php?'+'titulo='+ev.titulo+'&imagen='+ev.imagen+'&ciclo='+ev.ciclo+'&locacion='+ev.locacion+'&ciudad='+ev.ciudad+'&desc='+ev.desc+'&director='+ev.director+'&extra='+JSON.stringify(ev.extra)+'&fechas=['+ev.fechas+']&nacionalidad='+ev.nacionalidad+'&temporada='+ev.temporada)
		      	.get(config.path + 'service/manager/postEvento.php?'+'titulo='+ev.titulo+'&imagen='+ev.imagen+'&ciclo='+ev.ciclo+'&locacion='+ev.locacion+'&ciudad='+ev.ciudad+'&desc='+ev.desc+'&director='+ev.director+'&extra='+JSON.stringify(ev.extra)+'&fechas='+JSON.stringify(ev.fechas)+'&nacionalidad='+ev.nacionalidad+'&temporada='+ev.temporada)
		      	.then(function (response) {
		      		console.log(response);
		      		return response;
		      	},function(error){
		      		console.log('error: ' + error);
		      	});
		}
		eventosService.deleteEvento = function(idEvento) {} 

		return eventosService;
	}]);