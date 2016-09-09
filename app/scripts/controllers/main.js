'use strict';

angular.module('redditReplicaApp')

.controller('MainCtrl', ['$scope', 'MainService', function ($scope, MainService) {
  $scope.sort ='';

  $scope.changeSort = function(newSort) {
    $scope.sort = newSort;
    MainService.getData($scope.sort)
    .then(function(data) {
      console.log('data', data);
      $scope.data = data;
    });
  }

  MainService.getSubreddits()
    .then(function(data) {
      $scope.subreddits = data;
    })

  $scope.changeSort('hot');
}]);
