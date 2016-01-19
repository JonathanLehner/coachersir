angular.module('myApp.controllers.main')
    .controller('loginCtrl',['$scope','$modalInstance','$translate','$timeout','staticDataService','loginService','userService',
                     function($scope , $modalInstance , $translate , $timeout , staticDataService , loginService , userService){

        var init = function(){
            $scope.forgotPassword = false;
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
        
        $scope.toggleForgotPassword = function(){
        	$scope.forgotPassword = !$scope.forgotPassword;
        	
        	if($scope.forgotPassword === true){
        		$scope.displayMessage = $translate.instant("Login.Insert_Email_And_Press") + $translate.instant("Login.Reset_Password");
        		$scope.displayMessageError=false;
        	}
        };
        
        $scope.resetPassword = function(){
        	if($scope.user.email !== "" && 
    		   $scope.user.email !== undefined){
        		userService.resetPassword($scope.user.email).then(function(response){
        			$scope.displayMessage = $translate.instant("Login.New_Password_Sent");
            		$scope.displayMessageError=false;
            	},function(error){
            		$scope.displayMessage= $translate.instant("Login.Email_Not_Found") + ' ' + error.data;
            		$scope.displayMessageError=true;
            	});
    		}
    		else{
    			//$scope.displayMessage="fill email";
    			$scope.displayMessageError=true;
    		}
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
