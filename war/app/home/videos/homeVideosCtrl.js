/**
 * Created by itay on 3/1/2016.
 */
var angular;
angular.module('myApp.controllers')
    .controller('homeVideosCtrl',['$scope','homeVideoService','loadingSpinnerService',function($scope,homeVideoService,loadingSpinnerService){
        "use strict";
        var getAllVideos = function(){
            $scope.videos = homeVideoService.getFavorites();

            if(!$scope.videos || $scope.videos.size === 0) {

                loadingSpinnerService.showProgress("videos");
                homeVideoService.getAllFavorites().then(function (data){

                    $scope.videos = data.map(function (video) {
                        if(video.content !== undefined && video.content != null){
                            video.contentOffset = video.content + "#t=3";
                        }else{
                            video.contentOffset = undefined;
                        }

                        if(video.description !== null && video.description !== undefined){
                            video.shortDesc = video.description.slice(0, 15) + "...";
                            if (video.description.length > 15) {
                                video.flag = true;
                            } else {
                                video.flag = false;
                            }
                        }

                        return video;
                    });
                    homeVideoService.setFavorites($scope.videos);
                    loadingSpinnerService.hideProgress("videos");
                });
            }
        };

        $scope.playVideo = function (video){
            homeVideoService.playVideo(video);
        };

        $scope.playBackground = function (videoId){
            document.getElementById(videoId).play();
        };

        $scope.stopBackground = function(videoId){
            document.getElementById(videoId).pause();
        };

        getAllVideos();
    }
    ]);