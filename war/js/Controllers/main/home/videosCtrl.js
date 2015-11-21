angular.module('myApp.controllers.main')
    .controller('homeCtrl',['$scope',function($scope)
    {
        $scope.isHome.flag = true;

        $scope.allVideos = [];
    }



]);