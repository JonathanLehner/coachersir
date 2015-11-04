angular.module('myApp.services')
    .factory('imageService',['$modal','$http','$resource', '$httpParamSerializerJQLike', function ($modal,$http,$resource,$httpParamSerializerJQLike) {
        
		"use strict";
		
		var url_prefix = '_ah/api/contentEndpoint/v1';
		
	    var serv={};
	    
	    serv.getById = function(id){
	    	
	    }
	    
	    serv.getAll = function(){
	    	
	    }
	    
	    serv.getByUser = function(userId){
	    	
	    }
	    
	    serv.insert = function(image){
	    	
	    }
	    
	    serv.update = function(image){
	    	
	    }
	    
	    serv.remove = function(id){
	    	
	    }
	
	    return serv;
    }
]);