'use strict';

angular.module('redditReplicaApp.services', [])

.factory('MainService', function($http) {
  var getData = function(trend) {
    console.log('trend is', trend);
    return $http.get('http://www.reddit.com/' + trend + '.json').then(function(results) {
      return results.data.data.children;
    });
  };

  var getSubreddits = function() {
    return $http.get('http://www.reddit.com/subreddits/popular.json').then(function(results) {
      console.log('subreddits', results);
      return results.data.data.children;
    });
  };

  var filterSubContent = function(subredditList) {
    return $http.get('http://www.reddit.com/' + subredditList + '.json').then(function(results) {
      console.log('subreddits content', results);
      return results.data.data.children;
    });
  };

  return {
    'getData': getData,
    'getSubreddits': getSubreddits
  };
});