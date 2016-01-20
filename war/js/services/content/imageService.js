angular.module('myApp.services')
    .factory('imageService',['$modal','$http','$resource', '$httpParamSerializerJQLike', function ($modal,$http,$resource,$httpParamSerializerJQLike) {
        
		"use strict";
		
		//var url_prefix = '_ah/api/contentEndpoint/v1';
		var url_prefix = 'api/contentEndpoint';
		
	    var serv={};
	    
	    serv.getById = function(id){
	    	return $resource(url_prefix + '/get?id=' + id).query().$promise;
	    };
	    
	    serv.getAll = function(){
	    	return $resource(url_prefix + '/listImages').query().$promise;
	    };
	    
	    serv.getByUser = function(userId){
	    	return $resource(url_prefix + '/imagesByUser?userId=' + userId).query().$promise;
	    };
	    
	    serv.insert = function(image){
	    	var data = image;

            return $http({
                method: 'POST',
                url: url_prefix + '/insertImage',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)

            }).$promise;
	    };
	    
	    serv.update = function(image){
	    	var data = image;

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

        serv.getFrob = function(){


        };

	
	    return serv;
    }
]);