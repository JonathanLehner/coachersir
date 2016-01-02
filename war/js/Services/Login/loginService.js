angular.module('myApp.services')
    .factory('loginService',['$modal','$http','$resource','$httpParamSerializerJQLike','facebookService','googleService','userService', 
                     function ($modal,$http,$resource,$httpParamSerializerJQLike, facebookService, googleService, userService) {
        
    	"use strict";

        var serv={};
		var modalLogin;
        var currentUser;
        var clearCurrentUser = function(){
        	currentUser = {
        			id:undefined,
        			first_name:undefined,
        			last_name:undefined,
        			provider:undefined,
        			provider_id:undefined
    		};	
        };
        
		var setCurrentUser = function(id,first_name,last_name,
										provider,provider_id,main_img){
			currentUser.id = id;
			currentUser.first_name = first_name;
			currentUser.last_name = last_name;
			currentUser.provider = provider;
			currentUser.provider_id = provider_id;
			currentUser.main_img = main_img;
		};
		
		var providerLogin = function(user){
			userService.providerLogin(user).then(function(response){
				console.log('provider login success: ' + response);
				setCurrentUser(response.data.id,
							   response.data.first_name,
							   response.data.last_name,
							   response.data.provider,
							   response.data.provider_id);
			}, function(error){
				console.log('provider login error: ' + error);
				clearCurrentUser();
			});        			
		}
		
		var localLogin = function(user){
			userService.localLogin(user).then(function(response) {
				console.log('local login success: ' + response);
            	setCurrentUser(response.id,
						   response.first_name,
						   response.last_name,
						   response.provider,
						   response.provider_id);
            }, function(error){
            	console.log('local login error: ' + error);
            	clearCurrentUser();
            });
		}
            	
        serv.closeLogin = function(){
     		modalLogin.close();
 		};

        serv.login = function(user, provider){
            
        	if(provider === 'local'){
        		var localUser={};
        		localUser.email = user.email;
        		localUser.password = user.password;
        		localUser.provider='local';
        		localLogin(localUser);
        	}else if(provider === 'facebook'){
        		facebookService.login().then(function(response){
        			var facebookUser={};
        			facebookUser.provider='facebook';
        			facebookUser.provider_id = response.id;
        			facebookUser.first_name=response.first_name;
        			facebookUser.last_name=response.last_name;
        			facebookUser.main_img=response.picture.data.url;
        			facebookUser.birth_date=response.birthday;
        			providerLogin(facebookUser);
        		}, function(error){
        			console.log('facebook login error: ' + error);
        			clearCurrentUser();
        		});
        	}else if(provider === 'google'){
        		googleService.login().then(function(response){
        			var user = googleService.getConnectedUser().getBasicProfile();
        			var googleUser={};
        			googleUser.provider='google';
        			googleUser.provider_id = user.getId();
        			googleUser.first_name = user.getGivenName();
        			googleUser.last_name = user.getFamilyName();
        			googleUser.email = user.getEmail();
        			googleUser.main_img = user.getImageUrl();
    				providerLogin(googleUser);
        		}, function(error){
        			console.log('google login error: ' + error);
        			clearCurrentUser();
        		});
        	}
        };
        
        serv.logout = function(){
        	if(this.isLoggedIn()){
				
        		if(this.currentUser().provider === 'local'){
					//local logout
        			clearCurrentUser();
				}else if(this.currentUser().provider === 'facebook'){
					facebookService.logout();
					clearCurrentUser();
	        	}else if(this.currentUser().provider === 'google'){
	        		googleService.logout();
	        		clearCurrentUser();
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

        serv.refreshStatus = function(){	
    		clearCurrentUser();
    		
    		if(facebookService.isConnected()){
        		facebookService.getCurrentUser().then(function(response){
        			currentUser = response;
        			currentUser.provider='facebook';
        		},
        		function(error){
        			console.log(error);
        			clearCurrentUser();
        		});
        	}
        	
        	if(!this.isLoggedIn()){
        		if(googleService.isConnected()){
        			googleService.getCurrentUser().then(function(response){
            			currentUser = response;
            			currentUser.provider='google';
            		},
            		function(error){
            			console.log(error);
            			clearCurrentUser();
            		});
            	};        	
        	}
        };

        serv.signIn = function(parameter){
            modalLogin = $modal.open({
                templateUrl:'/app/modals/login/login.html',
                keyboard: true,
                controller:'loginCtrl',
                backdrop:'static'
            });
        };

        serv.signUp = function(parameter){
            modalLogin = $modal.open({
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
        
        serv.refreshStatus();
        
        return serv;

    }]);