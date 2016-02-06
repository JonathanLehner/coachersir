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
        
        var client_id = '36220948397-o3i72noo8flkppesr1anaod07hig4v6r.apps.googleusercontent.com';
        var apiKey = 'AIzaSyDV347aqOUbpx3WzZmotlrOe637REIbjkQ';
        var scopes = 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email';
        var deferred = $q.defer();

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