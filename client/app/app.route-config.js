(function () {
  angular
    .module('eventModule')
    .config(config);

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/eventlist');

    $stateProvider
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'app/portfolio/portfolio.html'
      })
      .state('eventlist', {
        url: '/eventlist',
        templateUrl: 'app/payment-details/eventlist.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html'
      })

  }
})();
