angular.module('myApp.controllers')
    .controller('userArticlesCtrl',['$scope','articleService','$stateParams','loadingSpinnerService',function($scope, articleService,$stateParams,loadingSpinnerService) {

        $scope.id = $stateParams.id;
    	
    	$scope.articles = [];

        var init = function(){
            $scope.getData();
        };

        $scope.getData = function(){
            loadingSpinnerService.showProgress("user-article");
            articleService.getByUser($scope.id).then(function(data){
                $scope.articles = data;

                loadingSpinnerService.hideProgress("user-article");

            }),function(error){
                loadingSpinnerService.hideProgress("user-article");
            };
        };

        init();

 }]);

