angular.module('myApp.controllers')
    .controller('userImagesCtrl',['$scope','imageService',function($scope,imageService) {
    	
    	var user = $scope.$parent.user;
    	
//    	$scope.slides = [{image:"../photos/coachers/ADI/ADI3.jpg"},
//    	                 {image:"../photos/coachers/ADI/ADI2.jpg"},
//    	                 {image:"../photos/coachers/ADI/ADI2.jpg"},
//    	                 {image:"../photos/coachers/ADI/ADI2.jpg"},
//    	                 {image:"../photos/coachers/ADI/ADI2.jpg"}];

    	imageService.getByUser(user.id).then(function(data){
            $scope.slides = data.items;
		});
    	
        $scope.filename = '';

        $scope.uploadFile = function() {
            $scope.file = dropzone.files[0];
        };

        $scope.reset = function() {
            $scope.resetDropzone();
        };

    }]);

