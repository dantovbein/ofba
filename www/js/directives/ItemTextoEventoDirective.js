'use strict';

angular
	.module('app')
	.directive('itemTextoEvento',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/item-texto-evento.html',
			controller: function($scope, $element) {
				$scope.texto = "";
				$scope.isConfirmed = false;
				$scope.removeItem = function(e) {
					$scope.removeTexto($scope.texto);
					$element.remove();
        			$scope.$destroy();
				}
				$scope.confirmItem = function() {
					if($scope.isConfirmed || $scope.texto == "") return;
					$scope.isConfirmed = $scope.addTexto($scope.texto);
				}
			}
		}
	}])