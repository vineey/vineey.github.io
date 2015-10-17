(function(){
angular.module('home.module', [])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $stateProvider.state('home', {
        templateUrl: 'module/home/view/home.html',
        controller: 'HomeCtrl'
      });
  }]);

}());