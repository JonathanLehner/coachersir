
angular.module('myApp')
    .config(function($stateProvider,$urlRouterProvider){
        'use strict';
        $urlRouterProvider
            .otherwise('/home');

        $stateProvider
            .state('main',{
                url:'/',
                controller: 'menuCtrl',
                 templateUrl: 'app/main/main.html'});



        $stateProvider.state('main.coach',{
            url:'coachers',
            parent:'main',
           controller: 'coachersCtrl',
                views:{
                    app:{
                    templateUrl: 'app/main/coachers/coachers.html'}
                }
            })
            .state('main.home',{
                url:'home',
                parent:'main',
                controller: 'homeCtrl',
                views:{
                    app:{
                        /*templateUrl:'app/'*/
                        templateUrl: 'app/main/home/home.html'}
                }
            })

        .state('main.articles',{
            url:'articles',
            controller: 'articlesController',
                views: {
                    app: {
                        templateUrl: 'app/main/article/articles.html'}
                    }
                })
        .state('main.aboutUs',{
            url:'aboutUs',
            controller: 'aboutUs',
                views: {
                    app: {
                        templateUrl: 'app/main/aboutUs/aboutUs.html'}
                }
            })

});
