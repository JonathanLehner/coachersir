angular.module('myApp.directives').directive('displayMessage', function() {
    return {
        restrict: 'E',
        template: "<div>{{message}}</div>",
        scope: {
        	message: '@',
        	error: '@'
        },
        link: function(scope, element, attributes) {
        	if(scope.error === "true"){
        		element.css("color","red");
        	}else{
        		element.css("color","green");
        	}
        },
        controller: function ($scope) {
           
            $scope.getStyle = function () {
            	if($scope.error === true){
            		return {color:'red'};
            	}else{
            		return {color:'green'};
            	}
            };
        }
    };
});
