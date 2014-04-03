@RaffleCtrl = ($scope) -> 
  $scope.entries = [
    {name: "Manny"}
    {name: "Moe"}
    {name: "Jack"}
  ]

  $scope.addEntry = ->
    $scope.entries.push($scope.newEntry)
    $scope.newEntry = {}
