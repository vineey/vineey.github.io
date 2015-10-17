(function(){
var vendorModule = [
  'ui.router',
  'ui.bootstrap'
];

var appModule = [
  'core.module',
  'home.module'
];

angular.element(document).ready(function() {
    angular.module('vineSpringProject', vendorModule.concat(appModule) )
      .run(['$rootScope', function ($rootScope) {
        $rootScope.head = {};
        $rootScope.head.title = 'Engineering Simplicity';
    }]);
    angular.bootstrap(document, ['vineSpringProject']);
});
}());