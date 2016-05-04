'use strict';

angular.module('myApp.comments', ['ngRoute','ngResource'])



.controller('commentsCtrl', function($scope,$resource,$routeParams) {
        $scope.newsId=$routeParams.newsId;
        var Comments=$resource("http://adneom.herokuapp.com/api/posts/:newsId");
        Comments.get({newsId: $scope.newsId},function(news){
            $scope.commentsCollection=news.comments;
        });
        $scope.clickComments=function(news){
            
        };
});