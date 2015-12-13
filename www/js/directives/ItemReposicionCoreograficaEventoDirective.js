'use strict';

angular
	.module('app')
	.directive('itemReposicionCoreograficaEvento',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/item-reposicion-coreografica-evento.html',
			controller: function($scope, $element) {
				$scope.reposicionCoreografica = "";
				$scope.isConfirmed = false;
				$scope.removeItem = function(e) {
					$scope.removeReposicionCoreografica($scope.reposicionCoreografica);
					$element.remove();
        			$scope.$destroy();
				}
				$scope.confirmItem = function() {
					if($scope.isConfirmed || $scope.reposicionCoreografica == "") return;
					$scope.isConfirmed = $scope.addReposicionCoreografica($scope.reposicionCoreografica);
				}
			}
		}
	}])