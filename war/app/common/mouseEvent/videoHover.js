/**
 * Created by itay on 3/7/2016.
 */
angular.module('myApp.directives').directive('videoHover', function () {
    return {
        restrict: 'A',
        scope: {
            hoverClass: '@'
        },
        link: function (scope, element) {
            element.on('mouseenter', function() {
                element.context.firstElementChild.play();
            });
            element.on('mouseleave', function() {
                element.context.firstElementChild.pause();
            });

            element.on('$destroy', function () {
                scope.$destroy();
            });
        }
    };
})