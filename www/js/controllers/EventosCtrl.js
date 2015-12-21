'use strict';

angular
	.module('app')
	.controller('EventosCtrl',['$scope','$element','$compile','eventos','ciclos','temporadas','textos','nacionalidades','integrantes','obras','locaciones','paises','ciudades',
		function($scope,$element,$compile,eventos,ciclos,temporadas,textos,nacionalidades,integrantes,obras,locaciones,paises,ciudades){
			
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

			$scope.onSaveEvento = function() {
				$element.find("#html").html($scope.getHtml());
			}

			$scope.onCancelEvento = function() {
				
			}

			$scope.validate = function() {
				
			}

			$scope.getHtml = function() {
				// Deberia ser [[/]]
				var html = "";
				html = '';
				html += '<p>';
				html += '<div class="row-fluid">';
				html += '<div class="span12">';
				//html += '<img class="pull-right img-ofba" src="images/ofba/events/thumbs/"' + "" + ' alt="" />';
				
				//html += '<h4>' + $scope.evento.titulo + '</h4>';
				html += '<h4>' + $scope.parseTemporada($scope.evento.temporada) + '</h4>';
				html += '<h5>' + $scope.parseCiclo($scope.evento.ciclo) + '</h5>';
				html += '<h5>' + $scope.parseLocacion($scope.evento.locacion) + '</h5>';
				html += '<h5>' + $scope.parseCiudad($scope.evento.ciudad) + ', ' + $scope.parsePais($scope.evento.pais) + '</h5>';
				
				/*html += '<p>';
				html += '<strong>';
				html += evento.fechaDesde;
				html += '</strong>';
				html += '</p>';*/
				html += '</br>';

				html += '<p>';
				html += '<strong>Director: ';
				html += '<a href="' + "" + '">';
				html += $scope.parseIntegrante($scope.evento.director);
				html += '</a>';
				html += '</strong>';
				html += '</p>';

				html += '</br>';

				if($scope.evento.extra.directores.length > 0) {
					html += '<p>';
					html += '<h4>Directores:</h4>';
					window._.each($scope.evento.extra.directores, function(d,i){
						html += '<span>' + $scope.parseIntegrante(d) + '</span>';
						html += (i != $scope.evento.extra.directores.length-1) ? ", " : "";
					});
					html += '</p>';
					html += '</br>';
				}

				if($scope.evento.extra.solistas.length > 0) {
					html += '<p>';
					html += '<h4>Solistas:</h4>';
					window._.each($scope.evento.extra.solistas, function(s,i){
						html += '<span>' + $scope.parseIntegrante(s) + '</span>';
						html += (i != $scope.evento.extra.solistas.length-1) ? ", " : "";
					});
					html += '</p>';
					html += '</br>';
				}

				if($scope.evento.extra.compositores.length > 0) {
					html += '<p>';
					html += '<h4>Compositores:</h4>';
					window._.each($scope.evento.extra.compositores, function(c,i){
						html += '<strong>' + $scope.parseIntegrante(c.id) + '</strong>';
						if(c.obras.length > 0) {
							html += ": ";
							html += "<ul>";
							window._.each(c.obras, function(o,j){
								html += "<li>";
								html += $scope.parseObras(o);
								//html += (j != c.obras.length-1) ? ", " : "";
								html += "</li>";
							});
							html += "</ul>";
						}
						//html += '</br>';
					});
					html += '</p>';
					html += '</br>';
				}

				if($scope.evento.extra.textos.length > 0) {
					window._.each($scope.evento.extra.textos, function(t,i){
						html += '<p>';
						html += t;
						html += '</p>';
						html += '</br>';
					});
				}

				/*if(evento.extra.musicos.length > 0) {
					html += '<p>';
					html += '<strong>Musicos: ';
					window._.each(evento.extra.musicos, function(m,i){
						html += m;
						html += (i != evento.extra.musicos.length-1) ? ', ' : '';
					});
					html += '</strong>';
					html += '</p>';
				}

				if(evento.extra.coreografos.length > 0) {
					html += '<p>';
					html += '<strong>Coreografos: ';
					window._.each(evento.extra.coreografos, function(c,i){
						html += c;
						html += (i != evento.extra.coreografos.length-1) ? ', ' : '';
					});
					html += '</strong>';
					html += '</p>';
				}

				if(evento.extra.bailarinesSolistas.length > 0) {
					html += '<p>';
					html += '<strong>Bailarines solistas: ';
					window._.each(evento.extra.bailarinesSolistas, function(bs,i){
						html += bs;
						html += (i != evento.extra.bailarinesSolistas.length-1) ? ', ' : '';
					});
					html += '</strong>';
					html += '</p>';
				}

				if(evento.extra.reposicionesCoreograficas.length > 0) {
					html += '<p>';
					html += '<strong>Reposiciones coreograficas: ';
					window._.each(evento.extra.reposicionesCoreograficas, function(rc,i){
						html += rc;
						html += (i != evento.extra.reposicionesCoreograficas.length-1) ? ', ' : '';
					});
					html += '</strong>';
					html += '</p>';
				}*/
				html += '</div>';
				html += '</div>';
				
				/*html += '<div class="row-fluid">';
				html += '<div class="span12">';
				html += '</div>';
				html += '</div>';
				html += '<div class="row-fluid">';
				html += '<div class="span4">';
				html += '<div id="mnuProgramaMano" class="accordion">';
				html += '<div class="accordion-inner">';
				html += '<span style="color: #FCEAC3;">Programa de mano</span>';
				html += '</div>';
				html += '</div>';
				html += '</div>';
				html += '<div class="span4">';
				html += '<div id="mnuGaleriaImagenes" class="accordion">';
				html += '<div class="accordion-inner">';
				html += '<span style="color: #FCEAC3;">Galería de imágenes</span>';
				html += '</div>';
				html += '</div>';
				html += '</div>';
				html += '<div class="span4">';
				html += '<div id="mnuRegistroFonografico" class="accordion">';
				html += '<div class="accordion-inner">'; 
				html += '<span style="color: #FCEAC3;">Registro fonográfico</span>';
				html += '</div>';
				html += '</div>';
				html += '</div>';
				html += '</div>';
				html += '<div class="row-fluid">';
				html += '<div class="span4">';
				html += '<div id="mnuAnuncios" class="accordion">';
				html += '<div class="accordion-inner">';
				html += '<span style="color: #FCEAC3;">Anuncios</span>';
				html += '</div>';
				html += '</div>';
				html += '</div>';
				html += '<div class="span4">';
				html += '<div id="mnuGacetillaPrensa" class="accordion">';
				html += '<div class="accordion-inner">'; 
				html += '<span style="color: #FCEAC3;">Gacetilla de prensa</span>';
				html += '</div>';
				html += '</div>'; 
				html += '</div>';
				html += '<div class="span4">';
				html += '<div id="mnuRegistroFilmografico" class="accordion">';
				html += '<div class="accordion-inner">';
				html += '<span style="color: #FCEAC3;">Registro filmográfico</span>';
				html += '</div>';
				html += '</div>';
				html += '</div>';
				html += '</div>';
				html += '<div class="row-fluid">';
				html += '<div class="span4">';
				html += '<div id="mnuCriticas" class="accordion">';
				html += '<div class="accordion-inner">';
				html += '<span style="color: #FCEAC3;">Críticas</span>';
				html += '</div>';
				html += '</div>';
				html += '</div>';
				html += '</div>';*/
				html += '</p>';

				return html;

			}
		}])