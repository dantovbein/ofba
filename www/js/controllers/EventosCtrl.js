'use strict';

angular
	.module('app')
	.controller('EventosCtrl',['$scope','$compile','eventos','ciclos','temporadas','textos','nacionalidades','integrantes','locaciones','paises','ciudades',
		function($scope,$compile,eventos,ciclos,temporadas,textos,nacionalidades,integrantes,locaciones,paises,ciudades){
			$scope.evento = {};
			
			//$scope.evento.fechas = [];
			//$scope.evento.fechaDesde = "";
			//$scope.evento.fechaHasta = "";
			//$scope.html = "";
			$scope.evento.extra = {};
			$scope.evento.extra.textos = [];
			$scope.evento.extra.directores = [];
			//$scope.evento.extra.coreografos = [];
			//$scope.evento.extra.bailarinesSolistas = [];	
			//$scope.evento.extra.reposicionesCoreograficas = [];

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

			/*getIntegrante= function(idIntegrante) {
				window._.each($scope.integrantes,function(integrante){
					if(integrante.id==idIntegrante){

					}
					console.log(integrante);

				})
			}*/

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

			/*$scope.addCoreografo = function(integrante) {
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
			}*/

			$scope.postEvento = function() {
				// Deberia ser [[/]]
				$scope.html = '';
				$scope.html += '<p>';
				$scope.html += '<div class="row-fluid">';
				$scope.html += '<div class="span12">';
				$scope.html += '<img class="pull-right img-ofba" src="images/ofba/events/thumbs/"' + "" + ' alt="" />';
				
				$scope.html += '<h4>' + $scope.evento.titulo + '</h4>';
				
				$scope.html += '<h5>' + $scope.evento.tipo + '</h5>';
				
				$scope.html += '<h5>' + $scope.evento.locacion + '</h5>';
				
				/*$scope.html += '<p>';
				$scope.html += '<strong>';
				$scope.html += $scope.evento.fechaDesde;
				$scope.html += '</strong>';
				$scope.html += '</p>';*/

				$scope.html += '<p>';
				$scope.html += '<strong>Director:';
				$scope.html += '<a href="' + "" + '">';
				$scope.html += $scope.evento.idDirector;
				$scope.html += '</a>';
				$scope.html += '</strong>';
				$scope.html += '</p>';

				if($scope.evento.extra.textos.length > 0) {
					$scope.html += '<p>';
					window._.each($scope.evento.extra.textos, function(t,i){
						$scope.html += '<strong>' + t + '</strong></br>';
					});
					$scope.html += '</p>';
				}

				if($scope.evento.extra.musicos.length > 0) {
					$scope.html += '<p>';
					$scope.html += '<strong>Musicos: ';
					window._.each($scope.evento.extra.musicos, function(m,i){
						$scope.html += m;
						$scope.html += (i != $scope.evento.extra.musicos.length-1) ? ', ' : '';
					});
					$scope.html += '</strong>';
					$scope.html += '</p>';
				}

				if($scope.evento.extra.coreografos.length > 0) {
					$scope.html += '<p>';
					$scope.html += '<strong>Coreografos: ';
					window._.each($scope.evento.extra.coreografos, function(c,i){
						$scope.html += c;
						$scope.html += (i != $scope.evento.extra.coreografos.length-1) ? ', ' : '';
					});
					$scope.html += '</strong>';
					$scope.html += '</p>';
				}

				if($scope.evento.extra.bailarinesSolistas.length > 0) {
					$scope.html += '<p>';
					$scope.html += '<strong>Bailarines solistas: ';
					window._.each($scope.evento.extra.bailarinesSolistas, function(bs,i){
						$scope.html += bs;
						$scope.html += (i != $scope.evento.extra.bailarinesSolistas.length-1) ? ', ' : '';
					});
					$scope.html += '</strong>';
					$scope.html += '</p>';
				}

				if($scope.evento.extra.reposicionesCoreograficas.length > 0) {
					$scope.html += '<p>';
					$scope.html += '<strong>Reposiciones coreograficas: ';
					window._.each($scope.evento.extra.reposicionesCoreograficas, function(rc,i){
						$scope.html += rc;
						$scope.html += (i != $scope.evento.extra.reposicionesCoreograficas.length-1) ? ', ' : '';
					});
					$scope.html += '</strong>';
					$scope.html += '</p>';
				}

				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '<div class="row-fluid">';
				$scope.html += '<div class="span12">';
				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '<div class="row-fluid">';
				$scope.html += '<div class="span4">';
				$scope.html += '<div id="mnuProgramaMano" class="accordion">';
				$scope.html += '<div class="accordion-inner">';
				$scope.html += '<span style="color: #FCEAC3;">Programa de mano</span>';
				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '<div class="span4">';
				$scope.html += '<div id="mnuGaleriaImagenes" class="accordion">';
				$scope.html += '<div class="accordion-inner">';
				$scope.html += '<span style="color: #FCEAC3;">Galería de imágenes</span>';
				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '<div class="span4">';
				$scope.html += '<div id="mnuRegistroFonografico" class="accordion">';
				$scope.html += '<div class="accordion-inner">'; 
				$scope.html += '<span style="color: #FCEAC3;">Registro fonográfico</span>';
				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '<div class="row-fluid">';
				$scope.html += '<div class="span4">';
				$scope.html += '<div id="mnuAnuncios" class="accordion">';
				$scope.html += '<div class="accordion-inner">';
				$scope.html += '<span style="color: #FCEAC3;">Anuncios</span>';
				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '<div class="span4">';
				$scope.html += '<div id="mnuGacetillaPrensa" class="accordion">';
				$scope.html += '<div class="accordion-inner">'; 
				$scope.html += '<span style="color: #FCEAC3;">Gacetilla de prensa</span>';
				$scope.html += '</div>';
				$scope.html += '</div>'; 
				$scope.html += '</div>';
				$scope.html += '<div class="span4">';
				$scope.html += '<div id="mnuRegistroFilmografico" class="accordion">';
				$scope.html += '<div class="accordion-inner">';
				$scope.html += '<span style="color: #FCEAC3;">Registro filmográfico</span>';
				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '<div class="row-fluid">';
				$scope.html += '<div class="span4">';
				$scope.html += '<div id="mnuCriticas" class="accordion">';
				$scope.html += '<div class="accordion-inner">';
				$scope.html += '<span style="color: #FCEAC3;">Críticas</span>';
				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '</div>';
				$scope.html += '</p>';

			}
		}])