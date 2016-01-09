angular.module('myApp.services')
    .factory('videoService',['$modal','$http','$resource', '$httpParamSerializerJQLike', function ($modal,$http,$resource,$httpParamSerializerJQLike) {
        
		"use strict";
		
		//var url_prefix = '_ah/api/contentEndpoint/v1';
		var url_prefix = 'api/contentEndpoint';

		var serv={};

        serv.videos = undefined;

        serv.getVideos = function(){
            return serv.videos;
        };

        serv.setVideos = function(videos){
            serv.videos = videos;
        };

        serv.playVideo =  function(parameter){
            var videoModal = $modal.open({
                templateUrl:'/app/modals/videos/playVideo.html',
                keyboard: true,
                controller:'videoPlayerCtrl',
                backdrop:'static',
                resolve:{
                    videoRef: function(){
                        return parameter;
                    }
                }
            });
        };
	    
	    serv.getById = function(id){
	    	return $resource(url_prefix + '/get?id=' + id).get().$promise;
	    };
	    
	    serv.getAll = function(){
	    	return $resource(url_prefix + '/listVideos').query().$promise;
	    };
	    
	    serv.getByUser = function(userId){
	    	return $resource(url_prefix + '/videosByUser?userId=' + userId).query().$promise;
	    };
	    
	    serv.insert = function(video){
	    	var data = video;

            return $http({
                method: 'POST',
                url: url_prefix + '/insertVideo',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)

            }).$promise;
	    };
	    
	    serv.update = function(video){
	    	var data = video;

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