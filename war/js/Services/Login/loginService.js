/**
 * Created by itay on 9/15/2015.
 */
angular.module('myApp.services')
    .factory('loginService',['$modal','$http','$resource', function ($modal,$http,$resource) {
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

        serv.insertUser = function(email,password){
            return $http({
                method: 'POST',
                url: '_ah/api/userEndpoint/v1/user',
                data: {
                    email: email,
                    password: password
                },headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            })
        };

        return serv;

        }
    ]);