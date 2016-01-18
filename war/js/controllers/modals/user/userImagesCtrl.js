angular.module('myApp.controllers')
    .controller('userImagesCtrl',['$scope','staticDataService','Upload','$stateParams','imageService','$http',function($scope,staticDataService,Upload,$stateParams,imageService,$http) {

    	var user = $scope.$parent.user;
    	
        $scope.id = $stateParams.id;

        $scope.partialDownloadLink = 'http://localhost:8080/download?filename=';
        $scope.filename = '';

        var frob = "72157662312866442-0b72a325b45e8177-136631469";

        $scope.uploadFile = function() {
            Upload.upload({
                url: 'http://localhost:90/UploadImg/phpflickr/phpFlickr-2.2.0/uploadFile.php',
                method: 'POST',
                file: dropzone.files[0],
                sendFieldsAs: 'form',
                fields: {
                    frob: frob
                }
            }).progress(function(env){
            }).success(function(data,status,header,config){
                console.log(data);
            }).error(function(data){
                console.log(data);
            })
        };


        $scope.reset = function() {
            $scope.resetDropzone();
        };

        var init = function(){
            getImages();
            
                console.log("Hi");
        };

        var getImages = function(){

            imageService.getById($scope.id).then(function(data){
                $scope.images = data;
            });
        };

        init();

    }]);

