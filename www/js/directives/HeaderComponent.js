angular.module('app')
	.directive('headerComponent',['$state','$rootScope',function($state,$rootScope){
		var d = {
			templateUrl:'./templates/directives/header-component.html',
		};
		return d;
	}])