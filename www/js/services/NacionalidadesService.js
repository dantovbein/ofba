'use strict';

angular
	.module('app')
	.factory('NacionalidadesService',['$http','config',function($http,config){
		var nacionalidadesService = {};
		
		/*nacionalidadesService.getNacionalidades = function() {
			return [{ idNacionalidad: 1, strNacionalidad: 'Argentino' },
					{ idNacionalidad: 2, strNacionalidad: 'Extranjero' }];
		}*/

		nacionalidadesService.getNacionalidades = function() {
			return $http
				.get(config.path + 'service/manager/getNacionalidades.php')
				.then(function(response) {
					return response.data;
				},function(error) {
					console.log('error: ' + error);
				});
		}

		/*nacionalidadesService.getStrNacionalidad = function(idNacionalidad) {
			return window._.filter(this.getNacionalidades(),function(nacionalidad){
				if(nacionalidad.idNacionalidad == idNacionalidad) {
					return nacionalidad.strNacionalidad;
				}
			})[0].strNacionalidad;
		}*/

		return nacionalidadesService;
	}])