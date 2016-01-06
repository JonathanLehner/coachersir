angular.module('myApp.controllers')
    .controller('userDetailsCtrl',['$scope','staticDataService',function($scope,staticDataService){

        $scope.editMode = false;

        $scope.toggleEditMode = function(){
        	$scope.editMode= !$scope.editMode;
        	
        	if($scope.editMode === true){
        		$scope.updatedUser = jQuery.extend(true, {}, $scope.user);
        	}else{
        		
        	}
        };
        
        $scope.saveButtonClicked = function(){
        	
        };
        
	    staticDataService.getDegrees().then(
    		function(data){
            	$scope.degrees = data;
        	},
	        function (error) {
	            console.log("Something wrong with the degrees")
	        }
	    );
    }]);