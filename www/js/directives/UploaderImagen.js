'use strict';

angular
	.module('app')
	.directive('uploaderImagen',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/uploader-imagen.html',
			link: function(scope,element,attributes) {
				if(attributes.data != undefined) {
				}
			},
			controller: function($scope, $element, $compile) {
				$scope.fileName = "";
				/*$element.find("input").on('change', function (event, files, label) {
					var fileName = this.value.replace(/\\/g, '/').replace(/.*\//, '')
				   //	alert(this)
				   	//$scope.imagenSeleccionada.imagenAgregada = file_name;
				   	console.log(scope);
				},this);*/

				$scope.fileNameChanged = function() {
					debugger;
				}

			}
		}
	}])