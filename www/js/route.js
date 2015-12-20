angular.module('app')
	.config(function($stateProvider,$urlRouterProvider){

			$urlRouterProvider.otherwise('login');
			
			$stateProvider
				
				.state('login',{
					url:'/login',
					templateUrl:'templates/controllers/login.html',
					controller: 'LoginCtrl'
				})

				.state('main',{
					url:'/',
					views: {
						'': {
							templateUrl:'templates/controllers/main.html',
							controller: 'MainCtrl'
						},
						'header@main': {
							templateUrl: 'templates/controllers/header-component.html'
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
						tiposDirector: function(TiposDirectorService) {
							return TiposDirectorService.getTiposDirector();
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

				.state('main.obras',{
					url: 'obras/',
					views: {
						'container': {
							templateUrl: "templates/controllers/obras.html",
							controller: "ObrasCtrl"
						}
					},
					resolve: {
						obras: function(ObrasService){
							return ObrasService.getObras();
						}
					}
					
				})

				.state('main.eventos',{
					url: 'conciertos/giras-y-eventos/:id',
					views: {
						'container': {
							templateUrl: "templates/controllers/eventos.html",
							controller: "EventosCtrl"
						}
					},
					resolve: {
						eventos: function() {
							return [];
						},
						ciclos: function(CiclosService) {
							return CiclosService.getCiclos();
						},
						temporadas: function(TemporadasService) {
							return TemporadasService.getTemporadas();
						},
						textos: function(TextosService) {
							return TextosService.getTextos();
						},
						nacionalidades: function(NacionalidadesService) {
							return NacionalidadesService.getNacionalidades();
						},
						integrantes: function(IntegrantesService) {
							return IntegrantesService.getIntegrantes();
						},
						obras: function(ObrasService) {
							return ObrasService.getObras();
						},
						locaciones: function(LocacionesService) {
							return LocacionesService.getLocaciones();
						},
						paises: function(PaisesService) {
							return PaisesService.getPaises();
						},
						ciudades: function(CiudadesService) {
							return CiudadesService.getCiudades();
						}
					}
				})
			});