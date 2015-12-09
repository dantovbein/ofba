'use strict';

angular
	.module('app')
	.factory('CiudadesService',['$http','config',function($http,config){
		var ciudadesService = {};

		ciudadesService.getCiudades = function() {
			return [{
				idciudad: 2,
				str_ciudad: "Rosario",
				idpais: 0
			},{
				idciudad: 11,
				str_ciudad: "Paulinia",
				idpais: 1
			},{
				idciudad: 12,
				str_ciudad: "San Pablo",
				idpais: 1
			}]
		}

		return ciudadesService;
	}]);