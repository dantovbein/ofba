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
					scope.defaultText = attributes.params || "Ingrese información adicional";
				},
				post: function(scope,element,attributes) {}
			},
			controller: function($scope, $element) {
				$scope.texto = "";
				$scope.isConfirmed = false;
				
				$scope.addElement = function() {
					console.log("add element");
				}

				$scope.removeItem = function(e) {
					$scope.removeTexto($scope.texto);
					$element.remove();
        			$scope.$destroy();
				}
				
				$scope.confirmItem = function() {
					if($scope.texto == ""){
						alert("No se puede confirmar un texto vacio");
						return false;
					}
					$scope.isConfirmed = $scope.addTexto($scope.texto);
				}
			}
		}
	}])