angular.module('myApp.services')
    .factory('userService',['$modal','$http','$resource', '$httpParamSerializerJQLike', function ($modal,$http,$resource,$httpParamSerializerJQLike)  {
        'use strict';

        //var url_prefix = '_ah/api/userEndpoint/v1';
        var url_prefix = 'api/userEndpoint';
        
        var serv={};

        serv.getById = function(id){
	    	return $resource(url_prefix + '/get?id=' + id).query().$promise;
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

        return serv;

    }]
);