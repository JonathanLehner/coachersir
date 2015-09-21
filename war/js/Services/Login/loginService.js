/**
 * Created by itay on 9/15/2015.
 */
angular.module('myApp.services')
    .factory('loginService',['$modal', function ($modal) {
        "use strict";

        var serv={};

        serv.login = function(){
            var modalLogin = $modal.open({
                templateUrl:'/app/Login/login.html',
                keyboard: 'static',
                controller:'loginCtrl',
                backdrop:true
            });
        }

        return serv;

        }
    ]);