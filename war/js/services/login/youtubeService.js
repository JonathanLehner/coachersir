angular.module('myApp.services')
    .service('youtubeService',['$resource','$q',function($resource,$q) {
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
        	var requestOptions = {
        			    playlistId: 'PLUFT4RdjwwjGs6aJgilUbQ0qfzc0Zg4GV',
        			    part: 'snippet'
        	};
        	
        	var request = gapi.client.youtube.playlistItems.list(requestOptions);
        	  request.execute(function(response) {

        	    var playlistItems = response.result.items;
        	    if (playlistItems) {
        	    	
        	    } else {
        	      $('#video-container').html('Sorry you have no uploaded videos');
        	    }
        	  });
        };
        
        return serv;
    }]);