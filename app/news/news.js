'use strict';

angular.module('myApp.news', ['ngRoute','ngResource','newsAdenomServices'])



.controller('newsCtrl', function($scope,$resource,FindNews) {
        var News=$resource("http://adneom.herokuapp.com/api/posts");
        $scope.newsCollection=News.query();
        
        
        $scope.upVote=function(){
            this.news.upvotes++;
        };
        $scope.downVote=function(){
            this.news.upvotes--;
            
        };
});