angular.module('myApp.services')
    .service('facebookService',['$resource','$q','$rootScope',function($resource,$q,$rootScope) {
        'use strict';

        // resolving or rejecting a promise from a third-party
        // API such as Facebook must be
        // performed within $apply so that watchers get
        // notified of the change
        var resolve = function(errorVal, returnVal, deferred) {
          $rootScope.$apply(function() {
            if (errorVal) {
              deferred.reject(errorVal);
            } else {
              returnVal.connected = true;
              deferred.resolve(returnVal);
            }
          });
        }
        
        var serv = {};
        
        serv.getUser = function(FB) {
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
            
            var promise = deferred.promise();
            promise.connected = false;
            return promise;
        };
        
        serv.getLoginUser = function(FB) {
        	FB.getLoginStatus(function(response) {
            	if (response.status == 'connected') {
            		FB.api('/me', function(response) {
            			return response
            		});
            	} else if (response.status == 'not_authorized') {
            		FB.login(function(response) {
            			if (response.authResponse) {
            				FB.api('/me', function(response) {
            					return response;
            				});
            			} else {
            				return null;
            			}
            		});
            	} 
        	});
        }
        
        return serv;
    }]);