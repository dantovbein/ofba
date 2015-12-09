'use strict';

angular
	.module('app')
	.controller('EventosCtrl',['$scope','$compile','eventos','ciclos','temporadas','textos','nacionalidades','integrantes','locaciones','paises','ciudades',
		function($scope,$compile,eventos,ciclos,temporadas,textos,nacionalidades,integrantes,locaciones,paises,ciudades){
			$scope.evento = {};
			$scope.evento.funciones = [];
			
			$scope.evento.funciones = [];
			$scope.evento.extra = {};
			$scope.evento.extra.textos = [];
			$scope.evento.extra.musicos = [];
			$scope.evento.extra.coreografos = [];

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

			$scope.addMusico = function(musico) {
				var data = window._.filter($scope.evento.extra.musicos,function(m,i){
					return m == musico
				});
				if(data.length==0) {
					$scope.evento.extra.musicos.push(musico);
					return true;
				} else {
					alert("Ya existe este integrante");
					return false;
				}
			}

			$scope.removeMusico = function(musico) {
				window._.each($scope.evento.extra.musicos,function(m,i){
					if(m == musico){
						$scope.evento.extra.musicos.splice(i,1);
						return;
					}
				});
			}

			$scope.addCoreografo = function(coreografo) {
				var data = window._.filter($scope.evento.extra.coreografos,function(c,i){
					return c == coreografo
				});
				if(data.length==0) {
					$scope.evento.extra.coreografos.push(coreografo);
					return true;
				} else {
					alert("Ya existe este coreografo");
					return false;
				}
			}

			$scope.removeCoreografo = function(coreografo) {
				window._.each($scope.evento.extra.coreografos,function(c,i){
					if(c == coreografo){
						$scope.evento.extra.coreografos.splice(i,1);
						return;
					}
				});
			}
		}])