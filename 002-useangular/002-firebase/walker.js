var app = angular.module('walkerApp', ['firebase']);
app.firebaseRef = new Firebase("https://sizzling-fire-3596.firebaseio.com");

app.getUserHive = function(user) {
  var usersHive = app.firebaseRef.child('users');
  return usersHive.child(user.uid);
};

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
      app.userHive = app.getUserHive(user);
      if( app.isNewUser ) {
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
  	app.isNewUser = true;
    $scope.identityProvider.createUser($scope.userEmail, $scope.userPassword, identityCallback);
  };

  $scope.login = function() {
  	app.isNewUser = false;
  	$scope.identityProvider.login('password', {
  	  email: $scope.userEmail, 
  	  password: $scope.userPassword,
  	  rememberMe: true
    });
  };

});
