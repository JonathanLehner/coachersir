/**
 * Created by itay on 10/15/2015.
 */
angular.module('myApp.controllers')
    .controller('userImagesCtrl',['$scope','commonService',function($scope,commonService) {


        $scope.slides = [{image:"../photos/coachers/ADI/ADI3.jpg"},{image:"../photos/coachers/ADI/ADI2.jpg"},
            {image:"../photos/coachers/ADI/ADI2.jpg"},{image:"../photos/coachers/ADI/ADI2.jpg"},{image:"../photos/coachers/ADI/ADI2.jpg"}];


            $scope.partialDownloadLink = 'http://localhost:8080/download?filename=';
            $scope.filename = '';

            $scope.uploadFile = function() {
                $scope.file = dropzone.files[0];
            };

            $scope.reset = function() {
                $scope.resetDropzone();
            };

    }]);

