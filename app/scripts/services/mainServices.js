'use strict';

angular.module('redditReplicaApp.services', [])

.factory('MainService', function($http) {
  var getContent = function(sortBy) {
    return $http.get('https://www.reddit.com/' + sortBy + '.json').then(function(results) {
      return results.data.data.children;
    });
  };

  var getSubreddits = function() {
    return $http.get('https://www.reddit.com/subreddits/popular.json').then(function(results) {
      return results.data.data.children;
    });
  };

  var getSubContent = function(subredditList) {
    return $http.get('https://www.reddit.com/r/' + subredditList + '.json').then(function(results) {
      return results.data.data.children;
    });
  };

  return {
    'getContent': getContent,
    'getSubreddits': getSubreddits,
    'getSubContent': getSubContent
  };
});