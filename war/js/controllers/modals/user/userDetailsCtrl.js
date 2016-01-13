angular.module('myApp.controllers')
    .controller('userDetailsCtrl',['$scope','$rootScope','userService','loginService',function($scope,$rootScope,userService,loginService){

        $scope.editMode = false;

        $scope.toggleEditMode = function(){
        	$scope.editMode= !$scope.editMode;
        	
        	if($scope.editMode === true){
        		$scope.updatedUser = jQuery.extend(true, {}, $scope.user);
                $scope.updatedUser.gender = true;
        	}else{
        		
        	}
        };
        
        $scope.saveButtonClicked = function(){
        	// verify myPage is viewed
        	if($scope.myPageViewed === true){
        		userService.update($scope.updatedUser).then(function(response){
        			console.log('user updated!' + response);
        			loginService.clearCurrentUser();
        			
        			loginService.setCurrentUser(response.data.id,
        					response.data.first_name,
        					response.data.last_name,
        					response.data.provider,
        					response.data.provider_id,
        					response.data.main_img);
        			$scope.editMode = false;
        		},
        		function(error){
        			console.log('user updated error' + error);
        		});
        	}
        };
       
    }]);