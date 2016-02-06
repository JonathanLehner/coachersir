angular.module('myApp.controllers')
    .controller('userDetailsCtrl',['$scope','$rootScope','userService','facebookService','loadingSpinnerService','loginService','staticDataService',
                           function($scope , $rootScope , userService , facebookService , loadingSpinnerService , loginService , staticDataService){

        $scope.editMode = false;
        $scope.displayMessage="";
		$scope.displayMessageError=false;
		
        $scope.toggleEditMode = function(){
        	$scope.editMode= !$scope.editMode;
        	
        	$scope.displayMessage="";
        	
        	// we are editing
        	if($scope.editMode === true){
        		$scope.updatedUser = jQuery.extend(true, {}, $scope.user);
                $scope.updatedUser.gender = true;
        	}else{// we are viewing
        		
        	}
        };
        
        // for facebook comments
        $scope.getLocation = function(){
            return document.location.href; 
        };
        
        $scope.allDegrees = staticDataService.allDegrees();
        $scope.allDegreesIds = staticDataService.allDegreesIds();
        
        $scope.degreeToggle = function(degreeId){
            if($scope.updatedUser.degrees === undefined){
            	$scope.updatedUser.degrees = [];
            }

            var idx = $scope.updatedUser.degrees.indexOf(degreeId);
            if (idx > -1) {
            	$scope.updatedUser.degrees.splice(idx, 1);
            }
            else{
            	$scope.updatedUser.degrees.push(degreeId);
            }
        };

        $scope.degreeExists = function(degreeId){
        	if($scope.updatedUser.degrees === undefined){
            	$scope.updatedUser.degrees = [];
            }
        	
        	return $scope.updatedUser.degrees.indexOf(degreeId) > -1;
        };

        
        var verifyInput = function(){
        	var inputError = null;
        	
        	return inputError;
        };
        
        facebookService.initFB();
        
        $scope.saveButtonClicked = function(){
        	// verify myPage is viewed
        	if($scope.myPageViewed === true){
	        	var verifyInputError = verifyInput();
	        	if(verifyInputError){
	        		$scope.displayMessage=verifyInputError;
	        		$scope.displayMessageError=true;
	        	}
	        	else{
		            loadingSpinnerService.showProgress("user-loading");
	        	
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
						$scope.displayMessageError=false;	
	                    loadingSpinnerService.hideProgress("user-loading");
	                    $scope.editMode = false;
	                },function(error){
	        			console.log('user updated error' + error);
	                    loadingSpinnerService.hideProgress("user-loading");
	                    $scope.displayMessage="user didnt update!";
	                    $scope.displayMessageError=true;
	        		});
	        	}
        	}
        };
    }]);