/**
 * Created by itay on 9/15/2015.
 */
angular.module('myApp.controllers.main')
    .controller('userDetailsCtrl',['$scope','$translate','$timeout','userService',function($scope,$translate,$timeout,userService){

    init = function(){
            userService.openUserModal();
    }

    init();

}]);
