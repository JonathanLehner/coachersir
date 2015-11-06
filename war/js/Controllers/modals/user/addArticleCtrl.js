angular.module('myApp.controllers')
    .controller('addArticleCtrl',['$scope',,function($scope){

        var init = function(){
        	
        };
        
		CKEDITOR.replace( 'articleEditor', {
			language: 'he',
			uiColor: '#9AB8F3'
		});
		
		CKEDITOR.instances.articleEditor.setData('Ronny!');
		
		var buttonClicked = function() {
			
			var data = CKEDITOR.instances.articleEditor.getData();
			
			alert(data);
		};


        init();

    }]);