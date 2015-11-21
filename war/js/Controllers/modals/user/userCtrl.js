angular.module('myApp.controllers.main')
    .controller('userCtrl',['$scope','$translate','$timeout','userService','staticDataService',function($scope,$translate,$timeout,userService,staticDataService){

        $scope.user = undefined;

        var init = function(){
            userService.getUser(5).then(function(data){
                 $scope.user = data;
            })
        };

        init();

    }]);
