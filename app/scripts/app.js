'use strict';

angular.module('redditReplicaApp', [
  'redditReplicaApp.services',
  'ngRoute',
  'ngSanitize'
])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
