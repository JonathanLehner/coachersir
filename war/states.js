
angular.module('myApp')
    .config(function($stateProvider,$urlRouterProvider,$locationProvider){

    	'use strict';

        $urlRouterProvider
            .when('/home1',function(){})
            .otherwise('/home');

        $stateProvider.state('main',{
            url:'/',
            controller: 'mainCtrl',
            abstract:true,
            templateUrl: 'app/main/main.html'
        })
        .state('main.home',{
            url:'home',
            parent:'main',
            controller: 'homeCtrl',
            views:{
                app:{
                    /*templateUrl:'app/'*/
                    templateUrl: 'app/main/home/home.html'
            	}
            }
        })
        .state('main.coach',{
            url:'coachers',
            parent:'main',
            controller: 'coachersCtrl',
            views:{
                app:{
                	templateUrl: 'app/main/coachers/coachers.html'
        		}
            }
        })
        .state('main.login',{
            url:'login',
            parent:'main',
            controller: 'loginCtrl',
            views:{
                app:{
                    templateUrl: 'app/modal/login/login.html'
            	}
            }
        })
        .state('main.signUp',{
            url:'signUp',
            parent:'main',
            controller: 'signUpCtrl',
            views:{
                app:{
                    templateUrl: 'app/modal/login/signUp.html'
                }
            }
        })
        .state('main.articles',{
            url:'articles',
            parent:'main',
            controller: 'articlesCtrl',
            views: {
                app: {
                	templateUrl: 'app/main/articles/articles.html'
        		}
            }
        })
        .state('main.aboutUs',{
            url:'aboutUs',
            parent:'main',
            controller: 'aboutUsCtrl',
            views: {
                app: {
                    templateUrl: 'app/main/aboutUs/aboutUs.html'}
            }
        })
        .state('main.contactUs',{
            url:'contactUs',
            parent:'main',
            controller: 'contactUsCtrl',
            views: {
                app: {
                    templateUrl: 'app/main/contactUs/contactUs.html'}
            }
        })
        .state('main.verifyEmail',{
            url:'verifyEmail?email&v',
            parent:'main',
            controller: 'verifyEmailCtrl',
            views: {
                app: {
                    templateUrl: 'app/main/verifyEmail.html'}
            }
        })
        .state('modal', {
            url: 'coach/:id',
            parent:'main',
                params:{
                    currentState:'main.coach'
                },
                abstract:true,
            onEnter: ['$modal','$state','userService','$stateParams', function($modal, $state,userService,$stateParams) {
                userService.getById($stateParams.id).then(function(data){
                    if(data.id == null || data.id === undefined){
                        alert('You\'ve selected the alert tab!');
                        $state.go('main.coach');
                    }else{
                        var modal = $modal.open({
                            windowClass: 'right fade',
                            templateUrl:'/app/modals/user/user.html',
                            keyboard: true,
                            controller:'userCtrl',
                            backdrop:'static'
                        }).result.finally(function() {
                                $state.go($stateParams.currentState);
                        });
                    }
                });

            }]
        })
        .state('details',{
            url:'/details',
            parent:'modal',
            controller: 'userDetailsCtrl',
            views:{
                'userView@':{
                    templateUrl: 'app/modals/user/view/userDetails.html'}
            }
        })
        .state('images',{
            url:'/images',
            parent:'modal',
            controller: 'userImagesCtrl',
            views:{
                'userView@':{
                    templateUrl: 'app/modals/user/view/userImages.html'}
            }
        })
        .state('videos',{
            url:'/videos',
            parent:'modal',
            controller: 'userVideosCtrl',
            views:{
                'userView@':{
                    templateUrl: 'app/modals/user/view/userVideos.html'}
            }
        })
        .state('articles',{
        	url:'/articles',
        	parent:'modal',
        	controller: 'userArticlesCtrl',
        	views:{
                'userView@':{
                    templateUrl: 'app/modals/user/view/userArticles.html'}
            }
        })
        .state('addArticle',{
        	url:'/addArticle',
        	parent:'modal',
        	controller: 'addArticleCtrl',
        	views:{
                'userView@':{
                    templateUrl: 'app/modals/user/content/addArticle.html'}
            }
        })
        .state('addVideo',{
        	url:'/addVideo',
        	parent:'modal',
        	controller: 'addVideoCtrl',
        	views:{
                'userView@':{
                    templateUrl: 'app/modals/user/content/addVideo.html'}
            }
        })
/*
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/
});
