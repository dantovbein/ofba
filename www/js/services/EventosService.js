'use strict';

angular
	.module('app')
	.factory('EventosService',['$http','config',function($http,config){
		var eventosService = {};

		eventosService.getEventos = function() {}
		eventosService.postEvento = function(ev) {
			console.log(ev);
			return $http
		      	.get(config.path + 'service/manager/postEvento.php?'+'titulo'+ev.titulo+'&imagen'+ev.imagen+'&ciclo'+ev.ciclo+'&locacion'+ev.locacion+'&ciudad'+ev.ciudad+'&desc'+ev.desc+'&director'+ev.director+'&compositores'+ev.extra.compositores+'&directores'+ev.extra.directores+'&solistas'+ev.extra.solistas+'&textos'+ev.extra.textos+'&fechas'+ev.extra.fechas+'&nacionalidad'+ev.nacionalidad+'&temporada'+ev.temporada)
		      	.then(function (response) {
		      		return response;
		      	},function(error){
		      		console.log('error: ' + error);
		      	});
		}
		eventosService.deleteEvento = function(idEvento) {} 

		return eventosService;
	}]);