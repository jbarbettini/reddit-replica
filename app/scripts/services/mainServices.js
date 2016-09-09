'use strict';

angular.module('redditReplicaApp.services', [])

.factory('MainService', function($http) {
  var getData = function(trend) {
    console.log('trend is', trend);
    return $http.get('http://www.reddit.com/' + trend + '.json').then(function(results) {
      console.log('results', results);
      return results.data.data.children;
    });
  };

  var getSubreddits = function() {
    return $http.get('http://www.reddit.com/subreddits/popular.json').then(function(results) {
      console.log('subreddits', results);
      return results.data.data.children;
    });
  };

  return {
    'getData': getData,
    'getSubreddits': getSubreddits
  };
});