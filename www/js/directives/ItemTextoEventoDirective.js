'use strict';

angular
	.module('app')
	.directive('itemTextoEvento',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/item-texto-evento.html',
			link: {
				pre: function(scope,element,attributes) {
					if(attributes.data != undefined) {
						scope.dataTexto.texto = JSON.parse(attributes.data).texto;
						scope.isDefault = false;
						scope.isConfirmed = true;
					} else {
						if(element.index()<1){
							scope.placeholder = scope.placeholders[element.index()].placeholder;
						} else {
							scope.placeholder = "Ingrese información adicional";
						}
						scope.isDefault = true;
					}
				},
				post: function(scope,element,attributes) { }
			},
			controller: function($scope, $element) {
				$scope.dataTexto = {};
				$scope.dataTexto.texto = "";
				$scope.isConfirmed = false;
				$scope.placeholders = [{ placeholder:"Ingrese información adicional. Ejemplo: Ballet Estable del Teatro Colón, Director: Lidia Segnis" }];
				
				$scope.addElement = function() {
					console.log("add element");
				}

				$scope.removeItem = function(e) {
					$scope.removeTexto($scope.dataTexto);
					$element.remove();
        			$scope.$destroy();
				}
				
				$scope.confirmItem = function() {
					if($scope.dataTexto.texto == ""){
						alert("No se puede confirmar un texto vacio");
						return false;
					}
					$scope.isConfirmed = $scope.addTexto($scope.dataTexto);
					if($scope.isConfirmed) $element.remove();
				}
			}
		}
	}])