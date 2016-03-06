angular.module('myApp.services')
    .factory('homeVideoService',['$modal','$http','$resource','$q','contentService',
                     function($modal , $http , $resource , $q , contentService){
        
		"use strict";
		
		var url_prefix = 'api/contentEndpoint';

		var serv={};
		var type='video';
		serv.videos = {};
        serv.favorites = undefined;


        serv.playVideo =  function(parameter){
            var videoModal = $modal.open({
                templateUrl:'/app/modals/videos/playVideo.html',
                keyboard: true,
                controller:'videoPlayerCtrl',
                backdrop:'static',
                resolve:{
                    videoObj: function(){
                        return parameter;
                    }
                }
            });
        };

        
        serv.getAll = function(){
	    	return contentService.getAll(type);
	    };

		 serv.getAllFavorites = function(){
			 return contentService.getAll(type);
		 };

         serv.setFavorites = function(favorites){
             serv.favorites = favorites;
         };

         serv.getFavorites = function(){
             return serv.favorites;
         };

	    
	    return serv;
    }
]);