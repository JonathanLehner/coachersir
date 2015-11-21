/**
 * Created by itay on 9/15/2015.
 */
angular.module('myApp.controllers.main')
    .controller('signInCtrl',['$scope','$modalInstance','$translate','$timeout','staticDataService','loginService',function($scope,$modalInstance,$translate,$timeout,staticDataService,loginService){

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

        $scope.close = function(){
            $modalInstance.dismiss();
        };

        $scope.close = function(){
            $modalInstance.dismiss();
        };

        $scope.signUp = function(type){
            $timeout(function(){
                $modalInstance.close()},
                1000);
            loginService.signUp(type);

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
