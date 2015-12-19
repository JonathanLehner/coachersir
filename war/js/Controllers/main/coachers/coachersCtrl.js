angular.module('myApp.controllers.main')
    .controller('coachersCtrl',['$scope','$state','$translate','userService',function($scope,$state,$translate,userService)
    {

        $scope.gender = "undefined";
        
        $scope.getGender = function( gender ){
            if(gender === 'F'){
                $scope.gender = $translate.instant("Coach.Gender.Female");
            }else{
                $scope.gender =   $translate.instant("Coach.Gender.Male");
            }
         };

        $scope.coacherClicked = function(coach){
            $state.go('details',{ id: coach.id});
        };

        $scope.isHome.flag = false;

        
        userService.getAll().then(function(data){
             $scope.coachers =  data;
        });
    }
]);