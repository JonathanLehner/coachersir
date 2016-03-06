/**
 * Created by itay on 12/23/2015.
 */
angular.module('myApp.controllers.main')
    .controller('videoPlayerCtrl',['$scope','videoObj','$state','$modalInstance',function($scope, videoObj,$state,$modalInstance) {
        $scope.title = videoObj.headline;
        $scope.description = videoObj.description;

        $scope.youTube = videoObj.content.indexOf("youtube") > -1;
        $scope.videoRef1 = videoObj.content + '?autoplay=1&controls=1&showinfo=0&rel=0&loop=1"';

        $scope.toCoach = function(){
            $scope.closeModal();
            $state.go("details",{id:videoObj.user_id,currentState:'main.home'});
        }

        $scope.closeModal = function(){
            $modalInstance.dismiss();
        }
    }]);