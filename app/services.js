'use strict';

var newsAdenomServices = angular.module('newsAdenomServices', ['ngResource']);

newsAdenomServices.factory('FindNews', ['$resource',
  function(){
      var findNews=function(id,newsCollection){
          
          for (var i=0;i<newsCollection.length;i++){
              if(newsCollection[i]._id===id){
                  return newsCollection[i];
              }
          }
      };
    return {
        byId:findNews
    };
  }]);

