angular.module('myApp.services')
    .service('facebookService',['$resource','$q',function($resource,$q) {
        'use strict';

        var resolve = function(errorVal, returnVal, deferred) {
			if (errorVal) {
			  deferred.reject(errorVal);
			} else {
			  deferred.resolve(returnVal);
			}
        };
        
        var serv = {};
        
        serv.isConnected = function(){
        	FB.getLoginStatus(function(response) {
            	if (response.status == 'connected') {
            		return true;
            	}else{
            		return false;
            	}
        	});
        };
        
        serv.login = function() {
        	var deferred = $q.defer();
            
        	FB.getLoginStatus(function(response) {
            	if (response.status == 'connected') {
            		FB.api('/me',{fields: 'id,first_name,last_name,email,picture,birthday'}, function(response) {
            			resolve(null, response, deferred);
            		});
            	} else /*if (response.status == 'not_authorized')*/ {
            		FB.login(function(response) {
            			if (response.authResponse) {
            				FB.api('/me', function(response) {
            					resolve(null, response, deferred);
            				});
            			} else {
            				resolve(response.error, null, deferred);
            			}
            		});
            	} 
        	});
            
            return deferred.promise;
        };
        
        serv.logout = function(){
        	FB.logout(function(response){
        		console.log('facebook logout: ' + response);
        	});
        };
        
        serv.getConnectedUser = function() {
            var deferred = $q.defer();
            
            FB.api('/me',function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
			});
            
            return deferred.promise;
        }
        
        return serv;
    }]);