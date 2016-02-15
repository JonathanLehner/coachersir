angular.module('myApp.controllers.main')
    .controller('signUpCtrl',['$scope','$modalInstance','$translate','$timeout','staticDataService','loginService','userService','type',
                      function($scope , $modalInstance , $translate , $timeout , staticDataService , loginService , userService , type){
        
    	$scope.signIn = true;
        $scope.isCoach = (type === 1);
        $scope.displayMessage="";
		$scope.displayMessageError=false;
        
        $scope.passwordConfirm = undefined;

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
            $scope.isCoach = false;
            $scope.errorSignIn = false;

            init();

            loginService.signIn();
            $timeout(function(){
                $modalInstance.dismiss();
            },100);
        };
/*
        $scope.getStyle = function () {
        	if($scope.displayMessageError === true){
        		return {'color':'red'};
        	}else{
        		return {'color':'green'};
        	}
        };
  */      
    	$scope.createNewUser = function(){
    		$scope.user.provider='local';
    		
        	if($scope.isCoach){
                userService.signUpCoach($scope.user).then(
                		function(response){
                			console.log('signUp succeeded! ' + response);
                			loginService.setCurrentUser(response.id,
                					response.first_name,
                					response.last_name,
                					response.provider,
                					response.provider_id,
                					response.main_img);
                			
                			$modalInstance.dismiss();
                		},
                		function(error){
                			console.log('signUp error ' + error);
                			if(error.status === 430)
                			{	
                				$scope.displayMessage=$translate.instant("Error.Email_Exists");
                			}
                			else{
                				$scope.displayMessage=$translate.instant("Error.Server_Error");
                			}
                			$scope.displayMessageError=true;
                		});
        	}else{
                userService.signUpTrained($scope.user).then(
                		signUpSuccess(response),
                		signUpError(error));
            }
        };

        $scope.close = function(){
            $modalInstance.close();
        };
        
        init();
    }]);
