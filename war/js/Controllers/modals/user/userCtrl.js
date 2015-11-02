angular.module('myApp.controllers.main')
    .controller('userCtrl',['$scope','$translate','$timeout','userService','commonService',function($scope,$translate,$timeout,userService,commonService){

        $scope.user = undefined;

        var init = function(){
            userService.getUser(4873035534303232).then(function(data){
                 $scope.user = data;
            })
        };

        init();

    }]);
