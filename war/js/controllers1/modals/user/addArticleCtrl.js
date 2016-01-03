angular.module('myApp.controllers')
    .controller('addArticleCtrl',['$scope','articleService',function($scope, articleService){

    	var user = $scope.$parent.user;
    	
		CKEDITOR.replace( 'articleEditor', {
			language: 'he',
			uiColor: '#9AB8F3'
		});
		
		CKEDITOR.instances.articleEditor.setData('הכנס תוכן כאן.');
		
		$scope.saveButtonClicked = function() {

			var content = CKEDITOR.instances.articleEditor.getData();
			
			
			
			alert(content);
		};
		
		$scope.deleteButtonClicked = function(article) {
			articleService.remove(article.id)
		};

    }]);