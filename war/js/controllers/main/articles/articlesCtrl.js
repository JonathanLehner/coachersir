angular.module('myApp.controllers.main')
    .controller('articlesCtrl',['$scope', 'articleService','loadingSpinnerService','$state',function($scope, articleService,loadingSpinnerService,$state){
    	
    	$scope.articles = {};
        $scope.articles1 = [];
        $scope.articles2 = [];
        $scope.articles3 = [];

        var init = function(){
            getArticles();
        };

        $scope.toCoach = function(userId){
            $state.go("details",
            		{id:userId,currentState:'main.articles'});
        };
        
        var loadArticlesOnPage = function(data){
        	setTimeout(function(){
                var a = 0;
                data.map(function(article){
                    article.shortContent = article.content.slice(0, 350);
                    if ( article.content.length > 50) {
                        article.flag = true;
                        article.shortContent += "...";
                    } else {
                        article.flag = false;
                    }
                    if(a%3 === 0) {
                        $scope.articles1.push(article);
                    }else if (a%3 === 1){
                        $scope.articles2.push(article);
                    }else{
                        $scope.articles3.push(article);
                    }
                    a++;
                });
        	},1000);
        };

        var getArticles = function() {
    		
        	var articlesData = articleService.getArticlesData(); 
        	// if service didn't load articles already
            if(!articlesData){
                loadingSpinnerService.showProgress();
                articleService.getAll().then(function(data) {
                	loadArticlesOnPage(data);
                	articleService.setArticlesData(data);
                    loadingSpinnerService.hideProgress();
                }, function(error){
                	console.log('error getting articles ' + error);
                    loadingSpinnerService.hideProgress();
                });
            }else{
            	loadArticlesOnPage(articlesData);
            }
        };

        init();
}]);