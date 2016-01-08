'use strict';

angular
	.module('app')
	.controller('EventosFiltersCtrl',['$scope','EventosService',function($scope,EventosService){
		$scope.postEvento = function() {
			if($scope.validate()) {
				// Post
				if($scope.evento.uidEvento == undefined || $scope.evento.uidEvento == "") {
					console.log("Postear evento");
					EventosService.postEvento($scope.evento).then(function(response) {
						if(response.status==200) {
							if(typeof(response.data[0])=='boolean') {
								if(response.data[0]==false){
									alert("Error: "+response.data[1]);
									return false;
								}
							}
							if(typeof(response.data[0])=='string') {
								//alert("Se agregó correctamente");
								$scope.cleanFields();
								$scope.reloadEventos();
							}						
						}
						$scope.isSaving = false;
					});
				} else {
					// Edit
					console.log("Editar evento",$scope.evento.uidEvento);
					
					EventosService.editEvento($scope.evento).then(function(response) {
						console.log(response);
						if(response.status==200) {
							if(typeof(response.data[0])=='boolean') {
								if(response.data[0]==false){
									alert("Error: "+response.data[1]);
									return false;
								}
							}
							if(typeof(response.data[0])=='string') {
								//alert("Se editó correctamente");
								$scope.cleanFields();
								$scope.reloadEventos();
							}
							$scope.isSaving = false;					
						}
					});
				}
			}				
		}

		$scope.onCancelEvento = function() {
			$scope.cleanFields();
		}

		$scope.validate = function() {
			if($scope.evento.titulo=="") {
				$scope.errorText = "Se debe escribir el título";
				return false;
			//} else if ($scope.evento.imagen == "") {
				//$scope.errorText = "Se debe cargar la imágen";
				//return false;
			} else if ($scope.evento.ciclo == "") {
				$scope.errorText = "Se debe seleccionar el ciclo";
				return false;
			} else if ($scope.evento.locacion == "") {
				$scope.errorText = "Se debe seleccionar la locacion";
				return false;
			} else if ($scope.evento.nacionalidad == "") {
				$scope.errorText = "Se debe seleccionar la nacionalidad";
				return false;
			} else if ($scope.evento.pais == "") {
				$scope.errorText = "Se debe seleccionar el pais";
				return false;
			//} else if ($scope.evento.ciudad == "") {
			//	$scope.errorText = "Se debe seleccionar la ciudad";
			//	return false;
			} else if ($scope.evento.temporada == "") {
				$scope.errorText = "Se debe seleccionar la temporada";
				return false;
			} else if ($scope.evento.fechas.length == 0) {
				$scope.errorText = "Se debe cargar al menos una fecha";
				return false;
			} else if ($scope.evento.director == "") {
				$scope.errorText = "Se debe seleccionar el director";
				return false;
			} else {
				$scope.evento.strCiclo = $scope.parseCiclo($scope.evento.ciclo);
				$scope.evento.strTemporada = $scope.parseTemporada($scope.evento.temporada);
				$scope.evento.strCiudad = ($scope.evento.ciudad != undefined && $scope.evento.ciudad != "") ? $scope.parseCiudad($scope.evento.ciudad) : "";
				$scope.evento.strLocacion = $scope.parseLocacion($scope.evento.locacion);
				$scope.evento.desc = $scope.getHtmlDescription();
				$scope.isSaving = true;
				return true;
			}
		}

		$scope.getHtmlDescription = function() {
			var desc = "";
			var source = "";
			desc = '';
			desc += '<p>';
			desc += '{source}';
			source += '<div class="row-fluid">';
			source += '<div class="span12">';
			source += '<img class="pull-right img-ofba" src="images/ofba/events/thumbs/"' + $scope.evento.imagen + ' alt="" />';
			
			source += '<h4>' + $scope.parseTemporada($scope.evento.temporada) + '</h4>';
			source += '<h5>' + $scope.parseCiclo($scope.evento.ciclo) + '</h5>';
			source += '<h5>' + $scope.parseLocacion($scope.evento.locacion) + '</h5>';
			//source += '<h5>' + $scope.parseCiudad($scope.evento.ciudad) + ', ' + $scope.parsePais($scope.evento.pais) + '</h5>';
			source += '<h5>';
			source += ($scope.evento.ciudad != undefined && $scope.evento.ciudad != "") ? $scope.parseCiudad($scope.evento.ciudad) + ', ' : '';
			source += $scope.parsePais($scope.evento.pais);
			source += '</h5>';

			source += '</br>';

			if($scope.evento.textoFunciones != undefined && $scope.evento.textoFunciones != "") {
				source += '<p>';
				source += $scope.evento.textoFunciones;
				source += '</p>';
				source += '</br>';
			}

			source += '<p>';
			source += '<strong>Director: ';
			source += '<a href="' + "" + '">';
			source += $scope.parseIntegrante($scope.evento.director);
			source += '</a>';
			source += '</strong>';
			source += '</p>';

			source += '</br>';

			if($scope.evento.extras.directores.length > 0) {
				source += '<p>';
				source += '<h4>Directores:</h4>';
				window._.each($scope.evento.extras.directores, function(d,i){
					source += '<span>' + $scope.parseIntegrante(d.idDirector) + '</span>';
					source += (i != $scope.evento.extras.directores.length-1) ? ", " : "";
				});
				source += '</p>';
				source += '</br>';
			}

			if($scope.evento.extras.solistas.length > 0) {
				source += '<p>';
				source += '<h4>Solistas:</h4>';
				window._.each($scope.evento.extras.solistas, function(s,i){
					source += '<span>' + $scope.parseIntegrante(s.idSolista) + '</span>';
					source += (i != $scope.evento.extras.solistas.length-1) ? ", " : "";
				});
				source += '</p>';
				source += '</br>';
			}

			if($scope.evento.extras.compositores.length > 0) {
				source += '<p>';
				source += '<h4>Compositores:</h4>';
				window._.each($scope.evento.extras.compositores, function(c,i){
					source += '<strong>' + $scope.parseIntegrante(c.idCompositor) + '</strong>';
					if(c.obras.length > 0) {
						source += ": ";
						source += "<ul>";
						window._.each(c.obras, function(o,j){
							source += "<li>";
							source += $scope.parseObras(o);
							source += "</li>";
						});
						source += "</ul>";
					}
				});
				source += '</p>';
				source += '</br>';
			}

			if($scope.evento.extras.textos.length > 0) {
				window._.each($scope.evento.extras.textos, function(t,i){
					source += '<p>';
					source += t.texto.replace(/\\r\\n/g, "<br />");
					source += '</p>';
					source += '</br>';
				});
			}

			source += '</div>';
			source += '</div>';
			
			/*source += '<div class="row-fluid">';
			source += '<div class="span12">';
			source += '</div>';
			source += '</div>';
			source += '<div class="row-fluid">';
			source += '<div class="span4">';
			source += '<div id="mnuProgramaMano" class="accordion">';
			source += '<div class="accordion-inner">';
			source += '<span style="color: #FCEAC3;">Programa de mano</span>';
			source += '</div>';
			source += '</div>';
			source += '</div>';
			source += '<div class="span4">';
			source += '<div id="mnuGaleriaImagenes" class="accordion">';
			source += '<div class="accordion-inner">';
			source += '<span style="color: #FCEAC3;">Galería de imágenes</span>';
			source += '</div>';
			source += '</div>';
			source += '</div>';
			source += '<div class="span4">';
			source += '<div id="mnuRegistroFonografico" class="accordion">';
			source += '<div class="accordion-inner">'; 
			source += '<span style="color: #FCEAC3;">Registro fonográfico</span>';
			source += '</div>';
			source += '</div>';
			source += '</div>';
			source += '</div>';
			source += '<div class="row-fluid">';
			source += '<div class="span4">';
			source += '<div id="mnuAnuncios" class="accordion">';
			source += '<div class="accordion-inner">';
			source += '<span style="color: #FCEAC3;">Anuncios</span>';
			source += '</div>';
			source += '</div>';
			source += '</div>';
			source += '<div class="span4">';
			source += '<div id="mnuGacetillaPrensa" class="accordion">';
			source += '<div class="accordion-inner">'; 
			source += '<span style="color: #FCEAC3;">Gacetilla de prensa</span>';
			source += '</div>';
			source += '</div>'; 
			source += '</div>';
			source += '<div class="span4">';
			source += '<div id="mnuRegistroFilmografico" class="accordion">';
			source += '<div class="accordion-inner">';
			source += '<span style="color: #FCEAC3;">Registro filmográfico</span>';
			source += '</div>';
			source += '</div>';
			source += '</div>';
			source += '</div>';
			source += '<div class="row-fluid">';
			source += '<div class="span4">';
			source += '<div id="mnuCriticas" class="accordion">';
			source += '<div class="accordion-inner">';
			source += '<span style="color: #FCEAC3;">Críticas</span>';
			source += '</div>';
			source += '</div>';
			source += '</div>';
			source += '</div>';*/
			
			source = source.replace(/</g,'[[');
			source = source.replace(/>/g,']]');
			desc += source;
			desc += '{/source}';
			desc += '</p>';

			return desc;
		}
	}])