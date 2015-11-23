angular.module('myApp.controllers.main')
    .controller('coachersCtrl',['$scope','$state','$translate',function($scope,$state,$translate)
    {
        $scope.gender = "undefined";

        $scope.getGender = function( gender ){
            if(gender === 'F'){
                $scope.gender = $translate.instant("Coach.Gender.Female");
            }else{
                $scope.gender =   $translate.instant("Coach.Gender.Male");
            }
         };

        $scope.coachersClicked = function(){
            $state.go('details');
        };

        $scope.isHome.flag = false;

        var init = function(){
        };

        init();
    }
]);