'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.news',
  'myApp.comments',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/news', {
            templateUrl: 'news/news.html',
            controller: 'newsCtrl'
          }).when('/comments/:newsId', {
            templateUrl: 'comments/comments.html',
            controller: 'commentsCtrl'
          }).otherwise({redirectTo: '/news'});
}]);
