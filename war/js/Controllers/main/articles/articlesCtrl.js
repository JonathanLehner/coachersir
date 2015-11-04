angular.module('myApp.controllers')
    .controller('articlesCtrl',[$scope, articleService,function($scope, articleService){
    	
    	$scope.articles = articleService.getAll();
    	
    	var init = function(){
    		
    	}
    	
    	init();
}]);