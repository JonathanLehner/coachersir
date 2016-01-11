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

            var current = 0;
            var previous = 1;

            $(window).scroll(function() {
                $scope.heightMap = undefined;

                if($scope.heightMap === undefined){
                    $scope.heightMap = (screen.height - screen.height * 0.25) + 'px';
                }

                var docCheckBox = $("checkBoxFiltersId");
                var offset = $(document).scrollTop();
                var offsetTop = document.getElementById("hrCheckBox").offsetTop;
                if(offset > offsetTop){
                    $scope.top = offset-offsetTop - 10;
                }else{
                    $scope.top = 0;
                }

                previous = current;
                current = offset;


                $rootScope.$digest();
            });

            $scope.search =  true;
            $scope.ageRange = ["17-25","26-30","31-40","41-60","61+"];
            $scope.locations = [{"name":"Tel-Aviv",
                                "cities":{
                                    name:"Ramat-Gan",
                                    name:"Herzelia",
                                    name:"Holon",
                                    name:"Ramat-Gan",
                                    name:"Herzelia",
                                    name:"Holon",
                                    name:"Ramat-Gan",
                                    name:"Herzelia",
                                    name:"Holon",
                                    name:"Ramat-Gan",
                                    name:"Herzelia",
                                    name:"Holon",
                                    name:"Ramat-Gan",
                                    name:"Herzelia",
                                    name:"Holon",
                                    name:"Ramat-Gan",
                                    name:"Herzelia",
                                    name:"Holon",
                                    name:"Netanya"
                                }}];
            $scope.degress=["A","B","C","D","B","C","D","B","C","D","B","C","D","B","C","D","B","C","D","B","C","D"];
        }
    };
}]);
