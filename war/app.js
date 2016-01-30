angular.module('myApp.controllers',['myApp.controllers.main']);
angular.module('myApp.controllers.main',[]);
angular.module('myApp.services',[]);
angular.module('myApp.directives',[]);
angular.module('myApp.filters',[]);

angular.module('myApp',
    ['ui.router',
     'ngResource',
     'ng',
     'ngCookies',
     'ngAnimate',
     'ngFileUpload',
     'ui.bootstrap',
     'ngMaterial',
        'ngSanitize',
     'ngMessages',
     'pascalprecht.translate',
     'angular-carousel-3d',
     'myApp.controllers',
     'myApp.services',
     'myApp.directives',
     'myApp.filters']);

