angular.module('myApp.services')
    .service('facebookService',['$resource','$q','$rootScope',function($resource,$q,$rootScope) {
        'use strict';

        var resolve = function(errorVal, returnVal, deferred) {
			if (errorVal) {
			  deferred.reject(errorVal);
			} else {
			  deferred.resolve(returnVal);
			}
        }
        
        var serv = {};
        
        serv.login = function() {
        	var deferred = $q.defer();
            
        	FB.getLoginStatus(function(response) {
            	if (response.status == 'connected') {
            		FB.api('/me', function(response) {
            			resolve(null, response, deferred);
            		});
            	} else if (response.status == 'not_authorized') {
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
            
            FB.api('/me', 
        		{//fields: 'last_name'
        		}, 
        		function(response) {
	                if (!response || response.error) {
	                    deferred.reject('Error occured');
	                } else {
	                    deferred.resolve(response);
	                }
    			}
    		);
            
            return deferred.promise;
        }
        
        return serv;
    }]);