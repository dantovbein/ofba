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
					$scope.removeFecha($scope.parseFecha($scope.fecha));
					$element.remove();
        			$scope.$destroy();
				}
				
				$scope.confirmItem = function() {
					
					if($scope.fecha == ""){
						alert("No se seleccionó ninguna fecha")
						return false;
					}
					$scope.isConfirmed = $scope.addFecha($scope.parseFecha($scope.fecha));
				}

				$scope.parseFecha = function(date) {
					var time = Date.parse(date).toString()
					var epochTime = time.slice(0,time.length-3);
					return epochTime;
				}
			}
		}
	}])