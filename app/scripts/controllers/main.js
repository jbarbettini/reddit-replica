'use strict';

angular.module('redditReplicaApp')

.controller('MainCtrl', ['$scope', 'MainService', function ($scope, MainService) {
  console.log('accessing main controller');
  MainService.getData()
    .then(function(data) {
      console.log('data', data);
      $scope.data = data;
    });
}]);
