angular.module('myApp.controllers')
    .controller('addVideoCtrl',['$scope','videoService','uploadTokenService',function($scope,videoService,uploadTokenService){

		var filename;
    	
		var data = {};
    	
    	$scope.user = $scope.$parent.user;
    	
    	$scope.isUploading = false;
    	
    	if(BotrUpload.resumeSupported()) {
    		data['resumable'] = 'resumable';
    	}
    	
    	uploadTokenService.getUploadToken('video').then(function(data){
    		console.log('video upload token '+data);
    		$scope.data = data;
			
			//Attach a BotrUpload instance to the form.
			var uploadBotr = new BotrUpload(data.link, data.session_id
				,{
					//"url": "http://localhost:8080/show.php",// todo: change to my redirect
					"url": window.location.href,
					params: {
						"video_key": data.media.key//,
					}
				}
			);

			uploadBotr.useForm($("#uploadFile").get(0));
			$("#addVideoDiv").append(uploadBotr.getIframe());
			uploadBotr.pollInterval = 1000;
	
			//When the upload starts, we hide the input, show the progress and disable the button.
			uploadBotr.onStart = function() {
				
				$scope.isUploading = true;
				
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
			    $scope.isUploading = false;
			};
			
			uploadBotr.onCompleted = function(size, redirect) {
			    this._log("Finished uploading " + size + " bytes.");
			    $scope.isUploading = false;
			    
			    var video={
			    	"user_id": $scope.user.id,
			    	"headline": $scope.headline,
			    	"description": $scope.description,
			    	"content": 'http://content.jwplatform.com/videos/' + data.media.key + '-zBiwxusV.mp4' 
			    };
			    
			    videoService.insert(video);
			    
			    if(redirect) {
			      this._log("Redirecting to " + redirect + ".");
			      document.location.href = redirect;
			    }
		    };

    	},function(error){
    		console.log(error);
    	});
    	
    }]);