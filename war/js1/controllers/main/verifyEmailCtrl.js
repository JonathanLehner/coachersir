angular.module('myApp.controllers')
    .controller('verifyEmailCtrl',['$scope','$translate','$state','$stateParams','loadingSpinnerService','$timeout','userService','loginService', 
                           function($scope , $translate , $state , $stateParams , loadingSpinnerService , $timeout , userService , loginService){

    	$scope.displayMessage=$translate.instant('General.Wait_While_Verifying');
 		$scope.displayMessageError=false;
 		
 		var email = $stateParams.email;
 		var v = $stateParams.v;
 		var showServerError = function(){
 			$scope.displayMessage=$translate.instant('Error.Server_Error');
 	 		$scope.displayMessageError=true;
 		};
 		
 		var goToHome = function(){
 			$timeout(function() {
 				$state.go('main.home');
 		    }, 2000);
 		};
 		
 		if(email && v){
 			loadingSpinnerService.showProgress();
	 		
 			userService.verifyEmail(email, v).then(function(response){
 				loadingSpinnerService.hideProgress();
 				$scope.displayMessage=$translate.instant('General.Verify_Successfull');
 				if(response.data){
					loginService.setCurrentUser(response.data.id,
    						   response.data.first_name,
    						   response.data.last_name,
    						   response.data.provider,
    						   response.data.provider_id,
    						   response.data.main_img);
    			}
 				
 				goToHome();
 				
 			},function(error){
 				loadingSpinnerService.hideProgress();
 				showServerError();
 				goToHome();
 			});
	 		
 		}else{
 			showServerError();
 			goToHome();
 		}
}]);