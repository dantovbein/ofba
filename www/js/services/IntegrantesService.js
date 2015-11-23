angular.module('app')
	.factory('IntegrantesService',['$http',function($http){
		var integrantesService = {};

		integrantesService.getIntegrantes = function() {
			return $http({
				url: 'http://localhost/ofba_service/service/manager/getIntegrantes.php'
			}).error(function(error){
				console.log('error: ' + error);
			});
		}

		integrantesService.getInstrumentos = function() {
			return $http({
				url: 'http://localhost/ofba_service/service/manager/getInstrumentos.php'
			}).error(function(error){
				console.log('error: ' + error);
			});
		}

		integrantesService.getTiposDirector = function() {
			return $http({
				url: 'http://localhost/ofba_service/service/manager/getTiposDirector.php'
			}).error(function(error){
				console.log('error: ' + error);
			});
		}

		integrantesService.getTiposIntegrante = function() {
			return $http({
				url: 'http://localhost/ofba_service/service/manager/getTiposIntegrante.php'
			}).error(function(error){
				console.log('error: ' + error);
			});
		}

		integrantesService.getNacionalidades = function() {
			return [{ idNacionalidad: 1, strNacionalidad: 'Argentino' },
					{ idNacionalidad: 2, strNacionalidad: 'Extranjero' }];
		}

		return integrantesService;
	}]);