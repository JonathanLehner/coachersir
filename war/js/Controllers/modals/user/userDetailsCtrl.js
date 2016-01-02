angular.module('myApp.controllers')
    .controller('userDetailsCtrl',['$scope','staticDataService',function($scope,staticDataService){

    	$scope.user = $scope.$parent.user;
        $scope.editMode = false;

        $scope.toggleEditMode = function(){
        	$scope.editMode= !$scope.editMode;
        	
        	if($scope.editMode === true){
        		$scope.updatedUser = $scope.user;
        	}else{
        		
        	}
        }
        
        $scope.saveButtonClicked = function(){
        	
        }
        
	    staticDataService.getDegrees().then(
    		function(data){
            	$scope.degrees = data;
        	},
	        function (error) {
	            console.log("Something wrong with the degrees")
	        }
	    );
    }]);