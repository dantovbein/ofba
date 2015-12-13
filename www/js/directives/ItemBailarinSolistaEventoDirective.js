'use strict';

angular
	.module('app')
	.directive('itemBailarinSolistaEvento',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/item-bailarin-solista-evento.html',
			controller: function($scope, $element) {
				$scope.bailarinSolista = "";
				$scope.isConfirmed = false;
				$scope.removeItem = function(e) {
					$scope.removeBailarinSolista($scope.bailarinSolista);
					$element.remove();
        			$scope.$destroy();
				}
				$scope.confirmItem = function() {
					if($scope.isConfirmed || $scope.bailarinSolista == "") return;
					$scope.isConfirmed = $scope.addBailarinSolista($scope.bailarinSolista);
				}
			}
		}
	}])