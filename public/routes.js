app.config(function ($stateProvider, $urlRouterProvider) {
    //sets homepage default
    $urlRouterProvider.otherwise('/home')
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'HomeController',
            controllerAs: 'hc'
        })
        
        .state('nothome', {
            url: '/nothome',
           templateUrl: 'nothome.html',
           controller: 'NotHomeController',
           controllerAs: 'nhc'
        })
});