angular.module('myApp.controllers.main')
    .controller('coachersCtrl',['$scope','$state','$translate','userService',function($scope,$state,$translate,userService)
    {
        $scope.gender = "undefined";

        userService.getCoachers().then(function(data){
        	$scope.coachers = data.items;
		});
        
        $scope.getGender = function( gender ){
            if(gender === 'F'){
                $scope.gender = $translate.instant("Coach.Gender.Female");
            }else{
                $scope.gender =   $translate.instant("Coach.Gender.Male");
            }
         };

        $scope.coacherClicked = function(){
            $state.go('details');
        };

        $scope.isHome.flag = false;

        var init = function(){
        };

        init();
    }
]);