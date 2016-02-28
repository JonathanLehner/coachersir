angular.module('myApp.services')
    .factory('imageService',['$modal','$http','$resource','$q','contentService', 
                     function($modal , $http , $resource , $q , contentService){
        
		"use strict";
		
		var url_prefix = 'api/contentEndpoint';
		
	    var serv={};
	    var type='image';
	    var uploadToken;
	    
        serv.insert = function(scope){
            var deferred = $q.defer();
            addImage(scope).then(function(data){
                return contentService.insert(data,type);
            }).then(function(response){
                resolve(null,response.data,deferred);
            });
            return deferred.promise;
        };

    	serv.initImageToken = function(data){
    		uploadToken=data;
    	};
        
    	var uploadImage = function(files, onUploadComplete){
    		if(uploadToken.provider === 'ospry'){
    			var ospry = new Ospry(uploadToken.token);
    			
    			ospry.up({
                    files: files,
                    imageReady: onUploadComplete
                });
    		}else{
    			alert('upload image provier not supported');
    		}
    	}
    	
        var addImage = function(scope){
            var deferred = $q.defer();
            
            var onUploadComplete = function (err, metadata, i) {
                if (err === null) {
                    console.log('Image uploaded to: ' + metadata.url);
                    var image = {
                        "user_id": scope.user.id,
                        "headline": scope.headline,
                        "description": scope.description,
                        "content": metadata.url
                    };
                    deferred.resolve(image);
                }
            };

            if(dropzone.files[0]) {
            	uploadImage(dropzone.files, onUploadComplete);
            }
            return deferred.promise;
        };

        serv.addMainImg = function(){
            var deferred = $q.defer();
            
            var onUploadComplete = function (err, metadata, i) {
            	if (err === null) {
                    console.log('Image uploaded to: ' + metadata.url);
                    deferred.resolve(metadata.url);
                }
            };

            if(dropzone.files[0]) {
            	uploadImage(dropzone.files, onUploadComplete);
            }
            return deferred.promise;
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