'use strict';

angular
	.module('app')
	.controller('EventosCtrl',['$scope','eventos',function($scope,eventos){
		$scope.eventos = eventos;
		$scope.ciclos = [];

		$scope.eventoSeleccionado = {};

		$scope.errorText = "";
		$scope.add = true;
	}])