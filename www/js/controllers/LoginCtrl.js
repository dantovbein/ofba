angular.module('app')
	.controller('LoginCtrl',['$scope','$state','LoginService',function($scope,$state,LoginService){
		$scope.credentials = {};
		$scope.showPassword = true;
		$scope.login = function(){
			LoginService.login($scope.credentials,$scope.onSuccessLogin,$scope.onErrorLogin);
		},
		$scope.onSuccessLogin = function(){
			//$state.transitionTo('main');
		},
		$scope.onErrorLogin = function(){
			$scope.errorText = LoginService.errorText;
		}
	}]);