angular.module('myApp.controllers')
    .controller('userArticlesCtrl',['$scope','articleService',function($scope, articleService) {
    	
    	var user = $scope.$parent.user;
    	
    	$scope.articles = undefined;

		articleService.getByUser(user.id).then(function(data){
            $scope.articles = data.items;
		});

 }]);

