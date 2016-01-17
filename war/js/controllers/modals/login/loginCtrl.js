angular.module('myApp.controllers.main')
    .controller('loginCtrl',['$scope','$modalInstance','$translate','$timeout','staticDataService','loginService',
                     function($scope , $modalInstance , $translate , $timeout , staticDataService , loginService){

        var init = function(){
            $scope.inputIsEmpty = false;
            $scope.errorSignIn = false;
            $scope.displayMessage="";
    		$scope.displayMessageError=false;
            
            $scope.user={
            		email: undefined,
            		password: undefined
            };
        };

        $scope.signUp = function(type){
            loginService.signUp(type);
        };

        $scope.userLogin = function(){
            if($scope.user.password !== "" && 
        	   $scope.user.password !== undefined && 
               $scope.user.email !== "" && 
               $scope.user.email !== undefined){
                  loginService.login($scope.user, 'local').then(
            		  function(response){
            			  console.log('login successful ' + response);
            		  },function(error){
            			  console.log('login wrong ' + error);
            			  $scope.displayMessage = $translate.instant("Login.SignIn_Incorrect");
            			  $scope.displayMessageError=true;
            		  });
            }else{
                $scope.displayMessage = $translate.instant("Login.Fill_The_Inputs");
                $scope.displayMessageError=true;
            }
        };
        
        $scope.facebookLogin = function(){
        	loginService.login({},'facebook');
        };
        
        $scope.googleLogin = function () {
        	loginService.login({},'google');
        };
        
        init();
    }]);
