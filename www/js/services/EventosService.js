'use strict';

angular
	.module('app')
	.factory('EventosService',['$http','config',function($http,config){
		var eventosService = {};

		eventosService.getEventos = function() {}
		eventosService.postEvento = function(evento) {}
		eventosService.deleteEvento = function(idEvento) {} 

		return eventosService;
	}]);