'use strict';

angular
	.module('app')
	.directive('itemFechaEvento',[function(){
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'templates/directives/item-fecha-evento.html',
			link: function(scope,element,attributes) {
				if(attributes.data != undefined) {
					var parsedDate = Date.parse(JSON.parse(attributes.data).fecha+" "+JSON.parse(attributes.data).horaInicio);
					scope.fecha = new Date();
					scope.fecha.setTime(parsedDate);
					scope.isConfirmed = true;
				}
			},
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

					var time = Date.parse($scope.fecha).toString();
					var tmpFecha = new Date();
					tmpFecha.setTime(time);
					console.log(time);
					var objFecha = {fecha:tmpFecha.getFullYear()+"-"+tmpFecha.getMonth()+"-"+tmpFecha.getDate(),horaInicio:tmpFecha.getHours()+":"+tmpFecha.getMinutes()+":"+tmpFecha.getSeconds()}
					console.log(objFecha)
					$scope.isConfirmed = $scope.addFecha($scope.parseFecha($scope.fecha));
					//$scope.isConfirmed = $scope.addFecha($scope.fecha);
					if($scope.isConfirmed) $element.remove();
				}

				$scope.parseFecha = function(fecha) {
					//console.log(fecha);
					//var time = Date.parse(fecha).toString();
					return Date.parse(fecha).toString();
					//return Date.parse(fecha).toString();
					//var tmpDate = new Date();
					//tmpDate.setTime(time);

					//var epochTime = new Date(tmpDate.getFullYear(),tmpDate.getMonth(),tmpDate.getDate(),tmpDate.getHours(),tmpDate.getMinutes(),tmpDate.getSeconds(),tmpDate.getMilliseconds()) / 1000;
					//var epochTime = new Date(tmpDate.getFullYear(),tmpDate.getMonth(),tmpDate.getDate(),tmpDate.getHours(),tmpDate.getMinutes(),tmpDate.getSeconds()) / 1000;
					
					//return epochTime;
					//console.log(time);
					//return Math.round(tmpDate.getTime()/1000.0);
					//return Math.round(new Date().getTime()/1000.0)
					//var parts = time.match(/(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})/);
					//return Date.UTC(+parts[3], parts[2]-1, +parts[1], +parts[4], +parts[5]);
					//var epochTime = time.slice(0,time.length-3);
					//return epochTime;
					//debugger;
					//return time;

					//var dateVal ="/Date("+time+")/";
					//return new Date( parseFloat( dateVal.substr(6)));
					//console.log(Date.now());
					//return Math.floor(Date.now() / 1000);
				}
			}
		}
	}])