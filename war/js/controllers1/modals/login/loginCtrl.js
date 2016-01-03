angular.module('myApp.controllers.main')
    .controller('loginCtrl',['$scope','$modalInstance','$translate','$timeout','staticDataService','loginService',
                     function($scope , $modalInstance , $translate , $timeout , staticDataService , loginService){

    	$scope.$watch(loginService.isLoggedIn, function (isLoggedIn) {
    	    $scope.isLoggedIn = isLoggedIn;
    	    $scope.currentUser = loginService.currentUser();
    	});

        var init = function(){
            $scope.currentUser = {
        		email: undefined,
                password: undefined,
                first_name:undefined,
                last_name:undefined,
                gender:undefined,
                birth_date:undefined,
                objectives:undefined,
                degrees:undefined
            };

            $scope.inputIsEmpty = false;
            $scope.errorSignIn = false;
        };

        $scope.close = function(){
            $modalInstance.dismiss();
        };

        $scope.signUp = function(type){
            loginService.signUp(type);
        };

        $scope.userLogin = function(){
            if($scope.user.password !== "" && $scope.user.password !== undefined && 
               $scope.user.email !== "" && $scope.user.email !== undefined){
                  loginService.login($scope.user, 'local').then(
            		  function (data){
                          $scope.userObject = data.data;

                          if($scope.userObject !== ''){
                              $scope.close();
                              $scope.errorSignIn = false;
                          }else{
                              $scope.errorSignIn = true;
                          }
                      },
                      function (error) {
                          console.log("Something wrong with the login")
                      }
                  );
            }else{
                $scope.inputIsEmpty = true;
            }
        };
        
        $scope.facebookLogin = function(){
        	loginService.login({},'facebook');
        };
        
        $scope.googleLogin = function () {
        	loginService.login({},'google');
        };
        
        init();
    }]);
