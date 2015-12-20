'use strict';

angular
	.module('app')
	.directive('itemSolistaEvento',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/item-solista-evento.html',
			controller: function($scope, $element) {
				$scope.solista = "";
				$scope.isConfirmed = false;
				$scope.removeItem = function(e) {
					$scope.removeSolista($scope.solista);
					$element.remove();
        			$scope.$destroy();
				}
				$scope.confirmItem = function() {
					if($scope.solista == ""){
						alert("No se seleccionó ningun solista")
						return false;
					}
					$scope.isConfirmed = $scope.addSolista($scope.solista);
				}
			}
		}
	}])