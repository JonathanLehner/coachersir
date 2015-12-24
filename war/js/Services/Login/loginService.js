angular.module('myApp.services')
    .factory('loginService',['$modal','$http','$resource','$httpParamSerializerJQLike','facebookService','googleService', 
                     function ($modal,$http,$resource,$httpParamSerializerJQLike, facebookService, googleService) {
        
    	"use strict";

        var serv={};
		var url_prefix = 'api/userEndpoint';
		var currentUser = {
			id:undefined,
			first_name:undefined,
			last_name:undefined,
			provider:undefined
		};
		
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

    	serv.getStatus = function(){	
        	facebookService.isConntected().then(function(response){
        		currentUser = response;
    			currentUser.provider='facebook';
        	},function(error){
        		
        	});
        	
        	if(!this.isLoggedIn()){
        		googleService.isConntected().then(function(response){
            		currentUser = response;
        			currentUser.provider='goolge';
            	},function(error){
            		
            	});
        	}
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
	            	currentUser.provider='local';
	            }, function(error){
	            	console.log('local login error: ' + error);
	            	currentUser = undefined;
	            });
        	}else if(provider === 'facebook'){
        		facebookService.login().then(function(response){
        			currentUser = response;
        			currentUser.provider='facebook';
        		}, function(error){
        			console.log('facebook login error: ' + error);
        			currentUser=undefined;
        		});
        	}else if(provider === 'google'){
        		googleService.login().then(function(response){
        			currentUser = response;
        			currentUser.provider='google';
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
        	
        	if(typeof currentUser.id !== 'undefined'){
        		return true;
        	}
        	
    		return false;	
        };
        
        serv.currentUser = function(){
        	return currentUser;
        }
        
        serv.getStatus();
        
        return serv;

    }]);