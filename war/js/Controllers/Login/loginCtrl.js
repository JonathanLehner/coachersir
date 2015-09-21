/**
 * Created by itay on 9/15/2015.
 */
angular.module('myApp.controllers')
    .controller('loginCtrl',['$scope','$modalInstance',function($scope,$modalInstance){
        $scope.signIn = true;
        $scope.isTrainer=false;
        $scope.isCoach = false;

        $scope.signInTrainer =  function(){
            $scope.signIn = false;
            $scope.isTrainer = true;
        };

        $scope.signInCoach =  function(){
            $scope.signIn = false;
            $scope.isCoach = true;
        };

        $scope.backPressed =  function(){
            $scope.signIn = true;
            $scope.isTrainer=false;
            $scope.isCoach = false;
        };

        $scope.close = function(){
            $modalInstance.dismiss();
        };
    }])