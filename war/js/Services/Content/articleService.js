angular.module('myApp.services')
    .factory('articleService',['$modal','$http','$resource', '$httpParamSerializerJQLike', function ($modal,$http,$resource,$httpParamSerializerJQLike) {
        
		"use strict";
	
		var url_prefix = '_ah/api/contentEndpoint/v1';
		
	    var serv={};
	    
	    serv.getById = function(id){
	    	
	    }
	    
	    serv.getAll = function(){
	    	return $resource(url_prefix + '/listArticles').get().$promise;
	    }
	    
	    serv.getByUser = function(userId){
	    	return $resource(url_prefix + '/articlesByUser?userId=' + userId).get().$promise;
	    }
	    
	    serv.insert = function(article){
	    	
	    }
	    
	    serv.update = function(article){
	    	
	    }
	    
	    serv.remove = function(id){
	    	
	    }
	
	    return serv;
    }
]);