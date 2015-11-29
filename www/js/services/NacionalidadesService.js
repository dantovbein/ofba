'use strict';

angular
	.module('app')
	.factory('NacionalidadesService',['$http',function($http){
		var nacionalidadesService = {};
		
		nacionalidadesService.getNacionalidades = function() {
			return [{ idNacionalidad: 1, strNacionalidad: 'Argentino' },
					{ idNacionalidad: 2, strNacionalidad: 'Extranjero' }];
		}

		nacionalidadesService.getStrNacionalidad = function(idNacionalidad) {
			return window._.filter(this.getNacionalidades(),function(nacionalidad){
				if(nacionalidad.idNacionalidad == idNacionalidad) {
					return nacionalidad.strNacionalidad;
				}
			})[0].strNacionalidad;
		}

		return nacionalidadesService;
	}])