var app = angular.module("myApp", []);

app.controller("MembersCtrl", function($scope, $http) {
  $http.get("http://private-a73e-aquentuxsociety.apiary-mock.com/members").
  success(function(data) {
      $scope.members = data;
    });

    $scope.select = function(member) {
      $scope.selected = member
    }
    $scope.isSelected = function(member) {
      return $scope.selected == member
    }

    $scope.filterFunction = function(element) {
      return element.firstName.match(/^Ma/) ? true : false;
    };

});
