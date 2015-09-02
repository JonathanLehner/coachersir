/**
 * Created by itay on 8/29/2015.
 */
/**
 * Created by itay on 8/21/2015.
 */

angular.module('myApp.controllers')
    .controller('menuCtrl',['$scope','$state',function($scope,$state){
        'use strict';

        $scope.goCoach = function(){
            $state.go("main.coach");
            $scope.isHome = false;
        }

        $scope.goHome = function(){
            $state.go("main.home");
            $scope.isHome = true;
        }

        $scope.goArticle = function(){
            $scope.isHome = false;
            $state.go("main.articles");
        }

       /* $scope.goAbout = function(){
            $state.go("main.aboutUs");
            $scope.isHome = false;
        }*/

    }]);

