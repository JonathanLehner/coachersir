
angular.module('myApp')
    .config(function($stateProvider,$urlRouterProvider){
        'use strict';
        $urlRouterProvider
            .when('/home1',function(){})
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

            .state('main.login',{
                url:'login',
                parent:'main',
                controller: 'loginCtrl',
                views:{
                    app:{
                        /*templateUrl:'app/'*/
                        templateUrl: 'app/Login/login.html'}
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
            .state('modal', {
                parent: 'main.coach',
                abstract:true,
                url: '/user',
                onEnter: ['$modal', '$state', function($modal, $state) {
                    console.log('Open modal');
                    $modal.open({
                        windowClass: 'right fade',
                        templateUrl:'/app/modals/user.html',
                        keyboard: true,
                        controller:'userCtrl',
                        backdrop:'static'
                        }).result.finally(function() {
                            $state.go('main.coach');
                        });
                }]
            }
        )
            .state('detailed',{
                url:'/detailed',
                parent:'modal',
                controller: 'userDetailedCtrl',
                views:{
                    'userView@':{
                        templateUrl: 'app/user/detailed.html'}
                }
            })
            .state('images',{
                url:'/images',
                parent:'modal',
                controller: 'UserImagesCtrl',
                views:{
                    'userView@':{
                        templateUrl: 'app/user/Img.html'}
                }
            })
});
