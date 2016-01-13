angular.module('myApp.services')
    .factory('locationService',['$http','$resource','$q', 
                   function ($http , $resource , $q){
        'use strict';

        var url_prefix = 'api/userEndpoint';
        
        var serv={};

        serv.getById = function(id){
	    	return $resource(url_prefix + '/get?id=' + id).get().$promise;
	    };
	    
	    serv.getByUser = function(userId){
	    	return $resource(url_prefix + '/getByUser?userId=' + userId).get().$promise;
	    };
	    
	    serv.getAll = function(){
	    	return $resource(url_prefix + '/list').query().$promise;
	    };
	    
	    serv.insert = function(location){
	    	var data = location;

            return $http({
                method: 'POST',
                url: url_prefix + '/insertCoach',
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
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: data
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