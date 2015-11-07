angular.module('myApp.controllers')
    .controller('userArticlesCtrl',['$scope','articleService',function($scope, articleService) {
    	
    	var user = undefined;
    	
    	$scope.articles = undefined;

    	var init = function(){
    		
    		user = $scope.$parent.user;
    		
    		articleService.getByUser(user.id).then(function(data){
                $scope.articles = data.items;
    		});
    	};
    	
    	init();

 }]);

