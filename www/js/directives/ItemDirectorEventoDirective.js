'use strict';

angular
	.module('app')
	.directive('itemDirectorEvento',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/item-director-evento.html',
			controller: function($scope, $element) {
				$scope.integrante = "";
				$scope.isConfirmed = false;
				$scope.removeItem = function(e) {
					$scope.removeDirector($scope.integrante);
					$element.remove();
        			$scope.$destroy();
				}
				$scope.confirmItem = function() {
					if($scope.isConfirmed || $scope.integrante == "") return;
					$scope.isConfirmed = $scope.addDirector($scope.integrante);
				}
			}
		}
	}])