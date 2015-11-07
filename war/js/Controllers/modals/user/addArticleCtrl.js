angular.module('myApp.controllers')
    .controller('addArticleCtrl',['$scope','articleService',function($scope, articleService){

        var init = function(){
        	
        };
        
		CKEDITOR.replace( 'articleEditor', {
			language: 'he',
			uiColor: '#9AB8F3'
		});
		
		CKEDITOR.instances.articleEditor.setData('Ronny!');
		
		$scope.saveButtonClicked = function() {
			
			var data = CKEDITOR.instances.articleEditor.getData();
			
			alert(data);
		};


        init();

    }]);