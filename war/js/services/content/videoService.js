angular.module('myApp.services')
    .factory('videoService',['$modal','$http','$resource','$q','contentService',
                     function($modal , $http , $resource , $q , contentService){
        
		"use strict";
		
		var url_prefix = 'api/contentEndpoint';

        var deferred;
        var scope;
		var serv={};
		var type='video';
		serv.videos = undefined;
		var uploadToken;

        serv.initVideoToken = function(data){
            
        	uploadToken = data;
        	
        	if(data.provider === 'jwplayer'){
	        	if(BotrUpload.resumeSupported()) {
	                data['resumable'] = 'resumable';
	            }
	
	            //Attach a BotrUpload instance to the form.
	            var uploadBotr = new BotrUpload(data.token.link, data.token.session_id
	                ,{"url": window.location.href,
	                  "params":{
	                	  "video_key": data.token.media.key
	                   }
	                }
	            );
	
	            var filename;
	
	            uploadBotr.useForm($("#uploadFile").get(0));
	            $("#addVideoDiv").append(uploadBotr.getIframe());
	            uploadBotr.pollInterval = 1000;
	
	            uploadBotr.onStart = function() {
	                filename = $("#uploadFile").val().split(/[\/\\]/).pop();
	            };
	
	            uploadBotr.onProgress = function(bytes, total) {
	                //todo: find out why not coming here?!
	                //Round to one decimal
	                var pct = Math.floor(bytes * 1000 / total) / 10;
	                $("#uploadProgress").animate({'width': pct + '%'}, 400);
	                $("#uploadText").html('Uploading ' + filename + ' (' + pct + '%) ...');
	            };
	
	            uploadBotr.onError = function(msg) {
	                this._log(msg);
	
	                deferred.resolve();
	            };
	
	            uploadBotr.onCompleted = function(size, redirect) {
	                this._log("Finished uploading " + size + " bytes.");
	
	                var video={
	                    "user_id": scope.user.id,
	                    "headline": scope.headline,
	                    "description": scope.description,
	                    "tags":scope.tags,
	                    "content": 'http://content.jwplatform.com/videos/' + data.token.media.key + '-zBiwxusV.mp4'
	                };
	
	                contentService.insert(video,'video').then(function(response){
	                        deferred.resolve(response);
	                    }
	                );
	            };
        	}//end if provider===jwplayer
        	else{
        		alert('not supported upload provider');
        	}
        };
        
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
                    videoObj: function(){
                        return parameter;
                    }
                }
            });
        };
	    
        serv.insert = function(data){
            var deferredFunct = $q.defer();
            document.getElementById("uploadButton").click();

            deferred = deferredFunct;
            scope = data;

            return deferredFunct.promise;
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