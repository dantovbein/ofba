'use strict';

angular.module('app')
	.controller('MainNavCtrl',['$scope','$rootScope',function($scope,$rootScope){
		$scope.sections = [{ 'name':'Filarmónica de Buenos Aires',
							 'state': '-',
							 'sub': [{
							 	'id': 1,
							 	'name': 'Integrantes',
							 	'state': 'main.integrantes',
							},{
							 	'id': 1,
							 	'name': 'Galería de imágenes',
							 	'state': 'main.galeria-de-imagenes'
							},{
							 	'id': 1,
							 	'name': 'Audio',
							 	'state': 'main.audio'
							}]
						},{ 'name':'Archivo histórico',
							'state': '-',
							'sub':[{
								'id':1,
								'name': 'Conciertos',
								'state': '-',
								'sub': [{
								 	'id': 1,
								 	'name': 'Temporadas',
								 	'state': 'main.temporadas'
								},{
									'id': 1,
								 	'name': 'Directores',
								 	'state': 'main.directores'
								},{
									'id': 1,
								 	'name': 'Solistas',
								 	'state': 'main.solistas'
								},{
									'id': 1,
								 	'name': 'Compositores y obras',
								 	'state': 'main.compositores-obras'
								},{
									'id': 1,
								 	'name': 'Giras',
								 	'state': 'main.giras'
								}]
							}]
						},{
							'name': 'Calendario de eventos',
							'state': 'main.calendario-de-eventos'
						}];
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
    		$scope.state = toState.name;
		});
	}]);



	