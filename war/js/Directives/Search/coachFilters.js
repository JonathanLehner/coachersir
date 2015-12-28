/**
 * Created by itay on 12/24/2015.
 */
angular.module('myApp.directives').directive('coachFilters', function() {
    return {
        restrict: 'E',
        templateUrl:"/app/main/search/checkBoxFilters.html",
        scope: {
            age1: '&'
        },
        link: function($scope) {

            $scope.test = function (age) {
                $scope.age1({age: age.range});
                console.log(age.range);
            };
        }

    };
});
