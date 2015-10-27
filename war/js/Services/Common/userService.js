angular.module('myApp.services')
    .factory('userService',['$modal','$http','$resource', '$httpParamSerializerJQLike', function ($modal,$http,$resource,$httpParamSerializerJQLike)  {
        'use strict';

        var serv={};

        serv.openUserModal = function(){
            var userModal = $modal.open({
                templateUrl:'/app/modals/user.html',
                keyboard: true,
                controller:'userCtrl',
                backdrop:'static'
            });
        };

        serv.getUser = function(userId){
            return $resource('_ah/api/userEndpoint/v1/user/:id',{id: userId}).get().$promise;
        }

        return serv;

    }]
);