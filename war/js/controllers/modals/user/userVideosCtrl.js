angular.module('myApp.controllers')
    .controller('userVideosCtrl',['$scope','videoService','$stateParams','$translate','loadingSpinnerService',function($scope, videoService,$stateParams,$translate,loadingSpinnerService){

    	$scope.videos = {};
        $scope.readonly = false;
        
    	var user = $scope.$parent.user;

        $scope.id = $stateParams.id;

        var init = function(){
            getVideos();
        };

        $scope.initParam("add");
        $scope.initParam("edit");
        $scope.initParam("save");

        $scope.hoverLi = function (videoId){
            var doc = document.getElementById(videoId);

            doc.play();
            doc.removeAttribute("muted");

            doc.setAttribute("controls", "controls");

            document.getElementById("duration"+videoId).innerHTML = $translate.instant("User.Video.Time_Duration") +" "+ doc.duration;
        };

        $scope.outLi = function (videoId){
            var doc = document.getElementById(videoId);

            doc.pause();
            doc.setAttribute("muted","muted");
            doc.removeAttribute("controls");
        };

        var getVideos = function(){
            loadingSpinnerService.showProgress("user-videos");
            videoService.getByUser($scope.id).then(function(response){
                $scope.videos = response;
                loadingSpinnerService.hideProgress("user-videos");
            },function(error){
                loadingSpinnerService.hideProgress("user-videos");
            });
        };

        $scope.getData = function(){
            getVideos();
        };

        init();
    	
    }]);