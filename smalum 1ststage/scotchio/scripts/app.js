angular
.module('slyModule',['ngCart','ngMaterial','ui.router'])
.config(function($mdThemingProvider,$stateProvider,$urlRouterProvider){
$mdThemingProvider.theme('default')
.primaryPalette('teal')
.accentPalette('orange');
$urlRouterProvider.otherwise('/auth');
$stateProvider
.state('auth',{
	url:'/auth',
	templateUrl:'/views/auth.html',
	controller:''
})
.state('ngc',{
	url:'/ngc',
	templateUrl:'/views/ngcart.html',
	controller:''
})

;

});