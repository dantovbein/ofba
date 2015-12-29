'use strict';

angular
	.module('app')
	.directive('itemSolistaEvento',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/item-solista-evento.html',
			link: function(scope,element,attributes) {
				if(attributes.data != undefined) {
					scope.integrante = JSON.parse(attributes.data).idSolista;
					scope.isConfirmed = true;
				}
			},
			controller: function($scope, $element) {
				$scope.integrante = "";
				$scope.isConfirmed = false;
				$scope.removeItem = function(e) {
					$scope.removeSolista($scope.integrante);
					$element.remove();
        			$scope.$destroy();
				}
				$scope.confirmItem = function() {
					if($scope.integrante == ""){
						alert("No se seleccionó ningun solista")
						return false;
					}
					$scope.isConfirmed = $scope.addSolista($scope.integrante);
					$element.remove();
				}
			}
		}
	}])