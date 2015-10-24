(function(){
  var vendorModule = [
    'ui.router',
    'ui.bootstrap',
    'firebase'
  ];

  var appModule = [
    'core.module',
    'home.module'
  ];

  angular.element(document).ready(function() {
      angular.module('vineSpringProject', vendorModule.concat(appModule) )
        .run(['$rootScope', '$firebaseObject',  function ($rootScope, $firebaseObject) {
          $rootScope.head = {};

          $rootScope.head.title = 'Engineering Simplicity';

          var ref = new Firebase("https://vineey.firebaseio.com/blogs");

          $rootScope.blogs = $firebaseObject(ref);

      }]);

      angular.bootstrap(document, ['vineSpringProject']);
  });
}());
(function(){
angular.module('core.module', []);
}());
(function(){
angular.module('home.module', [])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $stateProvider.state('home', {
        templateUrl: 'module/home/view/home.html',
        controller: 'HomeCtrl'
      });
  }]);

}());
(function(){
angular.module('home.module')
.controller("HomeCtrl", ['$scope', function($scope){

}]);

}());