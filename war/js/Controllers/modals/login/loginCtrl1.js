angular.module('myApp.controllers.main')
    .controller('loginCtrl',['$scope','$modalInstance','$translate','$timeout','staticDataService','loginService','facebookService',
                     function($scope , $modalInstance , $translate , $timeout , staticDataService , loginService , facebookService){

        var init = function(){
            $scope.user = {
        		email: undefined,
                password: undefined,
                first_name:undefined,
                last_name:undefined,
                gender:undefined,
                birth_date:undefined,
                objectives:undefined
            };

            $scope.inputIsEmpty = false;
            $scope.errorSignIn = false;
        };

        $scope.close = function(){
            $modalInstance.dismiss();
        };

        $scope.signUp = function(type){
            /*$timeout(function(){
                $modalInstance.close()},
                1000);*/
            loginService.signUp(type);
        };

        $scope.userLogin = function(){
            if($scope.user.password !== "" && 
               $scope.user.password !== undefined && 
               $scope.user.email !== "" && 
               $scope.user.email !== undefined){
                  loginService.userLogin($scope.user).then(
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
        	
//        	var testAPI = function(){
//        	    console.log('Welcome!  Fetching your information.... ');
//        	    FB.api('/me', function(response) {
//        	      console.log('Successful login for: ' + response.name);
//        	      document.getElementById('status').innerHTML =
//        	        'Thanks for logging in, ' + response.name + '!';
//        	    });
//
//        	}
//        	
//        	// This is called with the results from from FB.getLoginStatus().
//        	var statusChangeCallback = function(response) {
//        	    console.log('statusChangeCallback');
//        	    console.log(response);
//        	    // The response object is returned with a status field that lets the
//        	    // app know the current login status of the person.
//        	    // Full docs on the response object can be found in the documentation
//        	    // for FB.getLoginStatus().
//        	    if (response.status === 'connected') {
//        	      // Logged into your app and Facebook.
//        	      testAPI();
//        	    } else {
//        	      // The person is not logged into Facebook, so we're not sure if
//        	      // they are logged into this app or not.
//        	      document.getElementById('status').innerHTML = 'Please log ' +
//        	        'into Facebook.';
//        	    }
//        	}        	
//   
           facebookService.getUser().then(function(response){
        	   $scope.user = response;
           },
           function(error){
        	   $scope.user="error during facebook login";
           });
        	
		   facebookService.getMyLastName().then(function(response) {
		       $scope.last_name = response.last_name;
		     }
		   );
        };
        
        $scope.googleLogin = function(){
        	
        };
        
        init();
    }]);
