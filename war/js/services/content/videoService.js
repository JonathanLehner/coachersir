angular.module('myApp.services')
    .factory('videoService',['$modal','$http','$resource','$httpParamSerializerJQLike','$q', 
                     function($modal , $http , $resource , $httpParamSerializerJQLike , $q) {
        
		"use strict";
		
		//var url_prefix = '_ah/api/contentEndpoint/v1';
		var url_prefix = 'api/contentEndpoint';

        var deferred;
        var scope;
		var serv={};

        serv.initVideo = function(data){

            if(BotrUpload.resumeSupported()) {
                data['resumable'] = 'resumable';
            }

            //Attach a BotrUpload instance to the form.
            var uploadBotr = new BotrUpload(data.link, data.session_id
                , {
                    //"url": "http://localhost:8080/show.php",// todo: change to my redirect
                    "url": window.location.href,
                    params: {
                        "video_key": data.media.key//,
                    }
                }
            );

            var filename;

            uploadBotr.useForm($("#uploadFile").get(0));
            $("#addVideoDiv").append(uploadBotr.getIframe());
            uploadBotr.pollInterval = 1000;

            //When the upload starts, we hide the input, show the progress and disable the button.
            uploadBotr.onStart = function() {


                filename = $("#uploadFile").val().split(/[\/\\]/).pop();
            };

            //During upload, we update both the progress div and the text below it.
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
                    "content": 'http://content.jwplatform.com/videos/' + data.media.key + '-zBiwxusV.mp4'
                };

                serv.insertToDB(video).then(function(data){
                        deferred.resolve(data);
                    }
                );

            };
        };

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
                    videoObj: function(){
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
	    
	    serv.insertToDB = function(video){
	    	var data = video;

            return $http({
                method: 'POST',
                url: url_prefix + '/insertVideo',
                headers: {'Content-Type': 'application/json'},
                data: data

            });
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

        serv.insert = function(data){
            var deferredFunct = $q.defer();
            document.getElementById("uploadButton").click();

            deferred = deferredFunct;
            scope = data;

            return deferredFunct.promise;
        };
        
	    return serv;
    }
]);