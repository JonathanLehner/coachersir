angular.module('myApp.directives').directive('displayMessage', function() {
    return {
        restrict: 'E',
        template: "<div>{{message}}</div>",
        scope: {
        	message: '@',
        	error: '@'
        },
        link: function(scope, element, attributes) {
        	var adjustColor = function(error){
        		if(error === "true"){
            		element.css("color","red");
            	}else{
            		element.css("color","green");
            	}
        	};
        	
        	scope.$watch('error', function(newValue) {
                adjustColor(newValue);
            });   
        	
        	scope.$on('$destroy', function(){
        		adjustColor=undefined;
            });
        }
    };
});
