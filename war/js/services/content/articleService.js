angular.module('myApp.services')
    .factory('articleService',['$modal','$http','$resource', '$httpParamSerializerJQLike', function ($modal,$http,$resource,$httpParamSerializerJQLike) {
        
		"use strict";
	
		//var url_prefix = '_ah/api/contentEndpoint/v1';
		var url_prefix = 'api/contentEndpoint';

		var serv={};
        serv.articles = {};

        serv.init = function(){
            CKEDITOR.replace( 'articleEditor', {
                language: 'he',
                uiColor: '#9AB8F3'
            });

            CKEDITOR.instances.articleEditor.setData('הכנס תוכן כאן.');
        };

        serv.getArticlesData = function(){
            return serv.articles;
        };

        serv.setArticlesData = function(articles){
            serv.articles = articles;
        }
	    
	    serv.getById = function(id){
	    	return $resource(url_prefix + '/get?id=' + id).get().$promise;
	    };
	    
	    serv.getAll = function(){
	    	return $resource(url_prefix + '/listArticles').query().$promise;
	    };
	    
	    serv.getByUser = function(userId){
	    	return $resource(url_prefix + '/articlesByUser?userId=' + userId).query().$promise;
	    };
	    
	    serv.insert = function(scope){

            var articleContent = CKEDITOR.instances.articleEditor.getData();

            var content = {
                headline:scope.content.headline,
                content:articleContent,
                user_id:scope.user.id
            };
	    	var data = content;

            return $http({
                method: 'POST',
                url: url_prefix + '/insertArticle',
                headers: {'Content-Type': 'application/json'},
                data: data

            });
	    };
	    
	    serv.update = function(article){
	    	var data = article;

            return $http({
                method: 'POST',
                url: url_prefix + '/update',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)

            }).$promise;
	    };
	    
	    serv.remove = function(id){
	    	var data = {id: id};

            return $http({
                method: 'POST',
                url: url_prefix + '/remove',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)

            }).$promise;
	    };
	
	    return serv;
    }
]);