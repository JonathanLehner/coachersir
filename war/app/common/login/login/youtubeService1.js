angular.module('myApp.services')
    .service('youtubeService',['$resource','$q',
                       function($resource , $q){
        'use strict';

        var resolve = function(errorVal, returnVal, deferred) {
			if (errorVal) {
			  deferred.reject(errorVal);
			} else {
			  deferred.resolve(returnVal);
			}
        };
        
        var serv = {};

        serv.getVideosPerPlaylist = function(playlistId){
        	
        	var returnVal=[];
        	
        	var requestOptions = {
        			    playlistId: 'PLUFT4RdjwwjGs6aJgilUbQ0qfzc0Zg4GV',
        			    part: 'snippet'
        	};
        	
        	var request = gapi.client.youtube.playlistItems.list(requestOptions);
        	request.execute(function(response) {
				var playlistItems = response.result.items;
				if (playlistItems) {
					angular.forEach(playlistItems, function(item , index){
						returnVal.push(
								{"src": item.snippet.thumbnails.default.url,
								 "video": {
									 "content": ,
									 "headline": ,
									 "desscription": 
								 }
								});
					});
				} else {
				  
				}
        	});
        };
        
        return serv;
    }]);