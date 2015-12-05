angular.module('myApp.controllers.main')
    .controller('userCtrl',['$scope','$state','$translate','$timeout','userService','staticDataService','$stateParams',function($scope,$state,$translate,$timeout,userService,staticDataService,$stateParams){

        var id = $stateParams.id;

        var init = function(){
            userService.getById(id).
                then(function(data){
                    $scope.coach = data;
            })
        };

        init();

    }]);
