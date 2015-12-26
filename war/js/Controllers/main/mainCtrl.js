angular.module('myApp.controllers')
    .controller('mainCtrl',['$scope','$state','loginService',function($scope,$state,loginService){
        
    	'use strict';
    	
    	$scope.$watch(loginService.isLoggedIn, function (isLoggedIn) {
    	    $scope.isLoggedIn = isLoggedIn;
    	    $scope.currentUser = loginService.currentUser();
    	});
    	
        $scope.isHome = {};
        $scope.isHome.flag = true;

        $scope.signIn = function(){
            loginService.signIn();
        };
        
        $scope.myPage = function(){
        	console.log('go to my_page');
        };
        
        $scope.logout = function(){
        	loginService.logout();
        };
    }]);

