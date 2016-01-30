angular.module('myApp.controllers')
    .controller('addArticleCtrl',['$scope','articleService',function($scope, articleService){

    	$scope.user_id = $scope.id;
    	
		CKEDITOR.replace( 'articleEditor', {
			language: 'he',
			uiColor: '#9AB8F3'
		});
		
		CKEDITOR.instances.articleEditor.setData('הכנס תוכן כאן.');
		
		$scope.saveButtonClicked = function() {

			var articleContent = CKEDITOR.instances.articleEditor.getData();

            var content = {
                        content:articleContent,
                        user_id:$scope.user_id
                        };

            articleService.insert(content);
        };
		
		$scope.deleteButtonClicked = function(article) {
			articleService.remove(article.id)
		};

    }]);