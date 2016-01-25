angular.module('myApp.controllers')
    .controller('userDetailsCtrl',['$scope','$rootScope','userService','loadingSpinnerService','loginService',function($scope,$rootScope,userService,loadingSpinnerService,loginService){

        $scope.editMode = false;
        $scope.degreeIds = {};
        
        $scope.displayMessage="";
		$scope.displayMessageError=false;
		
        $scope.toggleEditMode = function(){
        	$scope.editMode= !$scope.editMode;
        	
        	if($scope.editMode === true){
        		$scope.updatedUser = jQuery.extend(true, {}, $scope.user);
                $scope.updatedUser.gender = true;
        	}else{
        		
        	}
        };
        
        $scope.getLocation = function(){
            return document.location.href; 
        }       
        
        $scope.saveButtonClicked = function(){

            loadingSpinnerService.showProgress("user-loading");
        	// verify myPage is viewed
        	if($scope.myPageViewed === true){
        		userService.update($scope.updatedUser).then(function(response){

        			console.log('user updated!' + response);
					loginService.setCurrentUser(
						response.data.id,
    					response.data.first_name,
    					response.data.last_name,
    					response.data.provider,
    					response.data.provider_id,
    					response.data.main_img);

					$scope.user = response.data;
					$scope.$parent.user = response.data;

					$scope.displayMessage="user updated successfully!";
					$scope.displayMessageError=true;
					$scope.editMode = false;

                    loadingSpinnerService.hideProgress("user-loading");
                    $scope.editMode = false;
                },function(error){
        			console.log('user updated error' + error);
                    $scope.user = jQuery.extend(true, {}, $scope.updatedUser);
                    loadingSpinnerService.hideProgress("user-loading");
                    $scope.displayMessage="user didnt update!";
                    $scope.displayMessageError=true;
        		});
        	}
        };
    }]);