/**
 * Created by itay on 3/1/2016.
 */
var angular;
angular.module('myApp')
    .config(function($stateProvider,$urlRouterProvider) {
        'use strict';

        $urlRouterProvider
            .otherwise('/home');

        $stateProvider
        .state('home', {
            url: '/home',
            controller: 'homeCtrl',
            views: {
                app: {
                    templateUrl: 'app/home/home.html'
                }
            }
        });

    });