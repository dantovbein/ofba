'use strict';

angular
	.module('app')
	.directive('itemCompositorEvento',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/item-compositor-evento.html',
			link: function(scope,element,attributes) {
				if(attributes.data != undefined) {
					scope.integrante.idCompositor = JSON.parse(attributes.data).idCompositor;
					scope.integrante.obras = JSON.parse(attributes.data).obras;					
					//scope.isConfirmed = true;
				}
			},
			controller: function($scope, $element, $compile) {
				$scope.integrante = {};
				$scope.isConfirmed = false;
				$scope.integrante.idCompositor = "";
				$scope.integrante.obras = [];
				
				$scope.removeItem = function(e) {
					$scope.removeCompositor($scope.integrante);
					$element.remove();
        			$scope.$destroy();
				}

				$scope.confirmItem = function() {
					if(!$scope.checkConfirmedObras()) {
						alert("Hay obras que no fueron confirmadas");
					} else {
						if($scope.isConfirmed || $scope.integrante.idCompositor == "") return;
						$scope.isConfirmed = $scope.addCompositor($scope.integrante);
						if($scope.isConfirmed) $element.remove();
					}
				}

				$scope.checkConfirmedObras = function() {
					if($element.find('.subitem-multi-data').find('item-obra-compositor-evento').length > $scope.integrante.obras.length) {
						return false;
					} else {
						return true;
					}
				}

				$scope.addObra = function(obra) {
					var data = window._.filter($scope.integrante.obras,function(c,i){
						return c == obra
					});
					if(data.length==0) {
						$scope.integrante.obras.push(obra);
						return true;
					} else {
						alert("Esta obra ya fué agregada");
						return false;
					}
				}

				$scope.onChangeCompositor = function() {
					$scope.integrante.obras = [];
					$element.find(".subitem-multi-data").empty()
				}

				$scope.removeObra = function(obra) {
					window._.each($scope.integrante.obras,function(m,i){
						if(m == obra){
							$scope.integrante.obras.splice(i,1);
							return;
						}
					});
				}				

				$scope.addElement = function(element,container,params) {
					if($scope.isConfirmed) {
						alert("No se puede agregar obras ya que el compositor fue confirmado");
						return false;
					}

					var container = $element.find(container);
					var el = angular.element(document.createElement(element));
					if(params != undefined){
						el.attr('params',params);
					}
					$compile(el)($scope);
					angular.element(container.append(el));
				}
			}
		}
	}])