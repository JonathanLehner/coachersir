/**
 * Created by itay on 12/23/2015.
 */
angular.module('myApp.controllers.main')
    .controller('videoPlayerCtrl',['$scope','videoService','videoRef',function($scope, videoService,videoRef) {

        $scope.videoRef = videoRef;
    }]);