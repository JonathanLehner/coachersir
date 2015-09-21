
angular.module('myApp.controllers',['myApp.controllers.main']);
angular.module('myApp.controllers.main',[]);
angular.module('myApp.services',[]);
angular.module('myApp.directives',[]);

angular.module('myApp',
    ['ui.router',
     'ngResource',
     'ngCookies',
     'ngAnimate',
     'ui.bootstrap',
     'pascalprecht.translate',
     'myApp.controllers',
     'myApp.services',
     'myApp.directives']);

