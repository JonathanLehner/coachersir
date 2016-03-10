/**
 * Created by itay on 3/1/2016.
 */
/**
 * Created by itay on 12/24/2015.
 */
angular.module('myApp.directives').directive('search',['$rootScope', function($rootScope) {
    return {
        restrict: 'E',
        templateUrl: "/app/search/search.html",
        scope: {},
        link: function ($scope) {
            "use strict";

        }
}
}]);
