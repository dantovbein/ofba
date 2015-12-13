'use strict';

angular
	.module('app')
	.directive('itemFechaEvento',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/item-fecha-evento.html',
			controller: function($scope, $element) {
				$scope.fecha = "";
				$scope.isConfirmed = false;
				
				$scope.removeItem = function(e) {
					$scope.removeFecha($scope.fecha);
					$element.remove();
        			$scope.$destroy();
				}
				
				$scope.confirmItem = function() {
					console.log($scope.fecha)
					if($scope.isConfirmed || $scope.fecha == "") return;
					$scope.isConfirmed = $scope.addFecha($scope.fecha);
				}
			}
		}
	}])