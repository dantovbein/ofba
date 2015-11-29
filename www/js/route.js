angular.module('app')
	.config(function($stateProvider,$urlRouterProvider){

			$urlRouterProvider.otherwise('login');
			
			$stateProvider
				.state('main',{
					url:'/',
					views: {
						'': {
							templateUrl:'templates/controllers/main.html',
							controller: 'MainCtrl'
						},
						'header@main': {
							templateUrl: 'templates/directives/header-component.html'
						},
						'mainNav@main': {
							templateUrl: 'templates/controllers/main-nav.html',
							controller: 'MainNavCtrl'
						}
					}
				})
				

				.state('main.integrantes',{
					url: 'integrantes/:id',
					views: {
						'container': {
							templateUrl: "templates/controllers/integrantes.html",
							controller: "IntegrantesCtrl"
						}
					},
					resolve: {
						integrantes: function(IntegrantesService) {
							return IntegrantesService.getIntegrantes();
						},
						tiposIntegrante: function(IntegrantesService) {
							return IntegrantesService.getTiposIntegrante();
						},
						instrumentos: function(InstrumentosService) {
							return InstrumentosService.getInstrumentos();
						},
						tiposDirector: function(DirectoresService) {
							return DirectoresService.getTiposDirector();
						},						
						nacionalidades: function(NacionalidadesService) {
							return NacionalidadesService.getNacionalidades();
						}
					}
				})

				.state('main.galeria-de-imagenes',{
					url: 'galeria-de-imagenes/',
					views: {
						'container': {
							templateUrl: "templates/controllers/galeria-de-imagenes.html",
							controller: "GaleriaImagenesCtrl"
						}
					},
					resolve: {
						imagenes: function(GaleriaImagenesService){
							return GaleriaImagenesService.getImagenes();
						}
					}
				})

				.state('main.temporadas',{
					url: 'conciertos/temporadas/',
					views: {
						'container': {
							templateUrl: "templates/controllers/temporadas.html",
							controller: "TemporadasCtrl"
						}
					}
				})

				.state('main.directores',{
					url: 'conciertos/directores/',
					views: {
						'container': {
							templateUrl: "templates/controllers/directores.html",
							controller: "TemporadasCtrl"
						}
					}
				})

				.state('main.solistas',{
					url: 'conciertos/solistas/',
					views: {
						'container': {
							templateUrl: "templates/controllers/solistas.html",
							controller: "SolistaCtrl"
						}
					}
				})

				.state('main.compositores-obras',{
					url: 'conciertos/compositores-obras/',
					views: {
						'container': {
							templateUrl: "templates/controllers/compositores-obras.html",
							controller: "CompositoresObrasCtrl"
						}
					}
				})

				.state('main.giras',{
					url: 'conciertos/giras/',
					views: {
						'container': {
							templateUrl: "templates/controllers/giras.html",
							controller: "GirasCtrl"
						}
					}
				})

				.state('login',{
					url:'/login',
					templateUrl:'templates/controllers/login.html',
					controller: 'LoginCtrl'
				})
		});