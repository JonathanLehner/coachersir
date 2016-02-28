angular.module('myApp.controllers')
    .controller('userArticlesCtrl',['$scope','articleService','$stateParams','loadingSpinnerService',function($scope, articleService,$stateParams,loadingSpinnerService) {

        $scope.id = $stateParams.id;
    	
    	$scope.articles = [];

        $scope.initParam("add");
        $scope.initParam("edit");
        $scope.initParam("save");

        var init = function(){
            $scope.getData();
        };

        $scope.getData = function(){
            loadingSpinnerService.showProgress("user-content");
            articleService.getByUser($scope.id).then(function(data){
                $scope.articles = data;

                loadingSpinnerService.hideProgress("user-content");

            }),function(error){
                loadingSpinnerService.hideProgress("user-content");
            };
        };

        init();

 }]);

