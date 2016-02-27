angular.module('myApp.controllers')
    .controller('userDetailsCtrl',['$scope','$rootScope','$translate','userService','facebookService','loadingSpinnerService','loginService','staticDataService','imageService',
                           function($scope , $rootScope , $translate , userService , facebookService , loadingSpinnerService , loginService , staticDataService,imageService){

        $scope.editMode = false;
        $scope.displayMessage="";
		$scope.displayMessageError=false;
		$scope.city = undefined;

        $scope.destroyAllParam();

        $scope.toggleEditMode = function(){
        	$scope.editMode= !$scope.editMode;
        	
        	$scope.displayMessage="";
        	
        	// we are editing
        	if($scope.editMode === true){
        		$scope.updatedUser = angular.copy($scope.user);
                if($scope.updatedUser.gender === undefined){
                	$scope.updatedUser.gender = true;
                }
                if($scope.user.birth_date){
                	$scope.updatedUser.birth_date = new Date($scope.user.birth_date);
                }else{
                	$scope.updatedUser.birth_date = new Date();
                }
        	}else{// we are viewing
        		
        	}
        };
        
        // for facebook comments and share
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
        
        var verifyUpdateInput = function(){
        	var inputError = null;
        	
        	if($scope.updatedUser.first_name === undefined || $scope.updatedUser.first_name === ""){
        		inputError = $translate.instant("User.Details.First_Name");
        	}else if($scope.updatedUser.last_name === undefined || $scope.updatedUser.last_name === ""){
        		inputError = $translate.instant("User.Details.Last_Name");
        	}else if($scope.updatedUser.location == undefined || $scope.updatedUser.location === ""){
        		inputError = $translate.instant("User.Details.Trained_Location");
        	}else if($scope.updatedUser.email === undefined || $scope.updatedUser.email === ""){
        		inputError = $translate.instant("User.Details.Email");
        	}else if($scope.updatedUser.birth_date == undefined || $scope.updatedUser.birth_date === ""){
        		inputError = $translate.instant("User.Details.Birth_Day");
        	}
        	
        	if(inputError){
        		inputError = inputError + $translate.instant("Error.Not_Empty");
        	}
        	
        	return inputError;
        };
        
        facebookService.initFB();
        
        $scope.saveButtonClicked = function(){
        	// verify myPage is viewed
        	if($scope.myPageViewed === true){
	        	var verifyInputError = verifyUpdateInput();
	        	if(verifyInputError){
	        		$scope.displayMessage=verifyInputError;
	        		$scope.displayMessageError=true;
	        	}
	        	else{
		            loadingSpinnerService.showProgress("user-loading");

                    var update = function(){
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

                            $scope.displayMessage = $translate.instant("User.Details.Updated_Successfully");
                            $scope.displayMessageError=false;
                            loadingSpinnerService.hideProgress("user-loading");
                            $scope.editMode = false;
                        },function(error){
                            console.log('user updated error' + error);
                            loadingSpinnerService.hideProgress("user-loading");
                            $scope.displayMessage = $translate.instant("User.Details.Not_Updated") + error;
                            $scope.displayMessageError=true;
                        });
                    };


                    if(dropzone.files[0]) {
                        imageService.addMainImg().then(function (data) {
                            $scope.updatedUser.main_img = data;
                            return true;
                        }).then(function(){
                            update();
                        });
                    }else{
                        update();
                    }
	        	


	        	}
        	}
        };
    }]);