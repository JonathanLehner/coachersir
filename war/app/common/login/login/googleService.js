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
        	var auth2 = gapi.auth2.getAuthInstance();
        	return auth2.signIn({'scope': 'profile email'});
        };
        
        serv.logout = function(){
        	var auth2 = gapi.auth2.getAuthInstance();
        	return auth2.signOut();
        };
        
        serv.getConnectedUser = function(){
        	var auth2 = gapi.auth2.getAuthInstance();
        	return auth2.currentUser.get();
        };
        
        return serv;
    }]);