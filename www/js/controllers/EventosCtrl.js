'use strict';

angular
	.module('app')
	.controller('EventosCtrl',['$scope','$compile','eventos','ciclos','temporadas','textos','nacionalidades','integrantes','locaciones','paises','ciudades',
		function($scope,$compile,eventos,ciclos,temporadas,textos,nacionalidades,integrantes,locaciones,paises,ciudades){
			$scope.evento = {};
			
			//$scope.evento.funciones = [];
			$scope.evento.fechas = [];
			$scope.evento.extra = {};
			$scope.evento.extra.textos = [];
			$scope.evento.extra.musicos = [];
			$scope.evento.extra.coreografos = [];
			$scope.evento.extra.bailarinesSolistas = [];	
			$scope.evento.extra.reposicionesCoreograficas = [];

			$scope.errorText = "";
			$scope.add = true;
			$scope.eventos = eventos;
			$scope.textos = textos;
			$scope.ciclos = ciclos;
			$scope.temporadas = temporadas;
			$scope.nacionalidades = nacionalidades;
			$scope.integrantes = integrantes;
			$scope.directores = window._.filter($scope.integrantes,function(integrante){
				return integrante.idTipoIntegrante == '2';
			});
			$scope.locaciones = locaciones;
			$scope.paises = paises;
			$scope.ciudades = ciudades;

			$scope.addElement = function(element,container) {
				var compileFunction = $compile('<' + element + '></' + element + '>');
				var htmlOuputFromDirective = compileFunction($scope);
        		$(container).append(htmlOuputFromDirective);
			}

			$scope.addFecha = function(fecha) {
				var data = window._.filter($scope.evento.fechas,function(t,i){
					return t == fecha
				});
				if(data.length==0) {
					$scope.evento.fechas.push(fecha);
					return true;
				} else {
					alert("Ya existe esta fecha");
					return false;
				}
			}

			$scope.removeFecha = function(fecha) {
				window._.each($scope.evento.fechas,function(t,i){
					if(t == fecha){
						$scope.evento.fechas.splice(i,1);
						return;
					}
				});
			}

			$scope.addTexto = function(texto) {
				var data = window._.filter($scope.evento.extra.textos,function(t,i){
					return t == texto
				});
				if(data.length==0) {
					$scope.evento.extra.textos.push(texto);
					return true;
				} else {
					alert("Ya existe este texto");
					return false;
				}
			}

			$scope.removeTexto = function(texto) {
				window._.each($scope.evento.extra.textos,function(t,i){
					if(t == texto){
						$scope.evento.extra.textos.splice(i,1);
						return;
					}
				});
			}

			$scope.addMusico = function(integrante) {
				var data = window._.filter($scope.evento.extra.musicos,function(m,i){
					return m == integrante
				});
				if(data.length==0) {
					$scope.evento.extra.musicos.push(integrante);
					return true;
				} else {
					alert("Ya existe este integrante");
					return false;
				}
			}

			$scope.removeMusico = function(integrante) {
				window._.each($scope.evento.extra.musicos,function(m,i){
					if(m == integrante){
						$scope.evento.extra.musicos.splice(i,1);
						return;
					}
				});
			}

			$scope.addCoreografo = function(integrante) {
				var data = window._.filter($scope.evento.extra.coreografos,function(c,i){
					return c == integrante
				});
				if(data.length==0) {
					$scope.evento.extra.coreografos.push(integrante);
					return true;
				} else {
					alert("Ya existe este coreografo");
					return false;
				}
			}

			$scope.removeCoreografo = function(integrante) {
				window._.each($scope.evento.extra.coreografos,function(c,i){
					if(c == integrante){
						$scope.evento.extra.coreografos.splice(i,1);
						return;
					}
				});
			}

			$scope.addBailarinSolista = function(integrante) {
				var data = window._.filter($scope.evento.extra.bailarinesSolistas,function(c,i){
					return c == integrante
				});
				if(data.length==0) {
					$scope.evento.extra.bailarinesSolistas.push(integrante);
					return true;
				} else {
					alert("Ya existe este bailarin solista");
					return false;
				}
			}

			$scope.removeBailarinSolista = function(integrante) {
				window._.each($scope.evento.extra.bailarinesSolistas,function(c,i){
					if(c == integrante){
						$scope.evento.extra.bailarinesSolistas.splice(i,1);
						return;
					}
				});
			}

			$scope.addReposicionCoreografica = function(integrante) {
				var data = window._.filter($scope.evento.extra.reposicionesCoreograficas,function(c,i){
					return c == integrante
				});
				if(data.length==0) {
					$scope.evento.extra.reposicionesCoreograficas.push(integrante);
					return true;
				} else {
					alert("Ya existe este bailarin solista");
					return false;
				}
			}

			$scope.removeReposicionCoreografica = function(integrante) {
				window._.each($scope.evento.extra.reposicionesCoreograficas,function(c,i){
					if(c == integrante){
						$scope.evento.extra.reposicionesCoreograficas.splice(i,1);
						return;
					}
				});
			}
		}])