angular.module('myApp.services')
    .factory('imageService',['$modal','$http','$resource','$q','contentService', 
                     function($modal , $http , $resource , $q , contentService){
        
		"use strict";
		
		var url_prefix = 'api/contentEndpoint';
		
	    var serv={};
	    var type='image';
	    
        serv.insert = function(scope){
            var deferred = $q.defer();
            var data1;
            addImage(scope).then(function(data){
                return contentService.insert(data,type);
            }).then(function(data){
                deferred.resolve(data)
            });
            return deferred.promise;
        };

        var addImage = function(scope){
            var deferred = $q.defer();
            var ospry = new Ospry('pk-test-mcagfau5650hcymnbt0riz3b');

            if(dropzone.files[0]) {
                ospry.up({
                    files: dropzone.files,
                    imageReady: function (err, metadata, i) {
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
                    }
                });
                return deferred.promise;
            }
        };

        serv.addMainImg = function(){
                var deferred = $q.defer();
                var ospry = new Ospry('pk-test-mcagfau5650hcymnbt0riz3b');

                if(dropzone.files[0]) {
                    ospry.up({
                        files: dropzone.files,
                        imageReady: function (err, metadata, i) {
                            if (err === null) {
                                console.log('Image uploaded to: ' + metadata.url);
                                deferred.resolve(metadata.url);
                            }
                        }
                    });
                    return deferred.promise;
                }
        };
	    
	    serv.getAll = function(){
	    	return contentService.getAll(type);
	    };
	    
	    serv.getByUser = function(userId){
	    	return contentService.getByUser(userId,type);
	    };
	    
	    return serv;
    }
]);