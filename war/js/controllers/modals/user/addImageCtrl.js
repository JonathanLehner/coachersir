angular.module('myApp.controllers')
    .controller('addImageCtrl',['$scope','imageService','uploadTokenService',
                        function($scope , imageService , uploadTokenService){

    	var user = $scope.$parent.user;
    	
        uploadTokenService.getUploadToken('image').then(function(data){
        	
        },
        function(error){
        	
        });
        
        var ospry = new Ospry('pk-test-mcagfau5650hcymnbt0riz3b');
        
        $scope.uploadFile = function() {
        	if(dropzone.files[0]){
	        	ospry.up({
	        	    //form: $('#dropzone')[0],
	        		files: dropzone.files,
	        	    imageReady: function(err, metadata, i) {
	        	      if (err === null) {
	        	        console.log('Image uploaded to: ' + metadata.url);
	        	        var image={
        	        		"user_id": user.id,
        	        		"headline": $scope.headline,
        	        		"description": $scope.description,
        	        		"content": metadata.url
	        	        };
	        	        return imageService.insert(image);
	        	      }
	        	    }
	        	});
        	}
        }
    	
    }]);