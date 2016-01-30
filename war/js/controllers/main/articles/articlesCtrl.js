angular.module('myApp.controllers.main')
    .controller('articlesCtrl',['$scope', 'articleService','loadingSpinnerService','$state',function($scope, articleService,loadingSpinnerService,$state){
    	
    	$scope.articles = {};
        $scope.articles1 = [];
        $scope.articles2 = [];
        $scope.articles3 = [];

        var init = function(){
            getArticle();
        };

        $scope.toCoach = function(userId){
            $state.go("details",{id:userId,currentState:'main.articles'});
        };


        var getArticle = function() {
                loadingSpinnerService.showProgress();
                articleService.getAll().then(function (data) {
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
                        articleService.setArticlesData(data);

                        loadingSpinnerService.hideProgress();
                    },2000);
                })
        };

        init();
}]);