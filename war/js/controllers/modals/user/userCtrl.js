var angular;
angular.module('myApp.controllers.main')
    .controller('userCtrl',['$scope','$state','$modalInstance','$translate','$timeout','$stateParams','staticDataService','userService','loginService',
                    function($scope , $state , $modalInstance , $translate , $timeout , $stateParams , staticDataService , userService , loginService){

        $scope.close = function(){
            $modalInstance.close();
        };

        $scope.user = undefined;

        $scope.status = {};
        $scope.type = undefined;


        $scope.saveContentButton = function(){
            $scope.status.addClicked = false;
            $scope.$broadcast('saveContent');
        };

        $scope.initParam = function(parameter){
            $scope.status[parameter+'Clicked'] = false;
            $scope.status[parameter+'Enabled'] = true;
        };

        $scope.destroyAllParam = function(){
            $scope.status = {};
        };

        $scope.clicked =function(parameter){
            $scope.status[parameter+'Clicked'] = !$scope.status[parameter+'Clicked'];
        };

    	var setMyPage = function(){
    		if($scope.user){
	    		if($scope.currentUser && $scope.currentUser.id === $scope.user.id){
	    	    	$scope.myPageViewed = true;
	    	    }else{
	    	    	$scope.myPageViewed = false;
	    	    }
    		}
    	};
    	
    	$scope.$watch(loginService.isLoggedIn, function (isLoggedIn) {
    	    $scope.isLoggedIn = isLoggedIn;
    	    $scope.currentUser = loginService.currentUser();
    	    $scope.user =  $scope.currentUser;
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
        };

        init();

    }]);
