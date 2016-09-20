'use strict';

angular.module('redditReplicaApp')

.controller('MainCtrl', ['$scope', 'MainService', function ($scope, MainService) {
  $scope.sort ='';
  $scope.subreddits = [];
  $scope.filteredSubs = [];

  // get list of currently popular subreddits
  MainService.getSubreddits()
    .then(function(data) {
      for (var i = 0; i < data.length; i++) {
        $scope.subreddits.push({
          name: data[i].data.display_name,
          status: false});
      }
      return $scope.subreddits;
    });

  // update view with new sort parameter
  $scope.changeSort = function(newSort) {
    $scope.sort = newSort;
    MainService.getContent($scope.sort)
    .then(function(contents) {
      $scope.contents = contents;  
    });
  };

  // choose subreddits to filter on 
  $scope.selectSubreddit = function(index) {
    var subreddit = $scope.subreddits[index];
    $scope.subreddits[index].status = !subreddit.status;
    var cleanSub = subreddit.name.toLowerCase();
    // use the subreddit status flag to determine to add or remove to filtered list
    if (subreddit.status) {
      $scope.filteredSubs.push(cleanSub);
    } else {
      var location = $scope.filteredSubs.indexOf(subreddit.name);
      $scope.filteredSubs.splice(location, 1);
    }
  };

  // update view based upon new filtered subreddit parameters
  $scope.submitSubs = function() {
    var cleanSubs = $scope.filteredSubs.join('+');
    MainService.getSubContent(cleanSubs)
    .then(function(contents) {
      $scope.contents = contents;
    });
  };

  // initialize view with default front page content 
  $scope.changeSort('hot');
}]);
