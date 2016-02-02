angular.module('myApp.services')
    .factory('imageService',['$modal','$http','$resource', '$httpParamSerializerJQLike','$q', function ($modal,$http,$resource,$httpParamSerializerJQLike,$q) {
        
		"use strict";
		
		//var url_prefix = '_ah/api/contentEndpoint/v1';
		var url_prefix = 'api/contentEndpoint';
		
	    var serv={};

        serv.insert = function(scope){
            var deferred = $q.defer();
            var data1;
            addImage(scope).then(function(data){
                data1 = data;
                return serv.insertToDB(data1);
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
	    
	    serv.getById = function(id){
	    	return $resource(url_prefix + '/get?id=' + id).query().$promise;
	    };
	    
	    serv.getAll = function(){
	    	return $resource(url_prefix + '/listImages').query().$promise;
	    };
	    
	    serv.getByUser = function(userId){
	    	return $resource(url_prefix + '/imagesByUser?userId=' + userId).query().$promise;
	    };

	    serv.insertToDB = function(scope){
	    	var data = scope;

            return $http({
                method: 'POST',
                url: url_prefix + '/insertImage',
                headers: {'Content-Type': 'application/json'},
                data: data

            });
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