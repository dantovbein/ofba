'use strict';

angular
	.module('app')
	.controller('EventosListCtrl',['$scope',function($scope) {
		$scope.edit = function(evento) {
			console.log(evento);
			//$scope.onEdit();
			$scope.eventoSeleccionado = {};
			$scope.eventoSeleccionado.id = evento.id;
		}
	}])