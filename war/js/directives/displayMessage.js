angular.module('myApp.directives').directive('displayMessage', function() {
    return {
        restrict: 'E',
        template: "<div>{{message}}</div>",
        scope: {
        	message: '@',
        	error: '@'
        },
        link: function($scope, element, attributes) {
        	if($scope.error === true){
        		element.css("background-color","red");
        	}else{
        		element.css("background-color","green");
        	}
        }
    };
});
