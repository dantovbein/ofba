'use strict';

angular
	.module('app')
	.factory('PaisesService',['$http','config',function($http,config){
		var paisesService = {};

		paisesService.getPaises = function() {
			return [{
				idpais: 0,
				str_pais: "Argentina"
			},{
				idpais: 1,
				str_pais: "Brasil"
			}]
		}

		return paisesService;
	}]);