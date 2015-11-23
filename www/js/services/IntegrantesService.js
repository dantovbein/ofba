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

		integrantesService.postIntegrante = function() {
			return $http({
				method: 'POST',
				url: 'http://localhost/ofba_service/service/manager/postIntegrante.php'
			}).error(function(error){
				console.log('error: ' + error);
			});
		}

		integrantesService.deleteIntegrante = function(id) {
			console.log(id);
			return $http({
				method: 'GET',
				url: 'http://localhost/ofba_service/service/manager/deleteIntegrante.php?id=' + id,
				/*headers: {
		            "Access-Control-Allow-Origin" : "*",
		            "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
		            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
		        },
				data: {
					id: id
				}*/
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