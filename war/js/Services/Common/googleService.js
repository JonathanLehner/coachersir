angular.module('myApp.services')
    .service('googleService',['$resource','$q',function($resource,$q) {
        'use strict';

        var resolve = function(errorVal, returnVal, deferred) {
			if (errorVal) {
			  deferred.reject(errorVal);
			} else {
			  deferred.resolve(returnVal);
			}
        };
        
        var serv = {};
        
        serv.login = function(){
        	
        };
        
        serv.logout = function(){
        	
        };
        
        serv.isConnected = function(){
        	return false;
        };
        
        serv.getConnectedUser = function(){
        	
        };
        
        return serv;
    }]);