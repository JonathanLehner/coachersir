angular.module('myApp.controllers.main')
    .controller('homeCtrl',['$scope','videoService',function($scope, videoService)
    {
        $scope.isHome.flag = true;

        $scope.videos = undefined;
        
        var doSomethingAfterLoading = function(){
        	alert('wow');
        };
        
        $scope.init = function(){
        	alert();
        	var ROOT = 'http://localhost:8888/_ah/api/';
            gapi.client.load('contentEndpoint', 'v1', function() {
              doSomethingAfterLoading();
            }, ROOT);
        }
        
        videoService.getAll().then(function(data){
            $scope.videos = data.items;
		});
    }
]);