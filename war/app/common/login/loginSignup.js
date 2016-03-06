/**
 * Created by itay on 3/2/2016.
 */
angular.module('myApp.directives').directive('loginSignup',['loginService',function(loginService) {
        return {
            restrict: 'EA',
            templateUrl: "/app/common/login/login_menu.html",
            scope: {
            },
            link: function ($scope) {
                "use strict";
                   $scope.login =  function(){
                       loginService.signIn();
                   };

                    $scope.signUp = function(){
                        loginService.signUp();
                    };
            }
        };
    }]
);