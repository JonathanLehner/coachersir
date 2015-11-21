angular.module('myApp.services')
    .factory('articleService',['$modal','$http','$resource', '$httpParamSerializerJQLike', function ($modal,$http,$resource,$httpParamSerializerJQLike) {
        
		"use strict";
	
		var url_prefix = '_ah/api/contentEndpoint/v1';
		
	    var serv={};
	    
	    serv.getById = function(id){
	    	return $resource(url_prefix + '/get?id=' + id).get().$promise;
	    }
	    
	    serv.getAll = function(){
	    	return $resource(url_prefix + '/listArticles').get().$promise;
	    }
	    
	    serv.getByUser = function(userId){
	    	return $resource(url_prefix + '/articlesByUser?userId=' + userId).get().$promise;
	    }
	    
	    serv.insert = function(article){
	    	var data = article;

            return $http({
                method: 'POST',
                url: url_prefix + '/insertArticle',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)

            }).$promise;

	    }
	    
	    serv.update = function(article){
	    	
	    }
	    
	    serv.remove = function(id){
	    	
	    }
	
	    return serv;
    }
]);