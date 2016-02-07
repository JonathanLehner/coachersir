angular.module('myApp.directives').directive('addContent',['articleService','imageService','videoService','uploadTokenService','$timeout','loadingSpinnerService', function(articleService,imageService,videoService,uploadTokenService,$timeout,loadingSpinnerService) {
    return {
        restrict: 'E',
        templateUrl:"/app/modals/user/content/addContent.html",
        scope: {
            url: '@url',
            user: '=',
            data: '&'
        },
        link: function($scope) {
            $scope.isClicked = false;
            $scope.content = {};
            $scope.isUploading = false;
            var service;

            $scope.$on('saveContent', function(e) {
                $scope.$parent.saveContent = $scope.saveButtonClicked();
            });

            $scope.addContentUrl = "app/modals/user/content/add"+$scope.url+".html";


            var show = function(){

                if($scope.url === "Image") {
                    service = imageService;

                }else if($scope.url === "Video"){
                    service = videoService;

                    uploadTokenService.getUploadToken('video').then(function(data) {
                        console.log('video upload token ' + data);

                        videoService.initVideo(data);
                    });


                }else if($scope.url === "Article"){
                    service = articleService;
                    setTimeout(function(){
                    service.init();

                    },400);
                }
            };

            show();

            $scope.saveButtonClicked = function(){
                $scope.isUploading = true;
                service.insert($scope).then(function(data){
                    $scope.isClicked = false;
                        $timeout(function(){
                        $scope.data();
                    },200);
                }),function(data){
                    console.log("no content" + data);
                };
            };

            $scope.hide = function(){
                $scope.isClicked = false;
            }
        }
    };
}]);
