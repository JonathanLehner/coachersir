/**
 * Created by itay on 9/15/2015.
 */
angular.module('myApp.services')
    .factory('loginService',['$modal','$http','$resource', '$httpParamSerializerJQLike', function ($modal,$http,$resource,$httpParamSerializerJQLike) {
        "use strict";

        var serv={};

        serv.login = function(){
            var modalLogin = $modal.open({
                templateUrl:'/app/Login/login.html',
                keyboard: true,
                controller:'loginCtrl',
                backdrop:'static'
            });
        };

        serv.insertUser = function(user){
            var data = {email:user.email,
                        password:user.password};

            return $http({
                method: 'POST',
                url: '_ah/api/userEndpoint/v1/user',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(data)

            }).success(function () {});
        };

        return serv;

        }
    ]);