var app = angular.module('walkerApp', ['firebase']);
app.firebaseRef = new Firebase("https://sizzling-fire-3596.firebaseio.com");

app.controller('AuthenticationController', function($scope) {

  function identityCallback(error, user) {
    if(error) {
      $scope.authError = error;
    } else if(user) {
      $scope.currentUser = user.email;
    }
  }  

  $scope.currentUser = "guest";

  $scope.identityProvider = new FirebaseSimpleLogin(app.firebaseRef, identityCallback);

  $scope.createUser = function() {
    console.log('Creating user ' + $scope.userEmail + ' with password ' + $scope.userPassword);
    $scope.identityProvider.createUser($scope.userEmail, $scope.userPassword, identityCallback);
  };

});
