/**
 * Created by itay on 9/15/2015.
 */
angular.module('myApp.controllers.main')
    .controller('signUpCtrl',['$scope','$modalInstance','$translate','$timeout','staticDataService','loginService','userService','type',function($scope,$modalInstance,$translate,$timeout,staticDataService,loginService,userService,type){
        
    	$scope.signIn = true;
        $scope.isCoach = (type === 1);

        $scope.passwordConfirm = undefined;

        // selected fruits
        $scope.itemSelection = [];

        var init = function(){
            $scope.user = {
        		email: undefined,
                password: undefined,
                first_name:undefined,
                last_name:undefined,
                gender:true,
                birth_date:undefined,
                type:undefined,
                objectives:undefined
            };

            $scope.inputIsEmpty = false;
            $scope.errorSignIn = false;
        };


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
           {
               if($scope.isCoach){
                    userService.insertCoach($scope.user);
                }else{
                    userService.insertTrained($scope.user);
                }
            }
        };

        $scope.close = function(){
            $modalInstance.close();
        };
        init();
    }]);
