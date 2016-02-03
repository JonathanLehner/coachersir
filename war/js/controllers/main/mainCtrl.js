angular.module('myApp.controllers')
    .controller('mainCtrl',['$scope','$state','loginService','facebookService','staticDataService', 
                    function($scope , $state , loginService , facebookService , staticDataService){

        $scope.coachers = {};

    	$scope.$watch(loginService.isLoggedIn, function (isLoggedIn) {
    	    $scope.isLoggedIn = isLoggedIn;
    	    $scope.currentUser = loginService.currentUser();

            if($scope.isLoggedIn === true){
                loginService.closeLogin();
            }
    	});

        $scope.signIn = function(){
            loginService.signIn();
        };
        
        $scope.myPage = function(){
        	$state.go('details',{ id: $scope.currentUser.id, currentState: $state.current.name},{ location: true,parent:$state.current.name, inherit: true, relative: $state.current.name, notify: true });
        };

        $scope.logout = function(){
        	loginService.logout();
        };
        facebookService.initFB();
        
    }]);