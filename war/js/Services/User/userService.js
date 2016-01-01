angular.module('myApp.services')
    .factory('userService',['$modal','$http','$resource','$httpParamSerializerJQLike','$q', 
                   function ($modal , $http , $resource , $httpParamSerializerJQLike , $q){
        'use strict';

        //var url_prefix = '_ah/api/userEndpoint/v1';
        var url_prefix = 'api/userEndpoint';
        
        var serv={};

        serv.getById = function(id){
	    	return $resource(url_prefix + '/get?id=' + id).get().$promise;
	    };
	    
	    serv.getAll = function(){
	    	return $resource(url_prefix + '/list').query().$promise;
	    };
	    
	    serv.getCoachers = function(){
	    	return $resource(url_prefix + '/listCoachers').query().$promise;
        };
        
        serv.getTrained = function(){
        	return $resource(url_prefix + '/listTrained').query().$promise;
        };
        
        serv.insertCoach = function(user){
	    	var data = user;

            return $http({
                method: 'POST',
                url: url_prefix + '/insertCoach',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)

            }).$promise;
	    };

	    serv.insertTrained = function(user){
	    	var data = user;

            return $http({
                method: 'POST',
                url: url_prefix + '/insertTrained',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)

            }).$promise;
	    };

	    serv.update = function(user){
	    	var data = user;

            return $http({
                method: 'POST',
                url: url_prefix + '/update',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)
            }).$promise;
	    };
	    
	    serv.remove = function(id){
	    	var data = {id: id};

            return $http({
                method: 'POST',
                url: url_prefix + '/remove',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)
            }).$promise;
	    };

	    serv.localLogin = function(user){
	    	return $http({
                method: 'POST',
                url: url_prefix + '/login',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(user)
            }).$promise;
	    };
	    
	    serv.providerLogin = function(user){
	    	var deferred = $q.defer();
	    	
//	    	return $http({
//                method: 'POST',
//                url: url_prefix + '/providerLogin',
//                headers: {'Content-Type': 'application/json'},
//                data: user
//            }).$promise;
	    	
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