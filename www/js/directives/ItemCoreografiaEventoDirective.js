'use strict';

angular
	.module('app')
	.directive('itemCoreografiaEvento',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/item-coreografia-evento.html',
			controller: function($scope, $element) {
				$scope.coreografo = "";
				$scope.isConfirmed = false;
				$scope.removeItem = function(e) {
					$scope.removeCoreografo($scope.coreografo);
					$element.remove();
        			$scope.$destroy();
				}
				$scope.confirmItem = function() {
					if($scope.isConfirmed || $scope.coreografo == "") return;
					$scope.isConfirmed = $scope.addCoreografo($scope.coreografo);
				}
			}
		}
	}])