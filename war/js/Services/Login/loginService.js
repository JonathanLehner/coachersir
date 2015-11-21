angular.module('myApp.services')
    .factory('loginService',['$modal','$http','$resource', '$httpParamSerializerJQLike', function ($modal,$http,$resource,$httpParamSerializerJQLike) {
        "use strict";

        var serv={};
        var url_prefix = '_ah/api/userEndpoint/v1';
        
        serv.login = function(){
            var modalLogin = $modal.open({
                templateUrl:'/app/modals/login/login.html',
                keyboard: true,
                controller:'loginCtrl',
                backdrop:'static'
            });
        };

        serv.signUp = function(parameter){
            var modalLogin = $modal.open({
                templateUrl:'/app/modals/login/login.html',
                keyboard: true,
                controller:'loginCtrl',
                backdrop:'static'
            });
        };

        serv.insertCoach = function(user){
            var data = user;

            return $http({
                method: 'POST',
                url: url_prefix + '/insertCoach',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)

            }).success(function () {});
        };

        serv.insertTrained = function(user){
            var data = user;

            return $http({
                method: 'POST',
                url: url_prefix + '/insertTrained',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)

            }).success(function () {});
        };

        serv.UserSignIn = function(user){
            var data = user;

            return $http({
                method: 'POST',
                url: url_prefix + '/login',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)

            }).success(function () {});
        };

        return serv;

        }
    ]);