'use strict';

angular
	.module('app')
	.controller('ObrasCtrl',['$scope','obras',function($scope,obras){
		$scope.obras = obras;
		$scope.errorText = "";
		$scope.add = true;
	}]);