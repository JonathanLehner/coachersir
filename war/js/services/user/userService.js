angular.module('myApp.services')
    .factory('userService',['$modal','$http','$resource','$q', 
                   function ($modal , $http , $resource , $q){
        'use strict';

        var url_prefix = 'api/userEndpoint';
        
        var serv={};

        var coachersData = {};

        serv.getCoachersData = function(){
            return coachersData;
        };

        serv.setCoachersData = function(coachersDataSet){
            coachersData = coachersDataSet;
        };
        
        serv.getAll = function(){
            return $resource(url_prefix + '/list').query().$promise;
        };

        serv.getCoachers = function(){
            return $resource(url_prefix + '/listCoaches').query().$promise;
        };

        serv.getTrained = function(){
            return $resource(url_prefix + '/listTrained').query().$promise;
        };
        
        serv.getById = function(id){
	    	return $resource(url_prefix + '/get?id=' + id).get().$promise;
	    };

        serv.insertCoach = function(user){
	    	var data = user;

            return $http({
                method: 'POST',
                url: url_prefix + '/insertCoach',
                headers: {'Content-Type': 'application/json'},
                data: data
            }).$promise;
	    };

	    serv.insertTrained = function(user){
	    	var data = user;

            return $http({
                method: 'POST',
                url: url_prefix + '/insertTrained',
                headers: {'Content-Type': 'application/json'},
                data: data
            }).$promise;
	    };

	    serv.update = function(user){
	    	var deferred = $q.defer();
	    	
            $http({
                method: 'POST',
                url: url_prefix + '/update',
                headers: {'Content-Type': 'application/json'},
                data: user
            }).then(function(response){
            	resolve(null, response, deferred);
            },function(error){
            	resolve(error, null, deferred);
            });
            
            return deferred.promise;
	    };
	    
	    serv.remove = function(id){
	    	var deferred = $q.defer();
	    	
	    	var data = {id: id};

            $http({
                method: 'POST',
                url: url_prefix + '/remove',
                headers: {'Content-Type': 'application/json'},
                data: data
            }).then(function(response){
            	resolve(null, response, deferred);
            },function(error){
            	resolve(error, null, deferred);
            });
            
            return deferred.promise;
	    };
	    
	    serv.refreshAuthUser = function(){
	    	var deferred = $q.defer();
	    	
	    	$http({
                method: 'POST',
                url: url_prefix + '/refreshAuthUser',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	    	}).then(function(response){
            	resolve(null, response, deferred);
            },function(error){
            	resolve(error, null, deferred);
            });
	    	
	    	return deferred.promise;
	    }
	    
	    serv.localLogin = function(user){
	    	var deferred = $q.defer();

	    	$http({
                method: 'POST',
                url: url_prefix + '/login',
                //headers: {'Content-Type': 'application/json'},
                data: user
	    	}).then(function(response){
            	resolve(null, response, deferred);
            },function(error){
            	resolve(error, null, deferred);
            });
	    	
	    	return deferred.promise;
	    };
	    
	    serv.providerLogin = function(user){
	    	var deferred = $q.defer();
	    	
	    	$http({
                method: 'POST',
                url: url_prefix + '/providerLogin',
                headers: {'Content-Type': 'application/json'},
                data: user	
            }).then(function(response){
            	resolve(null, response, deferred);
            },function(error){
            	resolve(error, null, deferred);
            });
	    	
	    	return deferred.promise;
	    };

	    serv.resetPassword = function(email){
	    	var deferred = $q.defer();
	    	
	    	$http({
                method: 'POST',
                url: url_prefix + '/resetPassword',
                headers: {'Content-Type': 'application/json'},
                data: email
	    	}).then(function(response){
            	resolve(null, response, deferred);
            },function(error){
            	resolve(error, null, deferred);
            });
	    	
	    	return deferred.promise;
	    };
	    
	    serv.logout = function(){
	    	var deferred = $q.defer();
	    	
	    	$http({
                method: 'POST',
                url: url_prefix + '/logout',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	    	}).then(function(response){
            	resolve(null, response, deferred);
            },function(error){
            	resolve(error, null, deferred);
            });
	    	
	    	return deferred.promise;
	    };
	    
	    var resolve = function(errorVal, returnVal, deferred) {
			if (errorVal) {
			  deferred.reject(errorVal);
			} else {
			  deferred.resolve(returnVal);
			}
        };
	    
        return serv;
    }]
);