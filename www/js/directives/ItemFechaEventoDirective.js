'use strict';

angular
	.module('app')
	.directive('itemFechaEvento',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/item-fecha-evento.html',
			controller: function($scope, $element) {
				$scope.removeItem = function(e) {
					$element.remove();
        			$scope.$destroy();
				}
			}
		}
	}])