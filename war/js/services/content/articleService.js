angular.module('myApp.services')
    .factory('articleService',['$modal','$http','$resource','$translate','contentService', 
                       function($modal , $http , $resource , $translate , contentService) {
        
		"use strict";
	
		var url_prefix = 'api/contentEndpoint';

		var serv={};
		var type='article';
		serv.articles = undefined;

        serv.init = function(){
            CKEDITOR.replace( 'articleEditor', {
                language: 'he',
                uiColor: '#9AB8F3'
            });

            CKEDITOR.instances.articleEditor.setData($translate.instant("User.Article.Insert_Here"));
        };

        serv.getArticlesData = function(){
            return serv.articles;
        };

        serv.setArticlesData = function(articles){
            serv.articles = articles;
        }
        
	    serv.insert = function(scope){

            var articleContent = CKEDITOR.instances.articleEditor.getData();

            var article = {
                headline:scope.content.headline,
                content:articleContent,
                tags:scope.tags,
                user_id:scope.user.id
            };

            return contentService.insert(article,'article');
	    };

	    serv.readArticle =  function(contentObj){
	    	var articleModal = $modal.open({
			    templateUrl:'/app/modals/articles/articleReader.html',
			    keyboard: true,
			    controller:'articleReaderCtrl',
			    backdrop:'static',
			    resolve:{
                    articleObj: function(){
                        return contentObj;
                    }
                }
            });
       	};

	    serv.getAll = function(){
	    	return contentService.getAll(type);
	    };
	    
	    serv.getByUser = function(userId){
	    	return contentService.getByUser(userId,type);
	    };
       	
	    var resolve = function(errorVal, returnVal, deferred) {
			if (errorVal) {
			  deferred.reject(errorVal);
			} else {
			  deferred.resolve(returnVal);
			}
        };
	    
       	return serv;
    }
]);