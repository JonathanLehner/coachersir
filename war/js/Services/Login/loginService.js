angular.module('myApp.services')
    .factory('loginService',['$modal','$http','$resource', '$httpParamSerializerJQLike', function ($modal,$http,$resource,$httpParamSerializerJQLike) {
        "use strict";

        var serv={};

        serv.login = function(){
            var modalLogin = $modal.open({
                templateUrl:'/app/modals/login.html',
                keyboard: true,
                controller:'loginCtrl',
                backdrop:'static'
            });
        };

        serv.insertUser = function(user){
            var data = user;

            return $http({
                method: 'POST',
                url: '_ah/api/userEndpoint/v1/user',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)

            }).success(function () {});
        };

        serv.UserSignIn = function(user){
            var data = user;

            return $http({
                method: 'POST',
                url: '_ah/api/userEndpoint/v1/login',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)

            }).success(function () {});
        };

        return serv;

        }
    ]);