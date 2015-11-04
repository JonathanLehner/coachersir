/**
 * Created by itay on 9/15/2015.
 */
angular.module('myApp.controllers.main')
    .controller('signUpCtrl',['$scope','$modalInstance','$translate','$timeout','commonService','loginService',function($scope,$modalInstance,$translate,$timeout,commonService,loginService){
        
    	$scope.signIn = true;
        $scope.isTrainer=false;
        $scope.isCoach = false;
        $scope.days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
        $scope.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December" ];
        $scope.years = [];
        $scope.items;

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

        $scope.signInTraining =  function(){
            $scope.signIn = false;
            $scope.isTrainer = true;
            $scope.items = $scope.objectives;

            init();
            $scope.user.type=2;
        };

        $scope.signInCoach =  function(){
            $scope.signIn = false;
            $scope.isCoach = true;
            $scope.items = $scope.degrees;

            init();
            $scope.user.type=1;
        };

        $scope.backPressed =  function(){
            $scope.signIn = true;
            $scope.isTrainer=false;
            $scope.isCoach = false;
            $scope.errorSignIn = false;

            init();
        };

        $scope.close = function(){
            $modalInstance.dismiss();
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
                commonService.getObjectives().then(
                    function (data) {
                        $scope.objectives = data.items;
                    },
                    function (error) {
                        console.log("Something wrong with the objectives")
                    }
                );
            }

            if ($scope.degrees !== null || $scope.degrees !== undefined) {
                commonService.getDegrees().then(
                    function (data) {
                        $scope.degrees = data.items;
                    },
                    function (error) {
                        console.log("Something wrong with the degrees")
                    }
                );
            }

            if ($scope.locations !== null || $scope.locations !== undefined) {
                commonService.getLocations().then(
                    function (data) {
                        $scope.locations = data;
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
                $scope.user.objectives = $scope.itemSelection;

                loginService.insertUser($scope.user);
            }
        };

        $scope.userSignIn = function(){

            if($scope.user.password !== "" && $scope.user.password !== undefined && $scope.user.email !== "" && $scope.user.email !== undefined){
                  loginService.UserSignIn($scope.user).then(
                      function (data) {
                          $scope.UserObject = data.data;

                          if($scope.UserObject !== ''){
                              $scope.close();
                              $scope.errorSignIn = false;
                          }else{
                              $scope.errorSignIn = true;
                          }
                      },
                      function (error) {
                          console.log("Something wrong with the login")
                      }
                  );
            }else{
                $scope.inputIsEmpty = true;
            }

        };

        init();


    }]);
