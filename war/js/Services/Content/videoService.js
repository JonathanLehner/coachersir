angular.module('myApp.services')
    .factory('videoService',['$modal','$http','$resource', '$httpParamSerializerJQLike', function ($modal,$http,$resource,$httpParamSerializerJQLike) {
        
		"use strict";
		
		var url_prefix = '_ah/api/contentEndpoint/v1';
		
	    var serv={};
	    
	    serv.getById = function(id){
	    	
	    }
	    
	    serv.getAll = function(){
	    	
	    }
	    
	    serv.getByUser = function(userId){
	    	
	    }
	    
	    serv.insert = function(video){
	    	
	    }
	    
	    serv.update = function(video){
	    	
	    }
	    
	    serv.remove = function(id){
	    	
	    }
	
	    return serv;
    }
]);