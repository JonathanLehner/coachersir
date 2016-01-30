angular.module('myApp.directives').directive('addContent',['articleService','$timeout', function(articleService,$timeout) {
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

                if($scope.url === "Article"){
                    service = articleService;
                    setTimeout(function(){
                    CKEDITOR.replace( 'articleEditor', {
                        language: 'he',
                        uiColor: '#9AB8F3'
                    });

                    CKEDITOR.instances.articleEditor.setData('הכנס תוכן כאן.');

                    },400);
                }
            };

            $scope.saveButtonClicked = function(){
                service.insert($scope).success(function(data){
                    $scope.isClicked = false;
                    $timeout(function(){
                        $scope.$parent.getData();
                    },200);
                }).error(function(){
                    console.log("no content");
                });
            };

            $scope.hide = function(){
                $scope.isClicked = false;
            }
        }
    };
}])
