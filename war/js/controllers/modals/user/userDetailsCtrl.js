angular.module('myApp.controllers')
    .controller('userDetailsCtrl',['$scope','userService','loginService',function($scope,userService,loginService){

        $scope.editMode = false;

        $scope.toggleEditMode = function(){
        	$scope.editMode= !$scope.editMode;
        	
        	if($scope.editMode === true){
        		$scope.updatedUser = jQuery.extend(true, {}, $scope.user);
        	}else{
        		
        	}
        };
        
        $scope.saveButtonClicked = function(){
        	// verify myPage is viewed
        	if($scope.myPageViewed === true){
        		userService.update($scope.updatedUser).then(function(response){
        			console.log('user updated!' + response);
        			loginService.refreshCurrentUser(response.data);
        			$scope.editMode = false;
        		},
        		function(error){
        			console.log('user updated error' + error);
        		});
        	}
        };
       
    }]);