angular.module('myApp.controllers')
    .controller('userImagesCtrl',['$scope','staticDataService',function($scope,staticDataService) {
    	
    	var user = $scope.$parent.user;
    	
    	$scope.slides = [{image:"../photos/coachers/ADI/ADI3.jpg"},
    	                 {image:"../photos/coachers/ADI/ADI2.jpg"},
    	                 {image:"../photos/coachers/ADI/ADI2.jpg"},
    	                 {image:"../photos/coachers/ADI/ADI2.jpg"},
    	                 {image:"../photos/coachers/ADI/ADI2.jpg"}];

        $scope.partialDownloadLink = 'http://localhost:8080/download?filename=';
        $scope.filename = '';

        $scope.uploadFile = function() {
            $scope.file = dropzone.files[0];
        };

        $scope.reset = function() {
            $scope.resetDropzone();
        };

    }]);

