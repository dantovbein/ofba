'use strict';

angular
	.module('app')
	.directive('itemCompositorEvento',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/item-compositor-evento.html',
			controller: function($scope, $element, $compile) {
				$scope.compositor = {};
				$scope.isConfirmed = false;
				$scope.compositor.id = "";
				$scope.compositor.obras = [];
				
				$scope.removeItem = function(e) {
					$scope.removeCompositor($scope.compositor);
					$element.remove();
        			$scope.$destroy();
				}

				$scope.confirmItem = function() {
					if(!$scope.checkConfirmedObras()) {
						alert("Hay obras que no fueron confirmadas");
					} else {
						if($scope.isConfirmed || $scope.compositor.id == "") return;
						$scope.isConfirmed = $scope.addCompositor($scope.compositor);
					}
				}

				$scope.checkConfirmedObras = function() {
					if($element.find('.subitem-multi-data').find('item-obra-compositor-evento').length > $scope.compositor.obras) {
						return false;
					} else {
						return true;
					}
				}

				$scope.addObra = function(obra) {
					var data = window._.filter($scope.compositor.obras,function(c,i){
						return c == obra
					});
					if(data.length==0) {
						$scope.compositor.obras.push(obra);
						return true;
					} else {
						alert("Esta obra ya fué agregada");
						return false;
					}
				}

				$scope.onChangeCompositor = function() {
					$scope.compositor.obras = [];
					$element.find(".subitem-multi-data").empty()
				}

				$scope.removeObra = function(obra) {
					window._.each($scope.compositor.obras,function(m,i){
						if(m == obra){
							$scope.compositor.obras.splice(i,1);
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