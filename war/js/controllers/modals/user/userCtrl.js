var angular;
angular.module('myApp.controllers.main')
    .controller('userCtrl',['$scope','$state','$modalInstance','$translate','$timeout','$stateParams','staticDataService','userService','contentService','loginService',
                    function($scope , $state , $modalInstance , $translate , $timeout , $stateParams , staticDataService , userService , contentService , loginService){

        $scope.close = function(){
            $modalInstance.close();
        };

        $scope.user = undefined;
        $scope.deletedContent = [];
        $scope.status = {};
        $scope.deleted = [];
        $scope.type = undefined;

        $scope.saveContentButton = function(){
            if($scope.status.addClicked === true){
                $scope.status.addClicked = false;
                $scope.$broadcast('saveContent');
            }

            if($scope.deletedContent.length > 0){
                
            	contentService.removeAll($scope.deletedContent);
                $scope.deleted.push.apply($scope.deleted,$scope.deletedContent);
            	$scope.deletedContent = [];
            }
        };

        $scope.alreadyDeleted = function(item){
            "use strict";
            if($scope.deleted.length === 0){
                return true;
            }
            return $scope.deleted.indexOf(item) === -1;
        };

        $scope.isDeleted = function(item) {
        	return !($scope.deletedContent.indexOf(item) > -1);
        };
                        
        $scope.deleteContent = function(contentID){
            $scope.deletedContent.push(contentID);
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
            $scope.deletedContent = [];
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
