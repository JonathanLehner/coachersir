angular.module('myApp.controllers')
    .controller('userVideosCtrl',['$scope','videoService',function($scope, videoService){

    	$scope.videos = undefined;
        
    	var user = $scope.$parent.user;
    	
        videoService.getByUser(user.id).then(function(data){
            $scope.videos = data.items;
		});
    	
    }]);