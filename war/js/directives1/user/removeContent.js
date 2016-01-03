/**
 * Created by itay on 11/23/2015.
 */
/* Created by itay on 8/28/2015.
*/
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
