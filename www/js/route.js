angular.module('app')
	.config(function($stateProvider,$urlRouterProvider){

			$urlRouterProvider.otherwise('login');
			
			$stateProvider
				.state('main',{
					url:'/',
					views: {
						'': {
							templateUrl:'/templates/main.html',
							controller: 'MainCtrl'
						},
						'mainNav@main': {
							templateUrl: './templates/main-nav.html',
							controller: 'MainNavCtrl'
						}
					}
				})
				

				.state('main.integrantes',{
					url: 'integrantes/',
					views: {
						'container': {
							templateUrl: "./templates/integrantes.html",
							controller: "IntegrantesCtrl"
						}
					}
				})

				.state('main.galeria-de-imagenes',{
					url: 'galeria-de-imagenes/',
					views: {
						'container': {
							templateUrl: "./templates/galeria-de-imagenes.html",
							controller: "IntegrantesCtrl"
						}
					}
				})

				.state('main.temporadas',{
					url: 'conciertos/temporadas/',
					views: {
						'container': {
							templateUrl: "./templates/temporadas.html",
							controller: "TemporadasCtrl"
						}
					}
				})

				.state('main.directores',{
					url: 'conciertos/directores/',
					views: {
						'container': {
							templateUrl: "./templates/directores.html",
							controller: "TemporadasCtrl"
						}
					}
				})

				.state('main.solistas',{
					url: 'conciertos/solistas/',
					views: {
						'container': {
							templateUrl: "./templates/solistas.html",
							controller: "SolistaCtrl"
						}
					}
				})

				.state('main.compositores-obras',{
					url: 'conciertos/compositores-obras/',
					views: {
						'container': {
							templateUrl: "./templates/compositores-obras.html",
							controller: "CompositoresObrasCtrl"
						}
					}
				})

				.state('main.giras',{
					url: 'conciertos/giras/',
					views: {
						'container': {
							templateUrl: "./templates/giras.html",
							controller: "GirasCtrl"
						}
					}
				})

				.state('login',{
					url:'/login',
					templateUrl:'./templates/login.html',
					controller: 'LoginCtrl'
				})
		});

/*
STATES vs URL ROUTE
https://scotch.io/tutorials/angular-routing-using-ui-router 

state ui-view 
Most states in your application will probably have a url associated with them 
iu-sref='state' http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-sref
It provides a different approach than ngRoute in that it changes your application views based on state of the application and not just the route URL.

when ng-view
$urlRouterProvider has the responsibility of watching $location
*/