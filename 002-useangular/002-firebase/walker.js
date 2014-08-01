var app = angular.module('walkerApp', ['firebase']);
app.firebaseRef = new Firebase("https://sizzling-fire-3596.firebaseio.com");

app.controller('AuthenticationController', function($scope) {

  function identityCallback(error, user) {
    if(error) {
      $scope.authError = error;
      app.loggedInUser = null;
      $scope.currentUser = "guest";
    } else if(user) {
      $scope.currentUser = user.email;
      app.loggedInUser = user;
      $scope.authError = null;
      app.userHive = app.FirebaseRef.child('users').child(user.uid);
      if( isNewUser ) {
      	app.userHive.set({
          email: user.email,
          provider: user.provider,
          provider_id: user.id,
          steps_data: {}
      	});
      }
    }
  }  

  $scope.currentUser = "guest";
  $scope.identityProvider = new FirebaseSimpleLogin(app.firebaseRef, identityCallback);

  $scope.createUser = function() {
    $scope.identityProvider.createUser($scope.userEmail, $scope.userPassword, identityCallback);
  };

  $scope.login = function() {
  	$scope.identityProvider.login('password', {
  	  email: $scope.userEmail, 
  	  password: $scope.userPassword,
  	  rememberMe: true
    });
  };

});
