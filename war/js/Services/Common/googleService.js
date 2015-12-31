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
        
        /*
        serv.login = function () {
        	gapi.auth.authorize({ 
        		client_id: client_id,
        		scope: scopes
        	}, this.handleAuthResult);
        	
        	return deferred.promise;
        }

        serv.handleAuthResult = function(authResult) {
            if (authResult && !authResult.error) {
                var data = {};
                gapi.client.load('oauth2', 'v2', function () {
                    var request = gapi.client.oauth2.userinfo.get();
                    request.execute(function (resp) {
                        data = resp;
                        resolve(null, data, deferred);
                    });
                });
            } else {
            	resolve(authResult.error,null, deferred)
            }
        };
        
        serv.logout = function(){
        	var auth2 = gapi.auth2.getAuthInstance();
        	
        	//gapi.client.oauth2.signOut().then(function(response){
        	auth2.signOut().then(function(response){
        		console.log('success google logout ' + response);
        	},
        	function(error){
        		console.log('error google logout ' + error);
        	});
        };
        
        serv.isConnected = function(){
        	var auth2 = gapi.auth2.getAuthInstance();
        	
        	return auth2.isSignedIn.get();
        };
        
        serv.getConnectedUser = function(){
        	var auth2 = gapi.auth2.getAuthInstance();
        	
        	return auth2.currentUser.get();
        };        
        */
        serv.login = function(){
        	var auth2 = gapi.auth2.getAuthInstance();
        	return auth2.signIn({'scope': 'profile email'});
        };
        
        serv.logout = function(){
        	var auth2 = gapi.auth2.getAuthInstance();
        	return auth2.signOut();
        };
        
        serv.isConnected = function(){
        	return false;
//        	var auth2 = gapi.auth2.getAuthInstance();
//        	auth2.isSignedIn.get();
        };
        
        serv.getConnectedUser = function(){
        	var auth2 = gapi.auth2.getAuthInstance();
        	return auth2.currentUser.get();
        };
        
        return serv;
    }]);