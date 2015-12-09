'use strict';

angular
	.module('app')
	.directive('itemMusicoEvento',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/item-musico-evento.html',
			controller: function($scope, $element) {
				$scope.musico = "";
				$scope.isConfirmed = false;
				$scope.removeItem = function(e) {
					$scope.removeMusico($scope.musico);
					$element.remove();
        			$scope.$destroy();
				}
				$scope.confirmItem = function() {
					if($scope.isConfirmed || $scope.musico == "") return;
					$scope.isConfirmed = $scope.addMusico($scope.musico);
				}
			}
		}
	}])