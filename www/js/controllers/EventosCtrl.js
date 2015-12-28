'use strict';

angular
	.module('app')
	.controller('EventosCtrl',['$scope','$element','$compile','EventosService','eventos','ciclos','temporadas','textos','nacionalidades','integrantes','obras','locaciones','paises','ciudades',
		function($scope,$element,$compile,EventosService,eventos,ciclos,temporadas,textos,nacionalidades,integrantes,obras,locaciones,paises,ciudades){
			
			$scope.evento = {};
			$scope.evento.titulo = "";
			$scope.evento.imagen = "";
			$scope.evento.ciclo = "";
			$scope.evento.locacion = "";
			$scope.evento.ciudad = "";
			$scope.evento.pais = "";
			$scope.evento.nacionalidad = "";
			$scope.evento.temporada = "";
			$scope.evento.fechas = [];
			$scope.evento.director = "";
			$scope.evento.extra = {};
			$scope.evento.extra.textos = [];
			$scope.evento.extra.directores = [];
			$scope.evento.extra.compositores = [];
			$scope.evento.extra.solistas = [];
			$scope.evento.desc = "";

			$scope.errorText = "";
			$scope.add = true;
			
			$scope.eventos = eventos;
			$scope.textos = textos;
			$scope.ciclos = ciclos;
			$scope.temporadas = temporadas;
			$scope.nacionalidades = nacionalidades;
			$scope.integrantes = integrantes;
			$scope.obras = obras;
			$scope.directores = window._.filter($scope.integrantes,function(integrante){
				return integrante.idTipoIntegrante == '2';
			});
			$scope.compositores = window._.filter($scope.integrantes,function(integrante){
				return integrante.idTipoIntegrante == '9';
			});
			$scope.solistas = window._.filter($scope.integrantes,function(integrante){
				return integrante.idTipoIntegrante !== '2' && integrante.idTipoIntegrante !== '9';
			});
			$scope.locaciones = locaciones;
			$scope.paises = paises;
			$scope.ciudades = ciudades;

			$scope.eventoSeleccionado = {};

			//$scope.ciudadesFiltradas = window._.filter($scope.ciudades,function(ciudad){
			//	return ciudad.idpais == $scope.pais;
			//});

			/*getIntegrante= function(idIntegrante) {
				window._.each($scope.integrantes,function(integrante){
					if(integrante.id==idIntegrante){

					}
					console.log(integrante);

				})
			}*/

			getDefaultTexts();

			function getDefaultTexts() {
				var defaultTexts = [
					"Ingrese las funciones del evento. Ejemplo: Funciones: Miércoles 5, Jueves 6, Viernes 7 y Sábado 8, 20:30; y Domingo 9 de marzo de 2014, 17:00",
					"Ingrese otra información adicional. Ejemplo: Ballet Estable del Teatro Colón, Director: Lidia Segnis",
					""
				];

				for(var i=0;i<defaultTexts.length;i++) {
					addDefaultTexts('item-texto-evento','.multi-data-textos',defaultTexts[i]);
				}
			}

			function addDefaultTexts(element,container,params) {
				var container = $element.find(container);
				var el = angular.element(document.createElement(element));
				el.attr('params',params);
				$compile(el)($scope);
				angular.element(container.append(el));
			}

			$scope.addElement = function(element,container,params) {
				var container = $element.find(container);
				var el = angular.element(document.createElement(element));
				if(params != undefined){
					el.attr('params',params);
				}
				$compile(el)($scope);
				angular.element(container.append(el));
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
				//texto.replace(new RegExp('\r?\n','g'), '<br />');
				var data = window._.filter($scope.evento.extra.textos,function(t,i){
					return t == texto
				});
				if(data.length==0) {
					$scope.evento.extra.textos.push(texto);
					$scope.prueba = texto;
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

			$scope.addDirector = function(integrante) {
				var data = window._.filter($scope.evento.extra.directores,function(m,i){
					return m == integrante
				});
				if(data.length==0) {
					$scope.evento.extra.directores.push(integrante);
					return true;
				} else {
					alert("Ya existe este integrante");
					return false;
				}
			}

			$scope.removeDirector = function(integrante) {
				window._.each($scope.evento.extra.directores,function(m,i){
					if(m == integrante){
						$scope.evento.extra.directores.splice(i,1);
						return;
					}
				});
			}

			$scope.addCompositor = function(integrante) {
				var data = window._.filter($scope.evento.extra.compositores,function(c,i){
					return c.id == integrante.id
				});
				if(data.length==0) {
					$scope.evento.extra.compositores.push(integrante);
					return true;
				} else {
					alert("Ya existe este compositor");
					return false;
				}
			}

			$scope.removeCompositor = function(integrante) {
				window._.each($scope.evento.extra.compositores,function(c,i){
					if(c == integrante){
						$scope.evento.extra.compositores.splice(i,1);
						return;
					}
				});
			}

			$scope.addSolista = function(integrante) {
				var data = window._.filter($scope.evento.extra.solistas,function(c,i){
					return c == integrante
				});
				if(data.length==0) {
					$scope.evento.extra.solistas.push(integrante);
					return true;
				} else {
					alert("Ya existe este bailarin solista");
					return false;
				}
			}

			$scope.removeSolista = function(integrante) {
				window._.each($scope.evento.extra.solistas,function(c,i){
					if(c == integrante){
						$scope.evento.extra.solistas.splice(i,1);
						return;
					}
				});
			}

			$scope.parseIntegrante = function(id) {
				if(id != "") {
					var txt = window._.filter($scope.integrantes,function(s,i){
						return s.id== id;
					});
					return txt[0].nombres + " " + txt[0].apellidos;
				} else {
					return "";
				}
			}			

			$scope.parseCiclo = function(id) {
				if(id != "") {
					var txt = window._.filter($scope.ciclos,function(s,i){
						return s.id== id;
					})[0].codigoCiclo;
					return $scope.parseText(txt);
				} else {
					return "";
				}
			}

			$scope.parseTemporada = function(id) {
				if(id != "") {
					var txt = window._.filter($scope.temporadas,function(s,i){
						return s.id == id;
					})[0].codigoNombre;
					return $scope.parseText(txt);
				} else {
					return "";
				}
			}

			$scope.parseLocacion = function(id) {
				if(id != "") {
					var txt = window._.filter($scope.locaciones,function(s,i){
						return s.id == id;
					})[0].codigoTexto;
					return $scope.parseText(txt);
				} else {
					return "";
				}
			}

			$scope.parseCiudad = function(id) {
				if(id != "") {
					return window._.filter($scope.ciudades,function(s,i){
						return s.idciudad == id;
					})[0].str_ciudad;
				} else {
					return "";
				}
			}

			$scope.parsePais = function(id) {
				if(id != "") {
					return window._.filter($scope.paises,function(s,i){
						return s.idpais == id;
					})[0].str_pais;
				} else {
					return "";
				}
			}

			$scope.parseObras = function(id) {
				if(id != "") {
					return window._.filter($scope.obras,function(s,i){
						return s.idObra == id;
					})[0].strObra;
				} else {
					return "";
				}
			}

			$scope.parseText = function(str) {
				var newStr = str!=null ? str.replace(/_/g,' ').toLowerCase() : "";
				newStr = (newStr!="") ? newStr.replace(newStr.charAt(0),newStr.charAt(0).toUpperCase()) : "";
				return newStr;
			}

			$scope.reloadEventos = function() {
				EventosService.getEventos().then(function(response){
					$scope.eventos = response;
				});
			}

			$scope.cleanFields = function() {}

			$scope.deleteEvento = function(uidEvento) {
				$scope.uidEventoToDelete = uidEvento;
				EventosService.deleteEvento(uidEvento).success(function(response) {
					$scope.eventos = window._.reject($scope.eventos, function(evento){
			 			return evento.uidEvento == $scope.uidEventoToDelete;
					});
				});
			}

		}])