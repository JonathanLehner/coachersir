/**
 * Created by itay on 12/24/2015.
 */
angular.module('myApp.directives').directive('checkBoxFilters',['$rootScope', function($rootScope) {
    return {
        restrict: 'E',
        templateUrl:"/app/main/search/checkBoxFilters.html",
        scope: {
        },
        link: function($scope) {


            $scope.search =  true;
            $scope.ageRange = ["17-25","26-30","31-40","41-60","61+"];

            $scope.degress=["A","B","C","D","B","C","D","B","C","D","B","C","D","B","C","D","B","C","D","B","C","D"];
        }
    };
}]);
