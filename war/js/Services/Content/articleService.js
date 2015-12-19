angular.module('myApp.services')
    .factory('articleService',['$modal','$http','$resource', '$httpParamSerializerJQLike', function ($modal,$http,$resource,$httpParamSerializerJQLike) {
        
		"use strict";
	
		//var url_prefix = '_ah/api/contentEndpoint/v1';
		var url_prefix = 'api/contentEndpoint';
		
//		var resource_config = {
//			get: {
//		        method: 'GET',
//		        headers: {
//		        	"Accept": "application/json;charset=utf-8",
//		            //"Accept-Charset": "charset=utf-8"
//		        	"Content-Type": "application/json; charset=utf-8"
//		        }
//		    }	
//		};
		
	    var serv={};
	    
	    serv.getById = function(id){
	    	return $resource(url_prefix + '/get?id=' + id).query().$promise;
	    };
	    
	    serv.getAll = function(){
	    	return $resource(url_prefix + '/listArticles'/*, {}, resource_config*/).query().$promise;
	    };
	    
	    serv.getByUser = function(userId){
	    	return $resource(url_prefix + '/articlesByUser?userId=' + userId).query().$promise;
	    };
	    
	    serv.insert = function(article){
	    	var data = article;

            return $http({
                method: 'POST',
                url: url_prefix + '/insertArticle',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)

            }).$promise;
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