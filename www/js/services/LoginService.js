angular.module('app')
	.factory('LoginService',['$state',function($state){
		return {
			errorText:"",
			login: function(credentials,onSuccessLogin,onErrorLogin){
				if(credentials.userName == undefined || credentials.userName == ""){
					this.errorText = "Error en el nombre";
					onErrorLogin();
					return;
				} else if(credentials.userPassword == undefined || credentials.userPassword == "") {
					this.errorText = "Error en la contraseña";
					onErrorLogin();
					return;
				} else {
					$state.transitionTo('main');
					//onSuccessLogin();
				}
			},
			logout: function(){
				$state.transitionTo('login');
			}
		}
	}]);