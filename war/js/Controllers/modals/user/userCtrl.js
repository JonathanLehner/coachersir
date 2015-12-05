angular.module('myApp.controllers.main')
    .controller('userCtrl',['$scope','$state','$translate','$timeout','userService','staticDataService','$stateParams',function($scope,$state,$translate,$timeout,userService,staticDataService,$stateParams){

        var id = $stateParams.id;
  
        userService.getById(5629499534213120).then(function(data){
             $scope.user = data;
        });

        var init = function(){
            userService.getById(id).
                then(function(data){
                    $scope.coach = data;
            })
        };

        init();

    }]);
