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

          var ref = new Firebase("https://vineey.firebaseio.com/users/user1");
          var AUTH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjowLCJkIjp7InVpZCI6InVzZXIiLCJkYXRhIjp7InByb3ZpZGVyIjoiR2l0aHViIn19LCJpYXQiOjE0NDUwNzcyMjZ9.9IepIGqcClcVUuvoKkVXp3IuZaigpUXc3JkpeiTfuH8';

          ref.authWithCustomToken(AUTH_TOKEN, function(error, authData) {
              if (error) {
                  console.log("Login Failed!", error);
              } else {
                  console.log("Login Succeeded!", authData);
              }
          });

          $rootScope.user = $firebaseObject(ref);

      }]);

      angular.bootstrap(document, ['vineSpringProject']);
  });
}());