'use strict';

angular.module('myApp.addnews', ['ngRoute','ngResource'])



.controller('addnewsCtrl', function($scope,$resource) {

        $scope.submit=function(){
            if($scope.post.title&&$scope.post.link){
                var News=$resource("http://adneom.herokuapp.com/api/posts/");
                var newNews=News.save({title:$scope.post.title,link:$scope.post.link});
                newNews.$save();
            }
        };
});