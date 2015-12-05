angular.module('myApp.controllers')
    .controller('addVideoCtrl',['$scope','videoService',function($scope, videoService){

		var filename;
    	// Have the server perform an API call to create the video.
    	// This can not be done beforehand, because it depends on whether
    	// resumable uploads are supported.
    	var data = {};
    	
    	$scope.isUploading = false;
    	
    	if(BotrUpload.resumeSupported()) {
    		data['resumable'] = 'resumable';
    	}
    	
		$.get("http://localhost:8080/create.php", data, function(data) {
			
			$scope.data = data;
			
			//Attach a BotrUpload instance to the form.
			var uploadBotr = new BotrUpload(data.link, data.session_id
				/*,{
					"url": "http://localhost:8080/show.php",// todo: change to my redirect
					params: {
						"video_key": data.media.key//,
					}
				}*/
			);

			uploadBotr.useForm($("#uploadFile").get(0));
			$("#addVideoDiv").append(uploadBotr.getIframe());
			uploadBotr.pollInterval = 1000;
	
			// 	Create a pause button if resume is available
			/*var pauseButton;
			if(BotrUpload.resumeSupported()) {
				pauseButton = $('<button disabled>').text('Pause');
				pauseButton.toggle(function() {
					pauseButton.text('Resume');
					uploadBotr.pause();
					return false;
				},
				function() {	
					pauseButton.text('Pause');
					uploadBotr.start();
					return false;
				});
				$('#uploadButton').after(pauseButton);
			}*/
	
			//When the upload starts, we hide the input, show the progress and disable the button.
			uploadBotr.onStart = function() {
				
				$scope.isUploading = true;
				
				filename = $("#uploadFile").val().split(/[\/\\]/).pop();
				/*$("#uploadFile").css('display','none');
				$("#uploadBar").css('display','block');
				$("#uploadButton").attr('disabled','disabled');
				if(pauseButton) {
					pauseButton.removeAttr('disabled');
				}*/
			};
	
			//During upload, we update both the progress div and the text below it.
			uploadBotr.onProgress = function(bytes, total) {
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
			    
			    if(redirect) {
			      this._log("Redirecting to " + redirect + ".");
			      document.location.href = redirect;
			    }
		    };
		}, 'json');

    }]);