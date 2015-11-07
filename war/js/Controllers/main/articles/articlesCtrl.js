angular.module('myApp.controllers.main')
    .controller('articlesCtrl',['$scope', 'articleService',function($scope, articleService){
    	
    	$scope.articles = undefined;
    	
    	var init = function(){
    		articleService.getAll().then(function(data){
                $scope.articles = data.items;
    		});
    	};
    	
    	init();
}]);