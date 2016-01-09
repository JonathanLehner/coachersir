/**
 * Created by itay on 12/23/2015.
 */
angular.module('myApp.controllers.main')
    .controller('videoPlayerCtrl',['$scope','videoRef',function($scope, videoRef) {
        $scope.youTube = videoRef.indexOf("youtube") > -1;
        $scope.videoRef1 = videoRef + '?autoplay=1&controls=1&showinfo=0&rel=0&loop=1"';
    }]);