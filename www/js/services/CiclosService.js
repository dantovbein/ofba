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
		/**
		* Este metodo devuelve el catid
		*/ 
		ciclosService.parseCategorias = function(id) {
			switch(id) {
				case 1: // CICLO_ABONO
					return 123;
					break;
				case 2: // CICLO_CONCIERTOS_EXTRAORDINARIOS
					return 124;
					break;
				case 3: // CICLO_ESPECTACULOS_ESCENOGRAFICOS
					return 80; 
					break;
				case 4: // CICLO_MUSICA_CONTEMPORANEA
					return 125; 
					break;
				case 5: // CICLO_GIRAS
					return 123;
					break;
				default:
					return 123;
			}
		}
		/**
		* Este metodo devuelve el icsid
		*/ 
		ciclosService.parseCalendarios = function(id) {
			switch(id) {
				case 1:
					return 2; // Abono
					break;
				case 2:
					return 3; // Extraordinario
					break;
				case 3:
					return 1; // Ballet
					break;
				case 4:
					return 4; // Contemporeanea
					break;
				default:
					return 2;
			}
		}

		return ciclosService;
	}]);