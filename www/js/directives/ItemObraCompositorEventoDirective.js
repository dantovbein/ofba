'use strict';

angular
	.module('app')
	.directive('itemObraCompositorEvento',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/item-obra-compositor-evento.html',
			link: function(scope,element,attributes) {
				if(attributes.data != undefined) {
					scope.idObra = attributes.data;
					scope.isConfirmedObra = true;
				}
			},
			controller: function($scope, $element) {
				$scope.idObra = "";
				$scope.isConfirmedObra = false;
				$scope.removeItem = function(e) {
					if($scope.isConfirmed) {
						alert("No se puede eliminar obras ya que el compositor fue confirmado");
						return false;
					}
					$scope.removeObra($scope.idObra);
					$element.remove();
        			$scope.$destroy();
				}
				$scope.confirmItem = function() {
					if($scope.idObra == ""){
						alert("No se seleccionó ninguna obra")
						return false;
					}
					$scope.isConfirmedObra = $scope.addObra($scope.idObra);
				}
			}
		}
	}])