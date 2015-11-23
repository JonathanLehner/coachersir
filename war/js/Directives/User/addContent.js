/**
 * Created by itay on 11/23/2015.
 */
/* Created by itay on 8/28/2015.
*/
angular.module('myApp.directives').directive('addContent', function() {
    return {
        restrict: 'E',
        templateUrl:"/app/modals/user/content/addContent.html",
        scope: {
            url: '@url'
        },
        link: function($scope) {
            $scope.isClicked = false;

            $scope.addContentUrl = "app/modals/user/content/add"+$scope.url+".html";

            $scope.show = function(){
                $scope.isClicked = true;
            };

            $scope.hide = function(){
                $scope.isClicked = false;
            }
        }
    };
})
