/**
 * Created by itay on 9/15/2015.
 */
angular.module('myApp.controllers.main')
    .controller('signUpCtrl',['$scope','$modalInstance','$translate','$timeout','staticDataService','loginService','userService','type',function($scope,$modalInstance,$translate,$timeout,staticDataService,loginService,userService,type){
        
    	$scope.signIn = true;
        $scope.isCoach = (type === 1);
        $scope.days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
        $scope.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December" ];
        $scope.years = [];

        $scope.date = {day:undefined,
                        month:undefined,
                        year:undefined};

        $scope.passwordConfirm = undefined;

        // selected fruits
        $scope.itemSelection = [];
        $scope.day = undefined;
        $scope.month = undefined;
        $scope.year = undefined;

        var init = function(){
            $scope.user = {
        		email: undefined,
                password: undefined,
                first_name:undefined,
                last_name:undefined,
                gender:undefined,
                birth_date:undefined,
                type:undefined,
                objectives:undefined
            };

            $scope.inputIsEmpty = false;
            $scope.errorSignIn = false;
        };

        var setYears = function(){
            var d = new Date();
            var n = d.getFullYear();

            for(var i=1940;i<n;i++) {
                $scope.years.push(i);
            }
        };

        setYears();

        $scope.backPressed =  function(){
            $scope.signIn = true;
            $scope.isTrainer=false;
            $scope.isCoach = false;
            $scope.errorSignIn = false;

            init();

            loginService.signIn();
            $timeout(function(){
                $modalInstance.dismiss();
                },100);
        };

        // toggle selection for a given fruit by name
        $scope.togglePropertiesSelection = function toggleSelection(item) {
            var idx = $scope.itemSelection.indexOf(item);

            // is currently selected
            if (idx > -1) {
                $scope.itemSelection.splice(idx, 1);
            }

            // is newly selected
            else {
                $scope.itemSelection.push(item);
            }
        };

        $scope.setMonth = function(data){
            $scope.month = data;
        };

        $scope.setYear = function(data){
          $scope.year = data;
        };

        $scope.setDay = function(data){
           $scope.day = data;
        };

        var callAtTimeout =  function() {
            if ($scope.objectives !== null || $scope.objectives !== undefined) {
                staticDataService.getAllObjectives().then(
                    function (data) {
                        $scope.objectives = data;
                    },
                    function (error) {
                        console.log("Something wrong with the objectives")
                    }
                );
            }

            if ($scope.degrees !== null || $scope.degrees !== undefined) {
                staticDataService.getAllDegrees().then(
                    function (data) {
                        $scope.degrees = data;
                    },
                    function (error) {
                        console.log("Something wrong with the degrees")
                    }
                );
            }
        };

        $timeout( function(){ callAtTimeout(); }, 100);

        $scope.createNewUser = function(){
            if($scope.month !== undefined && $scope.year !== undefined && $scope.day !== undefined)
            {
                $scope.user.birth_date = new Date($scope.month + " " + $scope.day + ", " + $scope.year + " 01:00:00");
                $scope.user.degrees = $scope.itemSelection;

                if($scope.isCoach){
                    userService.insertCoach($scope.user);
                }else{
                    userService.insertTrained($scope.user);
                }
            }
        };

        init();
    }]);
