angular.module('myApp.controllers')
    .controller('mainCtrl',['$scope','$state','loginService',function($scope,$state,loginService){
        
    	'use strict';
    	
    	$scope.$watch(loginService.isLoggedIn, function (isLoggedIn) {
    	    $scope.isLoggedIn = isLoggedIn;
    	    $scope.currentUser = loginService.currentUser();

            if($scope.isLoggedIn === true){
                loginService.closeLogin();
            }
    	});
    	
        $scope.isHome = {};
        $scope.isHome.flag = true;

        $scope.signIn = function(){
            loginService.signIn();
        };
        
        $scope.myPage = function(){
            $state.go('details',{ id: $scope.currentUser.id});
        };
        
        $scope.logout = function(){
        	loginService.logout();
        };
    }]);

