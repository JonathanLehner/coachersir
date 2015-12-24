angular.module('myApp.services')
    .factory('loginService',['$modal','$http','$resource','$httpParamSerializerJQLike','facebookService','googleService', 
                     function ($modal,$http,$resource,$httpParamSerializerJQLike, facebookService, googleService) {
        
    	"use strict";

        var serv={};
		var url_prefix = 'api/userEndpoint';
		var currentUser;
		
        serv.signIn = function(parameter){
            var modalLogin = $modal.open({
                templateUrl:'/app/modals/login/login.html',
                keyboard: true,
                controller:'loginCtrl',
                backdrop:'static'
            });
        };

        serv.signUp = function(parameter){
            var modalLogin = $modal.open({
                templateUrl:'/app/modals/login/signUp.html',
                keyboard: true,
                controller:'signUpCtrl',
                backdrop:'static',
                resolve: {
                    type: function () {
                        return parameter;
                    }
                }
            });
        };

        serv.login = function(user, provider){
            
        	if(provider === 'local'){
    
	            $http({
	                method: 'POST',
	                url: url_prefix + '/login',
	                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	                data: $httpParamSerializerJQLike(user)
	            }).then(function(response) {
	            	currentUser = response;
	            }, function(error){
	            	console.log('local login error: ' + error);
	            	currentUser = undefined;
	            });
        	}else if(provider === 'facebook'){
        		facebookService.login().then(function(response){
        			currentUser = response;
        		}, function(error){
        			console.log('facebook login error: ' + error);
        			currentUser=undefined;
        		});
        	}else if(provider === 'google'){
        		googleService.login().then(function(response){
        			currentUser = response;
        		}, function(error){
        			console.log('google login error: ' + error);
        			currentUser=undefined;
        		});
        	}
        };
        
        serv.logout = function(){
        	if(this.isLoggedIn()){
				
        		if(this.currentUser().provider === 'local'){
					//local logout
        			currentUser=undefined;
				}else if(this.currentUser().provider === 'facebook'){
					facebookService.logout();
					currentUser = undefined;
	        	}else if(this.currentUser().provider === 'google'){
	        		googleService.logout();
	        		currentUser=undefined;
	        	}	
			}
        };
        
        serv.isLoggedIn = function(){
        	
        	if(currentUser){
//        		if(currentUser.provider === 'local'){
//        			
//        		}
//        		else if(currentUser.provider === 'facebook'){
//        			return facebookService.isLoggedIn();
//        		}
//        		else if(currentUser.provider === 'google'){
//        			
//        		}
        		return true;
        	}
        	
    		return false;	
        };
        
        serv.currentUser = function(){
        	return currentUser;
        }

        return serv;

    }]);