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

		eventosService.getEvento = function(uidEvento) {
			return $http
				.get(config.path + 'service/manager/getEvento.php?uidEvento='+uidEvento)
				.then(function(response) {
					return response.data;
				}, function(error) {
					console.log('error: ' + error);
				});
		}

		eventosService.postEvento = function(ev) {
			console.log(ev);
			return $http
		      	.get(config.path + 'service/manager/postEvento.php?'+'titulo='+ev.titulo+'&imagen='+ev.imagen+'&ciclo='+ev.ciclo+'&catid='+ev.catid+'&icsid='+ev.icsid+'&locacion='+ev.locacion+'&ciudad='+ev.ciudad+'&desc='+ev.desc+'&director='+ev.director+'&extras='+JSON.stringify(ev.extras)+'&fechas='+JSON.stringify(ev.fechas)+'&nacionalidad='+ev.nacionalidad+'&temporada='+ev.temporada+'&strLocacion='+ev.strLocacion+'&strCiclo='+ev.strCiclo+'&strCiudad='+ev.strCiudad+'&strTemporada='+ev.strTemporada+'&textoFunciones='+ev.textoFunciones)
		      	.then(function (response) {
		      		console.log(response);
		      		return response;
		      	},function(error){
		      		console.log('error: ' + error);
		      	});
		}

		eventosService.editEvento = function(ev) {
			return $http
		      	.get(config.path + 'service/manager/editEvento.php?'+'uidEvento='+ev.uidEvento+'&titulo='+ev.titulo+'&imagen='+ev.imagen+'&ciclo='+ev.ciclo+'&catid='+ev.catid+'&icsid='+ev.icsid+'&locacion='+ev.locacion+'&ciudad='+ev.ciudad+'&desc='+ev.desc+'&director='+ev.director+'&extras='+JSON.stringify(ev.extras)+'&fechas='+JSON.stringify(ev.fechas)+'&nacionalidad='+ev.nacionalidad+'&temporada='+ev.temporada+'&strLocacion='+ev.strLocacion+'&strCiclo='+ev.strCiclo+'&strCiudad='+ev.strCiudad+'&strTemporada='+ev.strTemporada+'&textoFunciones='+ev.textoFunciones)
		      	.then(function (response) {
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