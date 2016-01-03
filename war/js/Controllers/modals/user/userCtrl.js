angular.module('myApp.controllers.main')
    .controller('userCtrl',['$scope','$state','$translate','$timeout','userService','staticDataService','$stateParams',function($scope,$state,$translate,$timeout,userService,staticDataService,$stateParams){

        var id = $stateParams.id;
  
        var init = function(){
            userService.getById(id).
                then(function(data){
                    $scope.user = data;
                    $scope.$broadcast('user', {data: '$scope.broadcast'});
            })
        };

        init();

    }]);
