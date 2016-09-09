angular.module('redditReplicaApp.services', [])

.factory('MainService', function($http) {
  var getData = function() {
    return $http.get('http://www.reddit.com/.json').then(function(results) {
      return results.data.data.children;
    });
  };

  return {
    'getData': getData
  };
});