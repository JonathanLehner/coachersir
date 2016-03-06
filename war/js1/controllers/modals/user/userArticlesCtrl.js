angular.module('myApp.controllers')
    .controller('userArticlesCtrl',['$scope','articleService','$stateParams','loadingSpinnerService',
                            function($scope , articleService , $stateParams , loadingSpinnerService){
    	$scope.initParam("add");
        $scope.initParam("edit");
        $scope.initParam("save");

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
            	console.log('error getting user images: ' + error);
                loadingSpinnerService.hideProgress("user-article");
            };
        };

        init();
}]);

