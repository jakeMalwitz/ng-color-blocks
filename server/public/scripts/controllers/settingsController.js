colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");

  console.log('Settings Controller');
  $scope.message = "Color!";
  $scope.formColor = '';
  $scope.dataFactory = DataFactory;
  $scope.recent = $scope.dataFactory.recentColor;
  $scope.colors = $scope.dataFactory.colorsArray;

  $scope.addColor = function() {
    $scope.dataFactory.addColor($scope.formColor);
    console.log($scope.colors);
    console.log($scope.formColor);
    $scope.formColor = '';
  }
}]);
