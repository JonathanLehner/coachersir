angular.module('myApp.directives').directive('addContent',['articleService','imageService','videoService','uploadTokenService','$timeout', function(articleService,imageService,videoService,uploadTokenService,$timeout) {
    return {
        restrict: 'E',
        templateUrl:"/app/modals/user/content/addContent.html",
        scope: {
            url: '@url',
            user: '='
        },
        link: function($scope) {
            $scope.isClicked = false;
            $scope.content = {};
            var service;

            $scope.addContentUrl = "app/modals/user/content/add"+$scope.url+".html";


            $scope.show = function(){

                $scope.isClicked = true;

                if($scope.url === "Image") {
                    service = imageService;

                }else if($scope.url === "Video"){
                    service = videoService;

                }else if($scope.url === "Article"){
                    service = articleService;
                    setTimeout(function(){
                    service.init();

                    },400);
                }
            };

            $scope.saveButtonClicked = function(){
                service.insert($scope).then(function(data){
                    $scope.isClicked = false;
                    $timeout(function(){
                        $scope.$parent.getData();
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
