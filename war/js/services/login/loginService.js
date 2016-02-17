angular.module('myApp.services')
    .factory('loginService',['$modal','$http','$resource','$q','facebookService','googleService','userService', 
                     function($modal , $http , $resource , $q , facebookService , googleService , userService) {
        
    	"use strict";

        var serv={};
		var modalLogin;
        var currentUser;

        serv.clearCurrentUser = function(){
        	currentUser = {
        			id:undefined,
        			first_name:undefined,
        			last_name:undefined,
        			provider:undefined,
        			provider_id:undefined,
        			main_img:undefined
    		};	
        };
        
		serv.setCurrentUser = function(id,first_name,last_name,
									   provider,provider_id,main_img){
			serv.clearCurrentUser();
			setTimeout(function(){
				currentUser.id = id;
				currentUser.first_name = first_name;
				currentUser.last_name = last_name;
				currentUser.provider = provider;
				currentUser.provider_id = provider_id;
				currentUser.main_img = main_img;
			},200);
		};
		
		var providerLogin = function(user){
			userService.providerLogin(user).then(function(response){
				console.log('provider login success: ' + response);
				serv.setCurrentUser(response.data.id,
							   response.data.first_name,
							   response.data.last_name,
							   response.data.provider,
							   response.data.provider_id,
							   response.data.main_img);
			}, function(error){
				console.log('provider login error: ' + error);
				serv.clearCurrentUser();
			});        			
		}
		
		var localLogin = function(user){
			var deferred = $q.defer();
			
			userService.localLogin(user).then(
				function(response) {
					console.log('local login success: ' + response);
					
					serv.setCurrentUser(response.data.id,
							   response.data.first_name,
							   response.data.last_name,
							   response.data.provider,
							   response.data.provider_id,
							   response.data.main_img);
					
					resolve(null, response, deferred);
		        },function(error){
		        	console.log('local login error: ' + error);
		        	serv.clearCurrentUser();
		        	resolve(error, null, deferred);
            });
			
			return deferred.promise;
		}
            	
        serv.closeLogin = function(){
     		if(modalLogin){
     			modalLogin.close();
     		}
 		};

        serv.login = function(user, provider){
            
        	if(provider === 'local'){
        		var localUser={};
        		localUser.email = user.email;
        		localUser.password = user.password;
        		return localLogin(localUser);
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
					this.clearCurrentUser();
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
        			this.clearCurrentUser();
        		});
        	}else{
        		console.log('wrong login provider!');
        	}
        };
        
        serv.logout = function(){
        	if(this.isLoggedIn()){
        		this.clearCurrentUser();
        		
        		if(this.currentUser().provider === 'local'){
					// specific code
				}else if(this.currentUser().provider === 'facebook'){
					facebookService.logout();
	        	}else if(this.currentUser().provider === 'google'){
	        		googleService.logout();
	        	}
        		
        		userService.logout().then(function(response){
					console.log('logout success: ' + response);
				},function(error){
					console.log('logout error: ' + error);	
				});
			}
        };
        
        serv.isLoggedIn = function(){
        	if(currentUser && (typeof currentUser.id !== 'undefined')){
        		return true;
        	}
        	
    		return false;	
        };
        
        serv.currentUser = function(){
        	return currentUser;
        };
        
        serv.refreshStatus = function(){	
    		userService.refreshAuthUser().then(
				function(response){
	    			if(response.data){
						serv.setCurrentUser(response.data.id,
	    						   response.data.first_name,
	    						   response.data.last_name,
	    						   response.data.provider,
	    						   response.data.provider_id,
	    						   response.data.main_img);
	    			}
    			},function(error){
    				console.log('refreshAuthUser error: ' + error);
    		});
        };

        serv.signIn = function(parameter){
            if(modalLogin !== undefined){
                modalLogin.close();
            }
            modalLogin = $modal.open({
                templateUrl:'/app/modals/login/login.html',
                keyboard: true,
                controller:'loginCtrl',
                backdrop:'static'
            });
        };

        serv.signUp = function(parameter){
            if(modalLogin !== undefined){
                modalLogin.close();
            }
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
        

        var resolve = function(errorVal, returnVal, deferred) {
			if (errorVal) {
			  deferred.reject(errorVal);
			} else {
			  deferred.resolve(returnVal);
			}
        };
        
        return serv;

    }]);