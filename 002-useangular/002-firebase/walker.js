var app = angular.module('walkerApp', ['firebase']);

app.controller('AuthenticationController', function($scope) {
  $scope.user = "guest";
});
