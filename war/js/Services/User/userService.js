angular.module('myApp.services')
    .factory('userService',['$modal','$http','$resource', '$httpParamSerializerJQLike', function ($modal,$http,$resource,$httpParamSerializerJQLike)  {
        'use strict';

        var url_prefix = '_ah/api/userEndpoint/v1';
        
        var serv={};

        serv.getUser = function(userId){
            return $resource(url_prefix + '/get?id='+ userId).get().$promise;
        };

        return serv;

    }]
);