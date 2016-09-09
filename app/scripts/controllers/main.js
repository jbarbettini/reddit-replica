'use strict';

angular.module('redditReplicaApp')

.controller('MainCtrl', ['$scope', 'MainService', function ($scope, MainService) {
  $scope.sort ='';
  $scope.subredditList = [];

  // get list of currently popular subreddits
  MainService.getSubreddits()
    .then(function(data) {
      console.log('data');
      $scope.subreddits = data;
    });

  // update view with new sort parameter
  $scope.changeSort = function(newSort) {
    $scope.sort = newSort;
    MainService.getData($scope.sort)
    .then(function(contents) {
      $scope.contents = contents;  
    });
  };

  // choose subreddits to filter on 
  $scope.selectSubreddit = function(index) {
    var subreddit = $scope.subreddits[index].data.display_name;
    var cleanSub = subreddit.toLowerCase();
    $scope.subredditList.push(cleanSub);
    console.log('subredditList is', $scope.subredditList);
  };

  // update view based upon new filtered subreddit parameters
  $scope.submitSubs = function() {
    var cleanUrl = $scope.subredditList.join('+');
    console.log('cleanUrl', cleanUrl);
    MainService.filterSubContent(cleanUrl)
    .then(function(contents) {
      console.log('new subreddit contents', contents);
      $scope.contents = contents;
    });
  };

  // initialize view with default front page content 
  $scope.changeSort('hot');
}]);
