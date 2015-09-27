/**
 * Created by itay on 8/29/2015.
 */
/**
 * Created by itay on 8/21/2015.
 */

angular.module('myApp.controllers')
    .controller('menuCtrl',['$scope','$state','loginService',function($scope,$state,loginService){
        'use strict';
        $scope.isHome = {}
        $scope.isHome.flag = true;

        $scope.signIn = function(){
            loginService.login();
        }

        $(document).ready(function() {
            $(".dropdown-toggle").dropdown();
        });


    }]);

