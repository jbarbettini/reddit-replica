'use strict';

angular.module('redditReplicaApp')

.controller('MainCtrl', ['$scope', 'MainService', function ($scope, MainService) {
  $scope.sort ='';

  $scope.changeSort = function(newSort) {
    $scope.sort = newSort;
    MainService.getData($scope.sort)
    .then(function(contents) {
      console.log('contents', contents);
        $scope.contents = contents;  

      console.log('scope.contents is', $scope.contents);
    });
  };

  MainService.getSubreddits()
    .then(function(data) {
      console.log('data');
      $scope.subreddits = data;
    });

  $scope.changeSort('hot');
}]);
