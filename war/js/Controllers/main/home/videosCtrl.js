angular.module('myApp.controllers.main')
    .controller('homeCtrl',['$scope','videoService',function($scope, videoService)
    {
        $scope.isHome.flag = true;

        $scope.videos = undefined;
        
        videoService.getAll().then(function(data){
            $scope.videos = data.items;
		});
    }
]);