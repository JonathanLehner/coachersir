angular.module('myApp.controllers')
    .controller('userImagesCtrl',['$scope','staticDataService','$stateParams','imageService',function($scope,staticDataService,$stateParams,imageService) {

        $scope.id = $stateParams.id;

        $scope.partialDownloadLink = 'http://localhost:8080/download?filename=';
        $scope.filename = '';

        $scope.uploadFile = function() {
            $scope.file = dropzone.files[0];
        };

        $scope.reset = function() {
            $scope.resetDropzone();
        };

        var init = function(){
            imageService.getById($scope.id).then(
                function(data){
                    $scope.slides = data.items;
                }
            )
        };

        init();

    }]);

