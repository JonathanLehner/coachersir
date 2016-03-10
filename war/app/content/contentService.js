angular.module('myApp.services')
    .factory('contentService',['$modal','$http','$resource','$q', 
                       function($modal , $http , $resource , $q){
        
		"use strict";
		
		var url_prefix = 'api/contentEndpoint';

		var serv={};

	    serv.getById = function(id){
	    	return $resource(url_prefix + '/get?id=' + id).get().$promise;
	    };
	    
	    serv.insert = function(content,type){
	    	if(type === 'article'){
	    		return insertToDB(content, 'Article');
	    	}else if(type === 'image'){
	    		return insertToDB(content, 'Image');
	    	}else if(type === 'video'){
	    		return insertToDB(content, 'Video');
	    	}
	    };
	    	    
	    var insertToDB = function(content,type){
	    	var data = content;

            return $http({
                method: 'POST',
                url: url_prefix + '/insert' + type,
                headers: {'Content-Type': 'application/json'},
                data: data
            });
	    };

	    serv.getAll = function(type){
	    	if(type === 'article'){
	    		return $resource(url_prefix + '/listArticles').query().$promise;
	    	}else if(type === 'image'){
	    		return $resource(url_prefix + '/listImages').query().$promise;
	    	}else if(type === 'video'){
	    		return $resource(url_prefix + '/listVideos').query().$promise;
	    	}
	    };
	    
	    serv.getByUser = function(userId,type){
	    	return $resource(url_prefix + '/'+ type +'sByUser?userId=' + userId).query().$promise;
	    };
	    
	    serv.update = function(content){
	    	var data = content;

            return $http({
                method: 'POST',
                url: url_prefix + '/update',
                headers: {'Content-Type': 'application/json'},
                data: data

            }).$promise;
	    };
	    
	    serv.remove = function(id){
	    	var data = {id: id};

            return $http({
                method: 'POST',
                url: url_prefix + '/remove',
                headers: {'Content-Type': 'application/json'},
                data: $httpParamSerializerJQLike(data)

            }).$promise;
	    };
	    
	    serv.removeAll = function(ids){
	    	var data = {"longs":ids};

            return $http({
                method: 'POST',
                url: url_prefix + '/removeAll',
                headers: {'Content-Type': 'application/json'},
                data: data
            }).$promise;
	    };
        
	    return serv;
    }
]);