/**
 * Created by itay on 9/15/2015.
 */
angular.module('myApp.controllers.main')
    .controller('loginCtrl',['$scope','$modalInstance','$translate','loginService',function($scope,$modalInstance,$translate,loginService){
        $scope.signIn = true;
        $scope.isTrainer=false;
        $scope.isCoach = false;
        $scope.days = ["Day",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
        $scope.months = ["Month","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December" ];
        $scope.years = ["Year"];

        $scope.user = undefined;

        var init = function(){
            setYears();
        };


        var setYears = function(){
            var d = new Date();
            var n = d.getFullYear();

            for(var i=1940;i<n;i++) {
                $scope.years.push(i);
            }
        };

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

        $scope.createNewUser = function(){
            loginService.insertUser(this.user);
        };


        init();


    }]);
