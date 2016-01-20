angular.module('myApp.services')
    .factory('coachersService',['$modal','$http','$resource', '$httpParamSerializerJQLike', function ($modal,$http,$resource,$httpParamSerializerJQLike) {
        
		"use strict";

        var url_prefix = 'api/userEndpoint';

		var serv={};

        serv.CoachersData = {};

        serv.getCoachersData = function(){
            return serv.CoachersData;
        };

        serv.setCoachersData = function(CoachersData){
            serv.CoachersData = CoachersData;
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
	
	    return serv;
    }
]);