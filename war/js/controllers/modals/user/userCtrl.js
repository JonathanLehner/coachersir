angular.module('myApp.controllers.main')
    .controller('userCtrl',['$scope','$state','$translate','$timeout','$stateParams','userService','staticDataService','loginService',function($scope,$state,$translate,$timeout,$stateParams,userService,staticDataService,loginService){


    	var setMyPage = function(){
    		if($scope.user){
	    		if($scope.currentUser.id === $scope.user.id){
	    	    	$scope.myPageViewed = true;
	    	    }else{
	    	    	$scope.myPageViewed = false;
	    	    }
    		}
    	}
    	
    	$scope.$watch(loginService.isLoggedIn, function (isLoggedIn) {
    	    $scope.isLoggedIn = isLoggedIn;
    	    $scope.currentUser = loginService.currentUser();
    	    
    	    setMyPage();
    	});
        
    	var id = $stateParams.id;
  
        var init = function(){
            userService.getById(id).then(function(data){
                    $scope.user = data;
                    setMyPage();
            },function(error){
            	console.log('error querying for user');
            });
            
            staticDataService.getAllDegrees().then(function(data){
                    $scope.degrees = data;
            },function(error){
            	console.log('error querying for all degrees');
            });
        };

        init();

    }]);
