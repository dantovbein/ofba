'use strict';

angular
	.module('app')
	.factory('config',[function(){
		var config = {};

		config.debug = !true;
		config.path = (config.debug) ? 'http://localhost/ofba-backend/' : '';

		return config;
	}]);