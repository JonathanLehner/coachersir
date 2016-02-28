angular.module('myApp.directives').directive('removeContent', function() {
    return {
        restrict: 'E',
        templateUrl:"/app/modals/user/content/removeContent.html",
        scope: {
            contentType: '@content'
        },
        link: function($scope) {

        }
    };
});
