angular.module('myApp.services')
    .factory('errorService',['$resource','$translate',
                     function($resource , $translate) {
        'use strict';

        var serv = {};
        
        var emailNotVerified = 320;
        var emailExists = 330;
        
        serv.getErrorMsg = function(status){
        	switch(status) {
	            case emailNotVerified:
	            	return $translate.instant('Error.Email_Not_Verified');
	            case emailExists:
	            	return $translate.instant('Error.Email_Exists');
	            default:
	                return undefined;
        	}
        }
        
        return serv;
    }]);