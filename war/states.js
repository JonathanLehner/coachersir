
angular.module('myApp')
    .config(function($stateProvider,$urlRouterProvider){
        
    	'use strict';
        
        $urlRouterProvider
            .when('/home1',function(){})
            .otherwise('/home');

        $stateProvider.state('main',{
            url:'/',
            controller: 'mainCtrl',
            templateUrl: 'app/main/main.html'
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
        .state('main.home',{
            url:'home',
            parent:'main',
            controller: 'videosCtrl',
            views:{
                app:{
                    /*templateUrl:'app/'*/
                    templateUrl: 'app/main/home/videos.html'
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
        .state('modal', {
            parent: 'main.coach',
            abstract:true,
            url: '/coach/:id',
            onEnter: ['$modal', '$state', function($modal, $state) {
                console.log('Open modal');
                $modal.open({
                    windowClass: 'right fade',
                    templateUrl:'/app/modals/user/user.html',
                    keyboard: true,
                    controller:'userCtrl',
                    backdrop:'static'
                    }).result.finally(function() {
                        $state.go('main.coach');
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
                    templateUrl: 'app/modals/user/addArticle.html'}
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
});
