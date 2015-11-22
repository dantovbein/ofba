angular.module('app')
	.factory('IntegrantesService',['$http',function($http){
		var integrantesService = {
			getIntegrantes: function(successCallback,errorCallback) {
				console.log("llega");
				$http({
				  method: 'GET',
				  url: 'http://localhost/ofba_service/service/manager/getIntegrantes.php',
				  params:{
				  	successCallback: successCallback,
				  	errorCallback: errorCallback
				  }
				}).then(function(callback){
					console.log("test 4");
					//successCallback();
				},errorCallback);
				//return [{id:"110",nombres:"Aaron",apellidos:"Copland",idTipoIntegrante:"9",idInstrumento:null,idNacionalidad:"2",idTipoDirector:null,strNacionalidad:"Extranjero"}]; 
			}
		}
		return integrantesService;
	}]);