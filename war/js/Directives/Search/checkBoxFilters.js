/**
 * Created by itay on 12/24/2015.
 */
angular.module('myApp.directives').directive('checkBoxFilters', function() {
    return {
        restrict: 'A',
        templateUrl:"/app/main/search/checkBoxFilters.html",
        scope: {
        },
        link: function($scope) {
            $scope.ageRange = ["17-25","26-30","31-40","41-60","61+"];
            $scope.locations = [{"name":"Tel-Aviv",
                                "cities":{
                                    name:"Ramat-Gan",
                                    name:"Herzelia",
                                    name:"Holon",
                                    name:"Netanya"
                                }}];
            $scope.degress=["A","B","C","D"];
        }
    };
});
