angular.module('myApp.controllers.main')
    .controller('userCtrl',['$scope','$translate','$stateParams','$timeout','userService','staticDataService',function($scope,$translate,$stateParams,$timeout,userService,staticDataService){

        $scope.user = undefined;
  
        userService.getById(5629499534213120).then(function(data){
             $scope.user = data;
        });

    }]);
