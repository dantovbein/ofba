'use strict';

angular
	.module('app')
	.directive('itemObraCompositorEvento',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/item-obra-compositor-evento.html',
			controller: function($scope, $element) {
				$scope.obra = "";
				$scope.isConfirmedObra = false;
				$scope.removeItem = function(e) {
					if($scope.isConfirmed) {
						alert("No se puede eliminar obras ya que el compositor fue confirmado");
						return false;
					}
					$scope.removeObra($scope.obra);
					$element.remove();
        			$scope.$destroy();
				}
				$scope.confirmItem = function() {
					if($scope.obra == ""){
						alert("No se seleccionó ninguna obra")
						return false;
					}
					$scope.isConfirmedObra = $scope.addObra($scope.obra);
				}
			}
		}
	}])