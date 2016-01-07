'use strict';

angular
	.module('app')
	.controller('EventosCtrl',['$scope','$element','$compile','EventosService','eventos','ciclos','temporadas','textos','nacionalidades','integrantes','obras','locaciones','paises','ciudades',
		function($scope,$element,$compile,EventosService,eventos,ciclos,temporadas,textos,nacionalidades,integrantes,obras,locaciones,paises,ciudades){
			$scope.isSaving = false;
			$scope.evento = {};
			$scope.evento.uidEvento = "";
			$scope.evento.titulo = "";
			$scope.evento.link = "";
			$scope.evento.imagen = "";
			$scope.evento.ciclo = "";
			$scope.evento.strCiclo = "";
			$scope.evento.locacion = "";
			$scope.evento.strLocacion = "";
			$scope.evento.ciudad = "";
			$scope.evento.strCiudad = "";
			$scope.evento.pais = "";
			$scope.evento.nacionalidad = "";
			$scope.evento.temporada = "";
			$scope.evento.strTemporada = "";
			$scope.evento.fechas = [];
			$scope.evento.director = "";
			$scope.evento.textoFunciones = "";
			$scope.evento.extras = {};
			$scope.evento.extras.textos = [];

			$scope.evento.extras.directores = [];
			$scope.evento.extras.compositores = [];
			$scope.evento.extras.solistas = [];
			$scope.evento.desc = "";

			$scope.errorText = "";
			$scope.add = true;
			$scope.eventos = eventos;
			
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
					return t.fecha == fecha.fecha
				});
				if(data.length==0) {
					$scope.evento.fechas.push({fecha:fecha});
					return true;
				} else {
					alert("Ya existe esta fecha");
					return false;
				}
			}

			$scope.removeFecha = function(fecha) {
				$scope.evento.fechas = window._.filter($scope.evento.fechas,function(t,i){
					return t.fecha != fecha;
				});
			}

			$scope.addTexto = function(txt) {
				var data = window._.filter($scope.evento.extras.textos,function(t,i){
					return t.texto == txt.texto;
				});
				console.log(data);
				if(data.length==0) {
					$scope.evento.extras.textos.push(txt);
					return true;
				} else {
					alert("Ya existe este texto");
					return false;
				}
			}

			$scope.removeTexto = function(txt) {
				$scope.evento.extras.textos = window._.filter($scope.evento.extras.textos,function(t,i){
					return t.texto != txt.texto;
				});
			}

			$scope.addDirector = function(idDirector) {
				var data = window._.filter($scope.evento.extras.directores,function(m,i){
					return m.idDirector == idDirector
				});
				if(data.length==0) {
					$scope.evento.extras.directores.push({ idDirector:idDirector });
					return true;
				} else {
					alert("Ya existe este integrante");
					return false;
				}
			}

			$scope.removeDirector = function(idDirector) {
				$scope.evento.extras.directores = window._.filter($scope.evento.extras.directores,function(m,i){
					return m.idDirector != idDirector;
				});
			}

			$scope.addCompositor = function(compositor) {
				var data = window._.filter($scope.evento.extras.compositores,function(m,i){
					return m.idCompositor == compositor.idCompositor;
				});
				if(data.length==0) {
					$scope.evento.extras.compositores.push(compositor);
					return true;
				} else {
					alert("Ya existe este integrante");
					return false;
				}
			}

			$scope.removeCompositor = function(compositor) {
				$scope.evento.extras.compositores = window._.filter($scope.evento.extras.compositores,function(m,i){
					return m.idCompositor != compositor.idCompositor;
				});
			}

			$scope.addSolista = function(idSolista) {
				var data = window._.filter($scope.evento.extras.solistas,function(m,i){
					return m.idSolista == idSolista
				});
				if(data.length==0) {
					$scope.evento.extras.solistas.push({ idSolista:idSolista });
					return true;
				} else {
					alert("Ya existe este integrante");
					return false;
				}
			}

			$scope.removeSolista = function(idSolista) {
				$scope.evento.extras.solistas = window._.filter($scope.evento.extras.solistas,function(m,i){
					return m.idSolista != idSolista;
				});
			}

			$scope.parseIntegrante = function(id) {
				if(id != "" || id != undefined || id == 0) {
					var txt = window._.filter($scope.integrantes,function(s,i){
						return s.id== id;
					});
					return txt[0].nombres + " " + txt[0].apellidos;
				} else {
					return "";
				}
			}			

			$scope.parseCiclo = function(id) {
				if(id != "" || id != undefined || id == 0) {
					var txt = window._.filter($scope.ciclos,function(s,i){
						return s.id== id;
					})[0].codigoCiclo;
					return $scope.parseText(txt);
				} else {
					return "";
				}
			}

			$scope.parseTemporada = function(id) {
				if(id != "" || id != undefined || id == 0) {
					var txt = window._.filter($scope.temporadas,function(s,i){
						return s.id == id;
					})[0].codigoNombre;
					return $scope.parseText(txt);
				} else {
					return "";
				}
			}

			$scope.parseLocacion = function(id) {
				if(id != "" || id != undefined || id == 0) {
					var txt = window._.filter($scope.locaciones,function(s,i){
						return s.id == id;
					})[0].codigoTexto;
					return $scope.parseText(txt);
				} else {
					return "";
				}
			}

			$scope.parseCiudad = function(id) {
				if(id != "" || id != undefined || id == 0) {
					return window._.filter($scope.ciudades,function(s,i){
						console.log(s);
						return s.idciudad == id;
					})[0].str_ciudad;
				} else {
					return "";
				}
			}

			$scope.parsePais = function(id) {
				if(id != "" || id != undefined || id == 0) {
					return window._.filter($scope.paises,function(s,i){
						return s.idpais == id;
					})[0].str_pais;
				} else {
					return "";
				}
			}

			$scope.parseObras = function(id) {
				if(id != "" || id != undefined || id == 0) {
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

			$scope.parseFecha = function(miliseconds) {
				if(miliseconds == undefined) return;
				var fecha = new Date();
				fecha.setTime(miliseconds);
				var day = (fecha.getDate() < 10) ? ("0"+parseFloat(fecha.getDate())) : fecha.getDate();
				var month = (fecha.getMonth() < 9) ? ("0"+parseFloat(fecha.getMonth()+1)) : fecha.getMonth()+1;
				var year = (fecha.getFullYear() < 10) ? ("0"+parseFloat(fecha.getFullYear())) : fecha.getFullYear();
				return day+"/"+month+"/"+year;
			}

			$scope.parseHora = function(miliseconds) {
				if(miliseconds == undefined) return;
				console.log(miliseconds);
				var fecha = new Date();
				fecha.setTime(miliseconds);
				var hora = (fecha.getHours() < 10) ? ("0"+parseFloat(fecha.getHours())) : fecha.getHours();
				var minutes = (fecha.getMinutes() < 10) ? ("0"+parseFloat(fecha.getMinutes())) : fecha.getMinutes();
				return hora+":"+minutes+" hs";
			}

			$scope.reloadEventos = function() {
				EventosService.getEventos().then(function(response){
					$scope.eventos = response;
				});
			}

			$scope.cleanFields = function() {
				$scope.evento.uidEvento = "";
				$scope.evento.titulo = "";
				$scope.evento.link = "";
				$scope.evento.imagen = "";
				$scope.evento.ciclo = "";
				$scope.evento.locacion = "";
				$scope.evento.ciudad = "";
				$scope.evento.pais = "";
				$scope.evento.nacionalidad = "";
				$scope.evento.temporada = "";
				$scope.evento.fechas = [];
				$scope.evento.director = "";
				$scope.evento.extras = {};
				$scope.evento.extras.textos = [];
				$scope.evento.extras.directores = [];
				$scope.evento.extras.compositores = [];
				$scope.evento.extras.solistas = [];
				$scope.evento.desc = "";

				$scope.eventoSeleccionado = {};

				$scope.isSaving = false;
			}

			$scope.edit = function(evento) {
				$scope.eventoSeleccionado.uidEvento = evento.uidEvento;
				EventosService.getEvento(evento.uidEvento).then(function(response) {
					$scope.evento = response;
						if($scope.evento.extras.textos.length > 0) {
							$element.find(".default-item-texto-evento").remove();
						}
					/*if(response.status==200) {
						if(typeof(response.data[0])=='boolean') {
							if(response.data[0]==false){
								alert("Error: "+response.data[1]);
								return false;
							}
						}
						if(typeof(response.data[0])=='string') {
							alert("Se agregó correctamente");
							$scope.cleanFields();
							$scope.reloadEventos();
						}						
					}*/
				});
			}

			$scope.deleteEvento = function(uidEvento) {
				$scope.uidEventoToDelete = uidEvento;
				EventosService.deleteEvento(uidEvento).success(function(response) {
					$scope.eventos = window._.reject($scope.eventos, function(evento){
			 			return evento.uidEvento == $scope.uidEventoToDelete;
					});
				});
			}

		}])